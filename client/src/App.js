import React, { Component } from "react"
import Slider from'./components/Slider'
import { changeImages } from './actions/slider'
import LanguageSelector from './components/LanguageSelector'
import { LocaleProvider } from './context/LocaleContext'
import Tranclation from './components/Translation'
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
      <LocaleProvider>
        <div className="App">
          <Slider images={this.props.images}/>
          <LanguageSelector/>
            <button className={'change-cat-button'} onClick={()=> {
              const newIndex = this.switchImagesIndex(this.props.index);
              dispatch(changeImages(newIndex));
            }}>
                <Tranclation resource="change.cat" />
            </button>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
