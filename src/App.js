import React from 'react';
import Grid from "@material-ui/core/Grid"
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
        result:this.state.result + button,
      })

    }
  }
  calculate(){
    try{
      this.setState({
        result : (eval(this.state.result || "").toFixed(4)) + ""
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
            
              <Grid container justify="center">
                <HeaderOfCalculator/>
              </Grid>
              <Display result={this.state.result}/>
              <KeyPads onClick={this.onClick}/> 
            
          </div>
    );
  }
}

export default App;
