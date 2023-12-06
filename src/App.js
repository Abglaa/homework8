import './App.css';
import { Carousel } from './carousel/Carousel';

function App() {
  return (
    <Carousel>
      <div className='item item_1'></div>
      <div className='item item_2'>Item 1</div>
      <div className='item item_3'>Item 1</div>
    </Carousel>
  );
}

export default App;
