import React from 'react';
import Counter from './Counter';
import MyComponet from './MyComponet';
import Say from './Say';

const App = () => {
  return (
    <div>
      <div>
        <MyComponet name="react" favoriteNumber={8}>
          리액트
        </MyComponet>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Say />
      </div>
    </div>
  );
};

export default App;
