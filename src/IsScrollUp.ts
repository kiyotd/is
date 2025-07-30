import { InitProps } from "./types/InitProps";

class IsScrollUp {
  public scrollThreshold: number;
  public targetSelector: string;
  public className: string;
  public lastScrollY: number;

  public constructor() {
    this.scrollThreshold = 10;
    this.targetSelector = "body";
    this.className = "is-scroll-up";
    this.lastScrollY = 0;
  }

  updateClass = (): void => {
    const currentScrollY = window.scrollY; // 現在のスクロール位置
    const target: Element | null = document.querySelector(this.targetSelector);

    if (target) {
      if (currentScrollY < this.lastScrollY) {
        target.classList.add(this.className);
      } else {
        target.classList.remove(this.className);
      }
    } else {
      console.error(`Element not found: ${this.targetSelector}`);
    }

    this.lastScrollY = currentScrollY; // 現在のスクロール位置を保存
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

    if (arg && arg.lastScrollY !== undefined) {
      this.lastScrollY = arg.lastScrollY;
    } else {
      // 初期化時に現在のスクロール位置を設定
      this.lastScrollY = window.scrollY;
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

export { IsScrollUp };
