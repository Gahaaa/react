# React

## Our First React Element

### 기존과는 다른 방식

<b>기존</b>:html -> js
<b>리액트</b>:js -> html
ㄴ 유저가 보는 화면 컨트롤 가능

```js
const root = document.getElementById("root");
const h3 = React.createElement(
  "h3",
  {
    onMouseEnter: () => console.log("mouse enter"),
  },
  "hello,"
);
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("I'm clicked"),
    style: {
      background: "tomato",
    },
  },
  "Click me"
);
const container = React.createElement("div", null, [h3, btn]);
ReactDOM.render(container, root);
//스크립트에서 html, js 둘다 작성 가능
//선호되는 방식 아님

//변경
const root = document.getElementById("root");
const Title = (
  <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
    Hello I'm a title
  </h3>
);
const Button = (
  <button
    style={{ background: "tomato" }}
    onClick={() => console.log("clicked!")}
  >
    Click me
  </button>
);

const container = React.createElement("div", null, [Title, Button]);
ReactDOM.render(container, root);
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
- html과 비슷해 파악하기 쉬움
- 브라우저가 이해하려면 babel필요
- 직접 만든요소 반드시 **대문자**사용

```js
const root = document.getElementById("root");
const Title = () => (
  <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
    Hello I'm a title
  </h3>
);
const Button = () => (
  <button
    style={{ background: "tomato" }}
    onClick={() => console.log("clicked!")}
  >
    Click me
  </button>
);

const Container = (
  <div>
    <Title />
    <Button />
  </div>
);
ReactDOM.render(Container, root);
```

## State

- 기본적으로 데이터가 저장되는 곳

### useState

```js
const data = React.useState(0);
console.log(data); //[0, f][ch]

const x = [1, 2, 3];
const [a, b, c] = x;
```

**state를 세팅하는 데는 2가지 방법**
1. 직접 할당 :setState(state +1)
2. 함수를 할당:setState(state => state +1) (함수의 첫번째 인자는 현재 state 이다)

현재 state랑 관련이 없는 값을 새로운 state로 하고싶은 경우에는 (1),
현재 state에 조금의 변화를 주어서 새로운 state를 주고 싶은 경우에는 (2)

```js
let [counter, setCounter] = React.useState(0);
      const onClick= ()=>{
        // setCounter(counter+1);  직접할당
        setCounter((current) => current +1); // 함수 할당 
  
      }; 
```

<br>

```js
//counter
const root = document.getElementById("root");
    
    function App() {
  
      let [counter, setCounter] = React.useState(0);
      const onClick= ()=>{
        // setCounter(counter+1);
        setCounter((current) => current +1); 
  
      }; 
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={onClick}>Click me</button>
        </div>
      );
    }
    ReactDOM.render(<App />, root);
```

<br>

### Input and State
**몇몇 html 문법은 jsx에서 나중에 문제가 될 수 있음(자바스크립트가 선점한 단어)** 

- class -> className
- for -> htmlFor


## Props
```js
function Btn({text, changeValue}){
  //이벤트 추가를 위해
      return <button
      style={{
        backgroundColor:"tomato",
        color:"white",
        borderRadius:10,
        padding:"10px 20px",
        border:"none",
        fontSize:16,
        
      }}
      onClick={changeValue}
      >
        {text}
        </button>
    }


    function App() {
      const [vaule, setValue] = React.useState("Save Changes");
      const changeValue = ()=> setValue("Revert Changes");
      return (
        <div>
          <Btn 
          text={vaule}
          changeValue={changeValue}
          //props일뿐 이벤트가 아니다.
          />
          <Btn 
          text="Confirm"
          />
          
        </div>
      );
    }

```

## React.memo
```js
function Btn({text, changeValue}){
      console.log(text, "was rendered")
      return <button
      style={{
        backgroundColor:"tomato",
        color:"white",
        borderRadius:10,
        padding:"10px 20px",
        border:"none",
        fontSize:16,
        
      }}
      onClick={changeValue}
      >
        {text}
        </button>
    }


    const MemorizedBtn = React.memo(Btn);
    function App() {
      const [vaule, setValue] = React.useState("Save Changes");
      const changeValue = ()=> setValue("Revert Changes");
      return (
        <div>
          <MemorizedBtn 
          text={vaule}
          changeValue={changeValue}
          />
          <MemorizedBtn 
          text="Continue"
          />
          
        </div>
      );
    }
    //console.log(text, "was rendered")
    //Save Changes was rendered
    //Continue was rendered

    //클릭시
    //Revert Changes was rendered
```
-> 클릭시 모든 버튼 리랜더링 되는 것이 아니라, 클릭한 버튼만 리렌더링

<br>

## porpType

```html
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
<!-- 
  콘솔 PropTypes 

-->

```

```js
Btn.porpTypes ={
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired
}
//props의 타입을 정한 후 벗어나면 콘솔창에 경고를 볼 수 있다.
//.isRequired 없으면 에러
```
1. 리액트는 파라미터를 잘 못 넘겨도 확인할 수 없는 문제점이 존재한다.
2. 이런 문제를 줄이기 위해서 PropTypes라는 모듈의 도움을 받을 수 있다.
3. type과 다르게 입력 되엇을 경우 warning을 뜨게 할수 있고, parameter 에 값을 넣지 않는 경우 경고 메시지를 띄울수 있다.
