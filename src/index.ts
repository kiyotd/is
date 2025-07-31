import { IsScrolled } from "./IsScrolled";
import { IsScrollTop } from "./IsScrollTop";
import { IsScrollBottom } from "./IsScrollBottom";
import { IsScrollUp } from "./IsScrollUp";
import { IsScrollDown } from "./IsScrollDown";
import { IsBreakpoint } from "./IsBreakpoint";
import { IsDevice } from "./IsDevice";

// ESモジュールとしてエクスポート
export { IsScrolled, IsScrollTop, IsScrollBottom, IsScrollUp, IsScrollDown, IsBreakpoint, IsDevice };

// ブラウザ環境でのみグローバルに公開
if (typeof window !== 'undefined') {
  (window as any).IsScrolled = IsScrolled;
  (window as any).IsScrollTop = IsScrollTop;
  (window as any).IsScrollBottom = IsScrollBottom;
  (window as any).IsScrollUp = IsScrollUp;
  (window as any).IsScrollDown = IsScrollDown;
  (window as any).IsBreakpoint = IsBreakpoint;
  (window as any).IsDevice = IsDevice;
}
