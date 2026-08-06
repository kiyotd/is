import { IsBreakpoint } from '../IsBreakpoint';
import { IsDevice } from '../IsDevice';
import { IsScrollBottom } from '../IsScrollBottom';
import { IsScrollDown } from '../IsScrollDown';
import { IsScrolled } from '../IsScrolled';
import { IsScrollTop } from '../IsScrollTop';
import { IsScrollUp } from '../IsScrollUp';

interface Window {
  IsScrolled: typeof IsScrolled;
  IsScrollTop: typeof IsScrollTop;
  IsScrollBottom: typeof IsScrollBottom;
  IsScrollUp: typeof IsScrollUp;
  IsScrollDown: typeof IsScrollDown;
  IsBreakpoint: typeof IsBreakpoint;
  IsDevice: typeof IsDevice;
}

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
