import React from 'react';


import Header from './Header/Header'
import './App.css';
import Cart from './Cart/Cart';
import ComputerParts from './src/ComputerParts/ComputerParts';



class App extends React.Component {
  
  constructor(){
    super()  
  this.state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  return (
    <div className="App">
      <Header />
        <main>
          <ComputerParts 
            selected ={this.state.selected}/> 
          <Cart />
        </main>
    </div>
  );
}


export default App;
