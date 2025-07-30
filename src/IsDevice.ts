import { IsDeviceInitProps } from "./types/IsDeviceInitProps";

class IsDevice {
  public targetSelector: string;

  public constructor() {
    this.targetSelector = "body";
  }

  updateClass = (): void => {
    const target: Element | null = document.querySelector(this.targetSelector);
    if (!target) {
      console.error(`Element not found: ${this.targetSelector}`);
      return;
    }

    const userAgent = navigator.userAgent;

    // Device type checks
    if (/android/i.test(userAgent)) {
      target.classList.add("is-android");
    } else {
      target.classList.remove("is-android");
    }

    if (/iPad/.test(userAgent) && !(window as any).MSStream) {
      target.classList.add("is-ipad");
    } else {
      target.classList.remove("is-ipad");
    }

    if (/iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      target.classList.add("is-iphone");
    } else {
      target.classList.remove("is-iphone");
    }

    if (!/android|iPad|iPhone|iPod/i.test(userAgent)) {
      target.classList.add("is-pc");
    } else {
      target.classList.remove("is-pc");
    }

    // Browser type checks
    if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
      target.classList.add("is-chrome");
    } else {
      target.classList.remove("is-chrome");
    }

    if (/Firefox/.test(userAgent)) {
      target.classList.add("is-firefox");
    } else {
      target.classList.remove("is-firefox");
    }

    if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
      target.classList.add("is-safari");
    } else {
      target.classList.remove("is-safari");
    }

    if (/MSIE|Trident/.test(userAgent)) {
      target.classList.add("is-ie");
    } else {
      target.classList.remove("is-ie");
    }

    if (/Edg/.test(userAgent)) {
      target.classList.add("is-edge");
    } else {
      target.classList.remove("is-edge");
    }
  };

  init(arg?: IsDeviceInitProps): void {
    if (arg && arg.targetSelector) {
      this.targetSelector = arg.targetSelector;
    }

    this.updateClass();
  }

  pause(): void {
    // デバイス検知は一度きりなので特に何もしない
  }

  resume(): void {
    this.init();
  }

  destroy(): void {
    const target: Element | null = document.querySelector(this.targetSelector);
    if (target) {
      // すべてのデバイス関連クラスを削除
      target.classList.remove("is-android", "is-ipad", "is-iphone", "is-pc");
      target.classList.remove("is-chrome", "is-firefox", "is-safari", "is-ie", "is-edge");
    }
  }
}

export { IsDevice };
