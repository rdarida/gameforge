import { Ticker } from 'pixi.js';

import { Tween } from '../../src/animation/Tween';
import { Transitions } from '../../src/animation';

describe('Test Tween class', () => {
  type TargetType = { x: number; y?: number };
  const target: TargetType = { x: 0 };
  let tween: Tween<TargetType>;

  beforeEach(() => {
    target.x = 0;
    tween = new Tween();
  });

  it('should be truthy', () => {
    expect(tween).toBeTruthy();
    expect(tween.target).toBeTruthy();
    expect(tween.duration).toBe(0);
    expect(tween.delay).toBe(0);
    expect(tween.transition).toBe(Transitions.linear);
  });

  it('should set the target property', () => {
    tween.setTarget(target);
    expect(tween.target).toBe(target);
  });

  it('should set the duration property', () => {
    tween.setDuration(1000);
    expect(tween.duration).toBe(1000);
  });

  it('should set the delay property', () => {
    tween.setDelay(100);
    expect(tween.delay).toBe(100);
  });

  it('should set the transition property', () => {
    tween.setTransition(Transitions.easeIn);
    expect(tween.transition).toBe(Transitions.easeIn);
  });

  it('should play the tween', () => {
    expect(target.x).toBe(0);

    const ticker = new Ticker();

    const tw = new Tween({ target, ticker })
      .setDuration(800)
      .setDelay(200)
      .onComplete(() => {
        expect(target.x).toBe(100);
      })
      .animate('x', 100)
      .animate('y', 100);

    tw.play();

    expect(tw.isComplete).toBe(false);

    for (let i = 1; i <= 10; ++i) {
      ticker.update(i * 100);
    }

    expect(tw.isComplete).toBe(true);
  });

  it('should stop the tween', () => {
    tween.setTarget(target).animate('x', 1000).stop();
    expect(tween.isComplete).toBe(true);
    expect(tween.target.x).toBe(1000);
  });
});
