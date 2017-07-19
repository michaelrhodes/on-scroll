# on-scroll

on-scroll is a generic, mobile-friendly scroll listener. It can be used as a basis for modules that need to track element scroll offsets, even on mobile devices that don’t emit scroll events during gestures.

## Install

```sh
npm install on-scroll
```

### Usage

```js
var onscroll = require('on-scroll')

var el = document.body
var stop = onscroll(el, function (x, y) {
  console.log(x, y)
  => 0 235

  stop()
})
```

### License
[MIT](http://opensource.org/licenses/MIT)
