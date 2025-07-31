# @kiyotd/is

JavaScript utility library for scroll detection and device/browser identification with automatic CSS class management.

## Demo

- [ESM Demo](https://prjtest.com/@kiyotd/is/) - dist/is.min.js
- [UMD Demo](https://prjtest.com/@kiyotd/is/browser.html) - dist/is.umd.min.js

## Available Classes

### Scroll Related

- **IsScrolled** - Adds `is-scrolled` class when page is scrolled
- **IsScrollTop** - Adds `is-scroll-top` class when near page top
- **IsScrollBottom** - Adds `is-scroll-bottom` class when near page bottom
- **IsScrollUp** - Adds `is-scroll-up` class when scrolling up
- **IsScrollDown** - Adds `is-scroll-down` class when scrolling down

### Responsive Related

- **IsBreakpoint** - Adds breakpoint classes (`is-bp-sm`, `is-bp-md`, `is-bp-lg`, `is-bp-xl`)

### Device & Browser Detection

- **IsDevice** - Detects device and browser, adds CSS classes
  - Device: `is-android`, `is-ipad`, `is-iphone`, `is-pc`
  - Browser: `is-chrome`, `is-firefox`, `is-safari`, `is-ie`, `is-edge`

## How to Use

### Using with NPM

First, install the package:

```shell
npm i @kiyotd/is
```

or

```shell
yarn add @kiyotd/is
```

Example usage:

```javascript
import { IsScrolled, IsScrollTop, IsScrollBottom, IsScrollUp, IsScrollDown, IsBreakpoint, IsDevice } from "@kiyotd/is";

document.addEventListener('DOMContentLoaded', () => {
  const isScrolled = new IsScrolled();
  // isScrolled.scrollThreshold = 10;
  // isScrolled.targetSelector = 'body';
  // isScrolled.className = 'is-scrolled';
  isScrolled.init();

  const isScrollTop = new IsScrollTop();
  // isScrollTop.scrollThreshold = 0;
  // isScrollTop.targetSelector = 'body';
  // isScrollTop.className = 'is-scroll-top';
  isScrollTop.init();

const isScrollBottom = new IsScrollBottom();
  // isScrollBottom.scrollThreshold = 100;
  // isScrollBottom.targetSelector = 'body';
  // isScrollBottom.className = 'is-scroll-bottom';
  isScrollBottom.init();

  const isScrollUp = new IsScrollUp();
  // isScrollUp.scrollThreshold = 10;
  // isScrollUp.targetSelector = 'body';
  // isScrollUp.className = 'is-scroll-up';
  // isScrollUp.lastScrollY = 0;
  isScrollUp.init();

  const isScrollDown = new IsScrollDown();
  // isScrollDown.scrollThreshold = 10;
  // isScrollDown.targetSelector = 'body';
  // isScrollDown.className = 'is-scroll-down';
  // isScrollDown.lastScrollY = 0;
  isScrollDown.init();

  const isScrollBottom = new IsScrollBottom();
  // isScrollBottom.scrollThreshold = 100;
  // isScrollBottom.targetSelector = 'body';
  // isScrollBottom.className = 'is-scroll-bottom';
  isScrollBottom.init();

  const isBreakpoint = new IsBreakpoint();
  // isBreakpoint.breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };
  // isBreakpoint.targetSelector = 'body';
  // isBreakpoint.prefix = 'is-bp';
  isBreakpoint.init();

  const isDevice = new IsDevice();
  // isDevice.targetSelector = 'body';
  isDevice.init();
});
```

### Using dist/is.min.js directly (ESM)

```html
<body>
  <script type="module">
    import { IsScrolled, IsDevice } from './dist/is.min.js';

    document.addEventListener('DOMContentLoaded', () => {
      const isScrolled = new IsScrolled();
      isScrolled.init();

      const isDevice = new IsDevice();
      isDevice.init();
    });
  </script>
</body>
```

### Using dist/is.umd.min.js directly (UMD)

```html
<body>
  <script src="dist/is.umd.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const isScrolled = new IsScrolled();
      isScrolled.init();

      const isDevice = new IsDevice();
      isDevice.init();
    });
  </script>
</body>
```

## API

### Common Methods

```javascript
// Initialize
instance.init(options);

// Pause
instance.pause();

// Resume
instance.resume();

// Destroy completely
instance.destroy();
```

### Configuration Options

You can set options in two ways:

1. **Pass options to `init()` method**:

```javascript
const isScrolled = new IsScrolled();
isScrolled.init({
  scrollThreshold: 20,
  targetSelector: '.container',
  className: 'custom-scrolled'
});
```

2. **Set properties directly after creating instance**:

```javascript
const isScrolled = new IsScrolled();
isScrolled.scrollThreshold = 20;
isScrolled.targetSelector = '.container';
isScrolled.className = 'custom-scrolled';
isScrolled.init();
```

#### Scroll Position Classes (IsScrolled, IsScrollTop)

```javascript
{
  scrollThreshold: number,  // Scroll threshold in pixels
  targetSelector: string,   // Target element selector
  className: string         // CSS class name to add
}
```

#### Scroll Direction Classes (IsScrollUp, IsScrollDown)

```javascript
{
  scrollThreshold: number,  // Scroll threshold in pixels
  targetSelector: string,   // Target element selector
  className: string,        // CSS class name to add
  lastScrollY: number       // Previous scroll position (default: current position)
}
```

#### Scroll Bottom Class (IsScrollBottom)

```javascript
{
  scrollThreshold: number,  // Scroll threshold in pixels from bottom
  targetSelector: string,   // Target element selector
  className: string         // CSS class name to add
}
```

#### Breakpoint Detection Class (IsBreakpoint)

```javascript
{
  breakpoints: object,      // Breakpoint definitions { sm: 640, md: 768, lg: 1024, xl: 1280 }
  targetSelector: string,   // Target element selector
  prefix: string           // CSS class prefix (default: 'is-bp')
}
```

#### Device Detection Class (IsDevice)

```javascript
{
  targetSelector: string    // Target element selector
}
```
