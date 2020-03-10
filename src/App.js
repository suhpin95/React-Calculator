import React from 'react';
import HeaderOfCalculator from "./Components/HeaderCalculator";
import KeyPads from "./Components/KeyPad";
import Display from './Components/Display'

class App extends React.Component {  
  
  constructor(){
    super();
    this.state = {
      result: ""
    }
  }
  onClick = button  => {
    if(button === '='){
      this.calculate();
    }
    else if(button === 'DEL'){
      this.deleteOneCharacter();
    }
    else if(button === 'C'){
      this.reset();
    }
    else{
      this.setState({
        result:this.state.result + button
      })
    }
  }
  calculate(){
    try{
      this.setState({
        result : (eval(this.state.result || "")) + ""
      })
    }
    catch (event){
      this.setState({
        result : "error"
      })
    }
  }
  reset(){
    this.setState({
      result: ""
    })
  }
  deleteOneCharacter(){
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }
  render(){
    return (
        <div>
          <HeaderOfCalculator/>
          <Display result={this.state.result}/>
          <KeyPads onClick={this.onClick}/>
        </div>
    );
  }
}

export default App;
