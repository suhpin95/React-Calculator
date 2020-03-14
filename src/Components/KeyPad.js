import React,{ Component } from "react";
import Grid from "@material-ui/core/Grid"

export default class KeyPads extends Component{
    render(){
        return(
            <div className = "button">
                <Grid container justify="center">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name = "("  onClick={event => this.props.onClick(event.target.name)} >(</button>   
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name = "DEL" onClick={event => this.props.onClick(event.target.name)}>DEL</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name = ")"  onClick={event => this.props.onClick(event.target.name)} >)</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name = "C" onClick={event => this.props.onClick(event.target.name)}  >C</button>
                    <br/>
                </Grid>

                <Grid container justify="center">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="1" onClick={event=>this.props.onClick(event.target.name)}>1</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="2" onClick={event=>this.props.onClick(event.target.name)}>2</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="3" onClick={event=>this.props.onClick(event.target.name)}>3</button> 
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="+" onClick={event=>this.props.onClick(event.target.name)}>+</button>
                    <br/>
                </Grid>
                    
                <Grid container justify="center">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="4" onClick={event=>this.props.onClick(event.target.name)}>4</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="5" onClick={event=>this.props.onClick(event.target.name)}>5</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="6" onClick={event=>this.props.onClick(event.target.name)}>6</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="-" onClick={event=>this.props.onClick(event.target.name)}>-</button>
                    <br/>
                </Grid> 

                <Grid container justify="center">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="7" onClick={event=>this.props.onClick(event.target.name)}>7</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="8" onClick={event=>this.props.onClick(event.target.name)}>8</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="9" onClick={event=>this.props.onClick(event.target.name)}>9</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="*" onClick={event=>this.props.onClick(event.target.name)}>*</button>
                    <br/>
                </Grid>    
                
                <Grid container justify="center">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="." onClick={event=>this.props.onClick(event.target.name)}>.</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="0" onClick={event=>this.props.onClick(event.target.name)}>0</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="=" onClick={event=>this.props.onClick(event.target.name)}>=</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" name="/" onClick={event=>this.props.onClick(event.target.name)}>/</button>
                </Grid>    
                
            </div>
        )
    }
}