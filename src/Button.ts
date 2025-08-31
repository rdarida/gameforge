import { Graphics, Text, Sprite } from 'pixi.js';

export class Button extends Sprite {
  constructor(label: string) {
    super();

    const t = new Text(label, { fontWeight: '700' });
    t.anchor.set(0.5);
    this.addChild(t);

    const textWidth = Math.max(90, Math.round(t.getBounds().width * 0.5 + 40));

    const g = new Graphics();
    g.lineStyle({ color: 0x000000, width: 2 });
    g.beginFill(0xffffff);
    g.drawRect(-textWidth, -30, textWidth * 2, 60);
    g.endFill();
    this.addChildAt(g, 0);

    this.anchor.set(0.5);

    this.on('mouseover', () => this.scale.set(1.02));
    this.on('mouseout', () => this.scale.set(1));

    this.disable();
  }

  public enable(): void {
    this.eventMode = 'static';
    this.cursor = 'pointer';
  }

  public disable(): void {
    this.eventMode = 'none';
    this.cursor = '';
  }
}
