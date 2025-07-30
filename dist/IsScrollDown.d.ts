import { InitProps } from "./types/InitProps";
declare class IsScrollDown {
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
export { IsScrollDown };
