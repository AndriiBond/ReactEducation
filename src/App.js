import React, { Component } from "react"
import Slider from'./components/Slider'
import { changeImages } from './actions/slider'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  switchImagesIndex(index) {
    if (index === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    const dispatch = this.props.dispatch;

    return (
      <div className="App">
        <Slider images={this.props.images}/>
        <button onClick={()=> {
          const newIndex = this.switchImagesIndex(this.props.index);
          dispatch(changeImages(newIndex));
        }}>Change cats</button>
      </div>
    );
  }
}

export default App;
