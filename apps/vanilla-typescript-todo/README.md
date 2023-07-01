# 바닐라 타입스크립트 TODO

이 프로젝트에서는 TodoListManager라는 모델을 만들고, 이 모델의 subscriber 필드에 해당 모델에 의존하는 컴포넌트의 render 메서드를 구독하여 모델에 변화가 생기면 구독하고 있는 컴포넌트를 렌더링하는 방식으로 TodoListManager를 구현했다.

![image](https://github.com/hyunjinee/linkgraph/assets/63354527/ef80686c-bfd1-4072-82f4-c76488e40b47)

위 그림을 보면 두개의 컴포넌트(Todo Form, Todo List)가 존재하고 Form에서 제출을 하면 Todo Model이 바뀌게 되고 이 모델을 구독하는 TodoList가 렌더링되게 된다. TodoList에서 TodoItem을 완료하거나 삭제했을 때도 마찬가지로 TodoManager에 의해 TodoList가 렌더링되게 된다.

DOM을 Mutation할 때 Diffing Algorithm이 없으면 무조건 내부 innerHTML을 날리고 새로 그려야하는 아쉬움이 존재했다.
