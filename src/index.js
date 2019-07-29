import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import TestModule from 'components/Test.module';
import './styles/index.styl';

ReactDOM.render(
  <div>
    <Test />
    <TestModule />
  </div>,
  document.getElementById('root')
);
