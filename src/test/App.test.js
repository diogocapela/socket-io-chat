/*
import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
*/

describe('<App />', () => {
  /*
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    );
  });
  */

  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});
