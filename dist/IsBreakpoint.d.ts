import { InitProps } from "./types/InitProps";
interface BreakpointProps extends InitProps {
    breakpoints?: Record<string, number>;
    prefix?: string;
}
declare class IsBreakpoint {
    breakpoints: Record<string, number>;
    targetSelector: string;
    prefix: string;
    constructor();
    updateClass: () => void;
    init(arg?: BreakpointProps): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export { IsBreakpoint };
