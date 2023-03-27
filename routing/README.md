# Routing

라우팅을 어떻게 처리할 것인가?

## popstate

Window 인터페이스의 popstate 이벤트는 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생한다. 만약 활성화된 엔트리가 history.pushState() 메서드나 history.replaceState() 메서드에 의해 생성되면, popstate 이벤트의 state 속성은 히스토리 엔트리 state 객체의 복사본을 가지게 된다.

history.pushState() 또는 history.replaceState()는 popstate 이벤트를 발생시키지 않는 것에 유의하자. popstate 이벤트는 브라우저의 백 버튼이나(history.back() 호출)등을 통해서만 발생된다.

## 뒤로가기 처리
