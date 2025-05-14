export type FlowHandler = (flow: Flow) => void;

const DefaultHandler: FlowHandler = flow => flow.complete();

export class Flow {
  private _state: number;
  private _caller?: Flow;
  private _handler?: FlowHandler;

  public get state(): number {
    return this._state;
  }

  constructor() {
    this._state = 0;
  }

  public run(): void {
    this._state = 0;
    this._handler?.(this);
  }

  public start(handler = DefaultHandler): void {
    this._state++;

    const flow = Flow.create(handler);
    flow._caller = this;
    flow._handler = handler;
    flow._handler(flow);
  }

  public delay(ms: number = 0): void {
    this.start(flow => {
      setTimeout(() => flow.complete(), ms);
    });
  }

  public next(state: number): void {
    this._state = Math.max(-1, state - 1);
  }

  public complete(): void {
    this._caller?._handler?.(this._caller);
  }

  public static create(handler: FlowHandler): Flow {
    const flow = new Flow();
    flow._handler = handler;
    return flow;
  }
}
