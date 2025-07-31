import { IsScrolled } from '../IsScrolled';
import { IsScrollTop } from '../IsScrollTop';
import { IsScrollBottom } from '../IsScrollBottom';
import { IsScrollUp } from '../IsScrollUp';
import { IsScrollDown } from '../IsScrollDown';
import { IsBreakpoint } from '../IsBreakpoint';
import { IsDevice } from '../IsDevice';

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
