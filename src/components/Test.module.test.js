import React from 'react';
import renderer from 'react-test-renderer';
import Test from './Test.module';

it('test render', () => {
  expect(renderer.create(<Test />).toJSON()).toMatchSnapshot();
});
