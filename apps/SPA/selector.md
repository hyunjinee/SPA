# DOM을 선택하는 방법

```js
// utils/dom.js
export const $ = (selector) => document.querySelector(selector)
export const $$ = (selector) => document.querySelectorAll(selector)
```
