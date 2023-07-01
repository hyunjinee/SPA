# 바닐라 타입스크립트 TODO

이 프로젝트에서는 TodoListManager라는 모델을 만들고, 이 모델의 subscriber 필드에 해당 모델에 의존하는 컴포넌트의 render 메서드를 구독하여 모델에 변화가 생기면 구독하고 있는 컴포넌트를 렌더링하는 방식으로 TodoListManager를 구현했다.

DOM을 Mutation할 때 Diffing Algorithm이 없으면 무조건 내부 innerHTML을 날리고 새로 그려야하는 아쉬움이 존재했다.
