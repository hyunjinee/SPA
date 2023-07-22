# classList

특정 요소에 클래스 리스트를 체크할 때

```js
$("nav").addEventListener("click", () => {
  const isCategoryButton = e.target.classList.contains("cafe-category-button")
})
```

위 예제에서는 `e.target`이 `cafe-category-button` 클래스를 가지고 있는지 확인한다.
