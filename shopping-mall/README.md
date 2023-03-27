## 쇼핑몰 SPA

## 요구사항 체크리스트

- [ ] 상품 목록 페이지

  - [ ] 상품 목록을 보여준다.
  - [ ] 각 상품을 클릭하면, 상품 상세 페이지로 이동한다.

- [ ] 상품 상세 페이지
  - [ ] 상품 ID에 맞는 상품을 불러오고, 상품과 옵션을 렌더링
  - [ ] 상품의 옵션을 선택할 수 있도록 처리
  - [ ] 상품을 선택하고 주문하기를 누르면, localStorage에 주문한 상품을 저장하고 장바구니 페이지로 이동

## 라우팅 처리

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcldaf3%2Fbtr4zcIUVKH%2FMQhtsN1PCtUlmwkOMdDC6k%2Fimg.png)

App 컴포넌트를 루트 컴포넌트로 두면 ProductList, ProductDetail, Cart 세개의 페이지로 나눌 수 있다.

```js
export default function App({ $target }) {
  this.route = () => {
    let { pathname } = location;
    $target.innerHTML = '';

    if (pathname === '/web/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.includes('/products/')) {
      const [, , , productId] = pathname.split('/');
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === '/cart') {
      new CartPage({ $target }).render();
    }
  };
  this.route();
  // 뒤로가기, 앞으로 가기 발생시 popstate 이벤트가 발생합니다.
  window.addEventListener('popstate', this.route);
}
```

또한 App 컴포넌트가 실행되면 라우팅을 처리하는 코드가 바로 실행되게끔 해주고, 뒤로가기 버튼을 누르면 popstate 이벤트가 발생하고 라우팅을 처리하는 코드가 실행되도록 해준다.

App에서 URL에 따라서 render 메서드를 호출한다. render 메서드를 호출하면 App 내부의 HTML을 날리고(innerHTML = '') JS로 동적으로 생성한 페이지를 렌더링하게 된다. URL에 대한 책임을 App 컴포넌트가 가지게 하고, 해당 책임에 따른 동작에 맞게 알맞은 페이지를 렌더링하는 구조는 각 페이지가 서로 서로의 의존성 없이 동작할 수 있게 해준다.

## ProductListPage

ProductListPage가 App 컴포넌트에 의해 생성되는 순간 fetchProducts가 실행되고 데이터를 서버로부터 가져온다. 서버로부터 데이터를 가져오면 setState를 호출해서 렌더링을 트리거한다. 따라서 하위 컴포넌트도 다시 렌더링된다. 하위 컴포넌트가 다시 렌더링되면서 서버로 부터 받아온 데이터를 활용하여 HTML을 만들어 UI에 렌더링한다.

## ProductDetailPage

a태그를 이용해서 페이지를 이동시킬 수 있지만, 이렇게 하면 페이지 이동시마다 페이지를 새로 불러오게된다. SPA에서는 매번 페이지를 새로 불러오는 방식이 아니라 클라이언트에서 페이지가 변경되는 부분만 새로 그리도록 처리해야 한다.

이렇게 처리하려면 [History API](https://developer.mozilla.org/ko/docs/Web/API/History_API)를 사용해야한다. 기본적으로 location.href등을 이용해 URL 변경 처리를 하면, 브라우저는 해당 페이지로 이동하면서 페이지를 새로 불러오게 된다. history.pushState를 통해 URL만 업데이트하면서 웹 브라우저의 기본적인 페이지 이동 처리를 방지할 수 있다.

```js
const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
};
```

![](https://user-images.githubusercontent.com/63354527/227758401-ae95f708-7ed2-4f95-b9a1-02a3dce58e6e.png)

상품 상세 페이지에서는 크게 세가지 기능을 구현해야 한다.

## 뒤로 가기 처리

상품 목록에서 상품 상세 페이지로 이동은 잘 되지만, 뒤로 가기를 했을 때(백스페이스를 누르거나 브라우저에서 뒤로가기 부턴을 누르는 등)는 렌더링이 잘 안되는 것을 확인할 수 있다. 이러한 경우 window의 popstate 이벤트를 통해 처리할 수 있다. 위 이벤트를 통해 뒤로 가기나 앞으로 가기등을 통해 브라우저 URL이 변경된 경우에 감지할 수 있다.

```js
// App.js
import ProductListPage from './ProductListPage.js'
import ProductDetailPage from './ProductDetailPage.js'
import CartPage from './CartPage.js'
import { init } from './router.js'

export default function App({ $target }) {
  .. 이전 코드 생략
  // 뒤로가기, 앞으로가기 발생 시 popstate 이벤트가 발생합니다.
  window.addEventListener('popstate', this.route)
}
```
