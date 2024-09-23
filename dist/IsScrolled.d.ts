type InitProps = {
    scrollThreshold?: number;
    targetSelector?: string;
    className?: string;
};
declare class IsScrolled {
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
export { IsScrolled };
