import { IsBreakpoint } from "./IsBreakpoint";
import { IsDevice } from "./IsDevice";
import { IsScrollBottom } from "./IsScrollBottom";
import { IsScrollDown } from "./IsScrollDown";
import { IsScrolled } from "./IsScrolled";
import { IsScrollTop } from "./IsScrollTop";
import { IsScrollUp } from "./IsScrollUp";

// ESモジュールとしてエクスポート
export { IsBreakpoint, IsDevice, IsScrollBottom, IsScrollDown, IsScrolled, IsScrollTop, IsScrollUp };

// ブラウザ環境でのみグローバルに公開
if (typeof window !== 'undefined') {
  window.IsScrolled = IsScrolled;
  window.IsScrollTop = IsScrollTop;
  window.IsScrollBottom = IsScrollBottom;
  window.IsScrollUp = IsScrollUp;
  window.IsScrollDown = IsScrollDown;
  window.IsBreakpoint = IsBreakpoint;
  window.IsDevice = IsDevice;
}
