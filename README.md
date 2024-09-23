# @kiyotd/is

フロントエンドでよく使う `is` 系のクラス付与・判定関数を ESモジュールとしてまとめたものです。

週末に少しずつ追加します。

- IsScrolled [Demo](https://prjtest.com/kiyotd/is/demo/)
    - 一定量スクロールすると body に `is-scrolled`クラスを付与。

## NPM から利用する場合 (例: IsScrolled)

```shell
npm i @kiyotd/is
```

```javascript
import { IsScrolled } from "@kiyotd/is";

document.addEventListener("DOMContentLoaded", () => {
  const isScrolled = new IsScrolled();
  // isScrolled.scrollThreshold = 10;
  // isScrolled.targetSelector = 'body';
  // isScrolled.className = 'is-scrolled';
  isScrolled.init();
});
```

## is.min.js を利用する場合 (例: IsScrolled)

```html

<body>
  <script type="module">
    import { IsScrolled } from './dist/is.min.js';

    document.addEventListener('DOMContentLoaded', () => {
      const isScrolled = new IsScrolled();
      isScrolled.init();
    });
  </script>
</body>
```
