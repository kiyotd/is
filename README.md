# @kiyotd/is

フロントエンドでよく使う `is` 系のクラス付与・判定関数を ESモジュールとしてまとめたものです。

## 利用可能なクラス

### スクロール関連

- **IsScrolled** - 一定量スクロールすると `is-scrolled` クラスを付与
- **IsScrollTop** - ページトップ付近で `is-scroll-top` クラスを付与
- **IsScrollUp** - 上方向にスクロールした時に `is-scroll-up` クラスを付与
- **IsScrollDown** - 下方向にスクロールした時に `is-scroll-down` クラスを付与

### デバイス・ブラウザ判定

- **IsDevice** - デバイスとブラウザーを判定してクラスを付与
  - デバイス: `is-android`, `is-ipad`, `is-iphone`, `is-pc`
  - ブラウザー: `is-chrome`, `is-firefox`, `is-safari`, `is-ie`, `is-edge`

## 使用方法

### NPM から利用する場合

まずインストールします：

```shell
npm i @kiyotd/is
```

または

```shell
yarn add @kiyotd/is
```

使用例：

```javascript
import { IsScrolled, IsScrollTop, IsScrollUp, IsScrollDown, IsDevice } from "@kiyotd/is";

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

  const isDevice = new IsDevice();
  // isDevice.targetSelector = 'body';
  isDevice.init();
});
```

### dist/is.min.js を直接利用する場合

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

## API

### 共通メソッド

```javascript
// 初期化
instance.init(options);

// 一時停止
instance.pause();

// 再開
instance.resume();

// 完全に削除
instance.destroy();
```

### 設定オプション

#### スクロール位置系クラス（IsScrolled, IsScrollTop）

```javascript
{
  scrollThreshold: number,  // スクロール閾値（px）
  targetSelector: string,   // 対象要素のセレクタ
  className: string         // 付与するクラス名
}
```

#### スクロール方向系クラス（IsScrollUp, IsScrollDown）

```javascript
{
  scrollThreshold: number,  // スクロール閾値（px）
  targetSelector: string,   // 対象要素のセレクタ
  className: string,        // 付与するクラス名
  lastScrollY: number       // 前回のスクロール位置（初期値、省略時は現在位置）
}
```

#### デバイス判定クラス（IsDevice）

```javascript
{
  targetSelector: string    // 対象要素のセレクタ
}
```
