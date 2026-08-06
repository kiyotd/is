import { IsBreakpoint } from '../IsBreakpoint';
import { IsDevice } from '../IsDevice';
import { IsScrollBottom } from '../IsScrollBottom';
import { IsScrollDown } from '../IsScrollDown';
import { IsScrolled } from '../IsScrolled';
import { IsScrollTop } from '../IsScrollTop';
import { IsScrollUp } from '../IsScrollUp';

// このファイルは top-level import を持つモジュールなので、
// グローバルの Window を拡張するには declare global で包む必要がある。
declare global {
  interface Window {
    IsScrolled: typeof IsScrolled;
    IsScrollTop: typeof IsScrollTop;
    IsScrollBottom: typeof IsScrollBottom;
    IsScrollUp: typeof IsScrollUp;
    IsScrollDown: typeof IsScrollDown;
    IsBreakpoint: typeof IsBreakpoint;
    IsDevice: typeof IsDevice;
  }
}
