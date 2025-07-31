import { InitProps } from "./types/InitProps";

class IsScrollBottom {
  public scrollThreshold: number;
  public targetSelector: string;
  public className: string;

  public constructor() {
    this.scrollThreshold = 100;
    this.targetSelector = "body";
    this.className = "is-scroll-bottom";
  }

  updateClass = (): void => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const target: Element | null = document.querySelector(this.targetSelector);

    if (target) {
      // ページの最下部に近づいているかチェック
      const isNearBottom = currentScrollY + windowHeight >= documentHeight - this.scrollThreshold;

      if (isNearBottom) {
        target.classList.add(this.className);
      } else {
        target.classList.remove(this.className);
      }
    } else {
      console.error(`Element not found: ${this.targetSelector}`);
    }
  };

  init(arg?: InitProps): void {
    window.removeEventListener("scroll", this.updateClass);

    if (arg && arg.scrollThreshold) {
      this.scrollThreshold = arg.scrollThreshold;
    }

    if (arg && arg.targetSelector) {
      this.targetSelector = arg.targetSelector;
    }

    if (arg && arg.className) {
      this.className = arg.className;
    }

    this.updateClass();
    window.addEventListener("scroll", this.updateClass);
  }

  pause(): void {
    window.removeEventListener("scroll", this.updateClass);
  }

  resume(): void {
    this.init();
  }

  destroy(): void {
    this.pause();
    const target: Element | null = document.querySelector(this.targetSelector);
    if (target) {
      target.classList.remove(this.className);
    }
  }
}

export { IsScrollBottom };
