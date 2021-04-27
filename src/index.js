import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { reducer } from './reducers/reducer'

const imageData = [
  [
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
  ],
  [
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg'
  ]
];

const initialState = {
  index: 0,
};

const store = createStore(reducer, initialState);

const mapStateToProps = (state) => {
  return {
    images: imageData[state.index],
    index: state.index
  }
}

const WrappedAppComponent = connect(mapStateToProps)(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedAppComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
