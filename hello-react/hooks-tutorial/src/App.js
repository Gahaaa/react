import { useState } from 'react';
import './App.css';
import Average from './Average';
import Counter from './Counter';
import Info from './Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <Average />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <h2>useState를 여러 번 사용하기</h2>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
      </div>
    </div>
  );
}

export default App;
