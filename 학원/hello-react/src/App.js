import React, { Component } from 'react';
import Counter from './Counter';
import EventPractice_c from './EventPractice_c';
import MyComponet from './MyComponet';
import Say from './Say';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <IterationSample />
        </div>
        <div>
          <h2>DOM에 접근하기</h2>
          <ValidationSample />
        </div>
        <div>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollBottom()}>
            맨 밑으로
          </button>
        </div>
      </div>
    );
  }
}

export default App;
