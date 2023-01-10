# React

## Our First React Element

### 기존과는 다른 방식
<b>기존</b>:html -> js
<b>리액트</b>:js -> html
ㄴ 유저가 보는 화면 컨트롤 가능

```js
const root = document.getElementById("root");
        const h3 = React.createElement("h3",
        {
            onMouseEnter: () => console.log("mouse enter")
        },
        "hello," );
        const btn =React.createElement("button", 
        {
            onClick:()=> console.log("I'm clicked"),
            style:{
                background:"tomato",
            }
        },
        "Click me");
        const container = React.createElement("div", null, [h3, btn])
        ReactDOM.render(container, root);
        //스크립트에서 html, js 둘다 작성 가능
```

---

## Components와 Props

- 개념적으로 컴포넌트는 JavaScript 함수와 유사함. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환함.
- props는 속성을 나타내는 데이터

### Components와
- 함수 컴포넌트
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- 클래스 컴포넌트
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## JSX
- 자바스크립트를 확장한 문법