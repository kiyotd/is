type InitProps = {
  scrollThreshold?: number;
  targetSelector?: string;
  className?: string;
};

class IsScrolled {
  public scrollThreshold: number;
  public targetSelector: string;
  public className: string;

  public constructor() {
    this.scrollThreshold = 10;
    this.targetSelector = "body";
    this.className = "is-scrolled";
  }

  updateClass = (): void => {
    const target: Element | null = document.querySelector(this.targetSelector);
    if (target) {
      if (window.scrollY >= this.scrollThreshold) {
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

export { IsScrolled };
