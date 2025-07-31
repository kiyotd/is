import { InitProps } from "./types/InitProps";

interface BreakpointProps extends InitProps {
  breakpoints?: Record<string, number>;
  prefix?: string;
}

class IsBreakpoint {
  public breakpoints: Record<string, number>;
  public targetSelector: string;
  public prefix: string;

  public constructor() {
    this.breakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    };
    this.targetSelector = "body";
    this.prefix = "is-bp";
  }

  updateClass = (): void => {
    const currentWidth = window.innerWidth;
    const target: Element | null = document.querySelector(this.targetSelector);

    if (target) {
      // 既存のブレークポイントクラスを削除
      Object.keys(this.breakpoints).forEach(bp => {
        target.classList.remove(`${this.prefix}-${bp}`);
      });

      // 現在のブレークポイントを判定
      let currentBreakpoint = '';
      Object.entries(this.breakpoints).forEach(([bp, width]) => {
        if (currentWidth >= width) {
          currentBreakpoint = bp;
        }
      });

      // 現在のブレークポイントクラスを追加
      if (currentBreakpoint) {
        target.classList.add(`${this.prefix}-${currentBreakpoint}`);
      }
    } else {
      console.error(`Element not found: ${this.targetSelector}`);
    }
  };

  init(arg?: BreakpointProps): void {
    window.removeEventListener("resize", this.updateClass);

    if (arg && arg.breakpoints) {
      this.breakpoints = arg.breakpoints;
    }

    if (arg && arg.targetSelector) {
      this.targetSelector = arg.targetSelector;
    }

    if (arg && arg.prefix) {
      this.prefix = arg.prefix;
    }

    this.updateClass();
    window.addEventListener("resize", this.updateClass);
  }

  pause(): void {
    window.removeEventListener("resize", this.updateClass);
  }

  resume(): void {
    this.init();
  }

  destroy(): void {
    this.pause();
    const target: Element | null = document.querySelector(this.targetSelector);
    if (target) {
      Object.keys(this.breakpoints).forEach(bp => {
        target.classList.remove(`${this.prefix}-${bp}`);
      });
    }
  }
}

export { IsBreakpoint };
