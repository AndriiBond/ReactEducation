import Slider from'./components/Slider'
import './App.css';

function App() {
  const catImages = [
    'https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/iPhone-Merry-Christmas-Cat-Wallpaper-640x361.png',
    'https://bipbap.ru/wp-content/uploads/2017/12/kittie-animals-blue-cats-eyes-2048x1152-wallpaper-640x360.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/01-vigilant-red-kitten-640x480.jpg',
    'https://bipbap.ru/wp-content/uploads/2017/12/1200x628_21_6e34306a2db10f61e0f641dd697ad619-1200x630_0x3e4c1b9b_20276859161456653801-640x335.jpeg'
  ];

  return (
    <div className="App">
        <Slider images={catImages}/>
    </div>
  );
}

export default App;
