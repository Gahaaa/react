import { useCallback, useReducer, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodo() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      check: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로 추가
      //{type: 'INSERT', todo: {id : 1, text: 'todo', checked : false}}
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      //{type : 'REMOVE', id: 1}
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE": //토글
      //{type: 'TOGGLE', id : 1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodo);
  //todoReducer, undefined, createBulkTodo(reducer 함수, createBulkTodo, 초기값): 두 번째 undefined 세번째 createBulkTodo 처음 한 번만 렌더링 됨

  const nextId = useRef(2501);
  //지역변수일 때 useRef사용

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    //concat: 불변성을 지키며 추가
    nextId.current += 1; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
