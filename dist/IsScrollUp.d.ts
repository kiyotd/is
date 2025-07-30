import { InitProps } from "./types/InitProps";
declare class IsScrollUp {
    scrollThreshold: number;
    targetSelector: string;
    className: string;
    private lastScrollY;
    constructor();
    updateClass: () => void;
    init(arg?: InitProps): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export { IsScrollUp };
