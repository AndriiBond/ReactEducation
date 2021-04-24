import React, { Component } from "react"
import Slider from'./components/Slider'
import './App.css';
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
]
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: imageData[0],
      index: 0
    };
  }

  changeCats() {
    let index = 0;

    if (this.state.index === 0) {
     index = 1;
    }

    const newState = {
      index: index,
      images: imageData[index]
    };

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Slider images={this.state.images}/>
        <button onClick={this.changeCats.bind(this)}>Change cats</button>
      </div>
    );
  }
}

export default App;
