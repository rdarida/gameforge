import { Ticker, TickerCallback } from 'pixi.js';

import { MathUtil } from '../utils';
import { Transition, Transitions } from './Transition';

/**
 * Configuration object for the Tween class.
 */
export type TweenConfig<T> = {
  /**
   * The target object.
   */
  target: T;
  /**
   * Duration of the tween in milliseconds.
   */
  duration: number;
  /**
   * Delay in milliseconds before the tween starts.
   */
  delay: number;
  /**
   * Easing/transition function.
   */
  transition: Transition;
  /**
   * Callback when tween finishes.
   */
  onComplete: () => void;
  /**
   * PixiJS's Ticker used for updates.
   */
  ticker: Ticker;
};

/**
 * Default tween configuration.
 */
const defaultTweenConfig: TweenConfig<any> = {
  target: {},
  duration: 0,
  delay: 0,
  transition: Transitions.linear,
  onComplete: () => {},
  ticker: Ticker.shared
};

/**
 * A generic tweening class that animates numeric properties
 * of an object over time using PixiJS's Ticker.
 */
export class Tween<T> {
  private _target: T;
  private _duration: number;
  private _delay: number;
  private _transition: Transition;
  private _onComplete: () => void;
  private _ticker: Ticker;
  private _startValues: Map<string, number>;
  private _endValues: Map<string, number>;
  private _elapsedTime: number;
  private _isComplete: boolean;

  public get target(): T {
    return this._target;
  }

  public get duration(): number {
    return this._duration;
  }

  public get delay(): number {
    return this._delay;
  }

  public get transition(): Transition {
    return this._transition;
  }

  public get isComplete(): boolean {
    return this._isComplete;
  }

  /**
   * Creates a new Tween instance with optional configuration.
   * @param config The tween's configuration.
   */
  constructor(config?: Partial<TweenConfig<T>>) {
    ({
      target: this._target,
      duration: this._duration,
      delay: this._delay,
      transition: this._transition,
      onComplete: this._onComplete,
      ticker: this._ticker
    } = Tween.parseConfig(config));

    this._startValues = new Map();
    this._endValues = new Map();
    this._elapsedTime = 0;
    this._isComplete = false;
  }

  public setTarget(target: T): this {
    this._target = target;
    return this;
  }

  public setDuration(duration: number): this {
    this._duration = duration;
    return this;
  }

  public setDelay(delay: number): this {
    this._delay = delay;
    return this;
  }

  public setTransition(transition: Transition): this {
    this._transition = transition;
    return this;
  }

  public onComplete(onComplete: () => void): this {
    this._onComplete = onComplete;
    return this;
  }

  /**
   * Adds an animation for a specific numeric property of the target.
   * @param property The property key to animate.
   * @param endValue The final value for the property.
   */
  public animate<K extends keyof T>(property: K, endValue: number): this {
    if (
      !this._target ||
      typeof this._target !== 'object' ||
      !(property in this._target) ||
      typeof this._target[property] !== 'number'
    ) {
      return this;
    }

    this._startValues.set(property as string, this._target[property]);
    this._endValues.set(property as string, endValue);

    return this;
  }

  /**
   * Starts the tween animation.
   */
  public play<K extends keyof T>(): void {
    this._startValues.forEach((value, property) => {
      this._target[property as K] = value as T[K];
    });

    this._elapsedTime = -this._delay;
    this._isComplete = false;

    this._ticker.add(this.update);
  }

  /**
   * Stops the tween immediately, sets target properties to end values,
   * and calls the completion callback.
   */
  public stop<K extends keyof T>(): void {
    this._ticker.remove(this.update);

    this._isComplete = true;

    this._endValues.forEach((value, property) => {
      this._target[property as K] = value as T[K];
    });

    this._onComplete();
  }

  /**
   * Update function called on every ticker frame.
   * Handles time progression, easing, and property interpolation.
   */
  private update: TickerCallback<this> = <K extends keyof T>(): void => {
    this._elapsedTime += this._ticker.deltaMS;

    if (this._elapsedTime < 0) return;

    let ratio = MathUtil.clamp(this._elapsedTime / this._duration);
    ratio = this._transition(ratio);

    this._startValues.forEach((start, property) => {
      const end = this._endValues.get(property)!;
      this._target[property as K] = MathUtil.lerp(start, end, ratio) as T[K];
    });

    if (ratio === 1) {
      this._elapsedTime = this._duration;
      this.stop();
    }
  };

  /**
   * Merges user-provided configuration with defaults.
   * @param config The user-provided configuration.
   * @returns The merged configuration.
   */
  private static parseConfig<P>(
    config?: Partial<TweenConfig<P>>
  ): TweenConfig<P> {
    return {
      ...defaultTweenConfig,
      ...config
    };
  }
}
