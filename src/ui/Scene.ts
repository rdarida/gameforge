import { Container, DisplayObjectEvents } from 'pixi.js';

export class Scene extends Container {
  constructor(name: string) {
    super();

    this.name = name;
  }

  public override on(
    event: keyof DisplayObjectEvents | 'sceneevent',
    fn: (...args: any) => void,
    context?: any
  ): this {
    return super.on(event, fn, context);
  }

  public onEnter(): void {
    this.visible = true;
  }

  public onExit(): void {
    this.visible = false;
  }
}
