import { IsScrolled } from "./IsScrolled";
import { IsScrollTop } from "./IsScrollTop";
import { IsScrollBottom } from "./IsScrollBottom";
import { IsScrollUp } from "./IsScrollUp";
import { IsScrollDown } from "./IsScrollDown";
import { IsDevice } from "./IsDevice";

export { IsScrolled, IsScrollTop, IsScrollBottom, IsScrollUp, IsScrollDown, IsDevice };

// ブラウザ環境でグローバルに公開
if (typeof window !== 'undefined') {
  // 各クラスを直接グローバルに公開
  (window as any).IsScrolled = IsScrolled;
  (window as any).IsScrollTop = IsScrollTop;
  (window as any).IsScrollBottom = IsScrollBottom;
  (window as any).IsScrollUp = IsScrollUp;
  (window as any).IsScrollDown = IsScrollDown;
  (window as any).IsDevice = IsDevice;
}
