import { IsDeviceInitProps } from "./types/IsDeviceInitProps";
declare class IsDevice {
    targetSelector: string;
    constructor();
    updateClass: () => void;
    init(arg?: IsDeviceInitProps): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export { IsDevice };
