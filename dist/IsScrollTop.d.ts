import { InitProps } from "./types/InitProps";
declare class IsScrollTop {
    scrollThreshold: number;
    targetSelector: string;
    className: string;
    constructor();
    updateClass: () => void;
    init(arg?: InitProps): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export { IsScrollTop };
