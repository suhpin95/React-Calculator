import React,{ Component } from "react";
import Grid from "@material-ui/core/Grid"

export default class KeyPads extends Component{
    render(){
        return(
            <div className = "button">
                <Grid container justify="center">
                    <button name = "("  onClick={event => this.props.onClick(event.target.name)} > ( </button>   
                    <button name = "DEL" onClick={event => this.props.onClick(event.target.name)} >DEL</button>
                    <button name = ")"  onClick={event => this.props.onClick(event.target.name)}  >)</button>
                    <button name = "C" onClick={event => this.props.onClick(event.target.name)}   >C</button>
                    <br/>
                </Grid>

                <Grid container justify="center">
                    <button variant="contained" name="1" onClick={event=>this.props.onClick(event.target.name)}>1</button>
                    <button variant="contained" name="2" onClick={event=>this.props.onClick(event.target.name)}>2</button>
                    <button variant="contained" name="3" onClick={event=>this.props.onClick(event.target.name)}>3</button> 
                    <button variant="contained" name="+" onClick={event=>this.props.onClick(event.target.name)}>+</button>
                    <br/>
                </Grid>
                    
                <Grid container justify="center">
                    <button variant="contained" name="4" onClick={event=>this.props.onClick(event.target.name)}>4</button>
                    <button variant="contained" name="5" onClick={event=>this.props.onClick(event.target.name)}>5</button>
                    <button variant="contained" name="6" onClick={event=>this.props.onClick(event.target.name)}>6</button>
                    <button variant="contained" name="-" onClick={event=>this.props.onClick(event.target.name)}>-</button>
                    <br/>
                </Grid> 

                <Grid container justify="center">
                    <button variant="contained" name="7" onClick={event=>this.props.onClick(event.target.name)}>7</button>
                    <button variant="contained" name="8" onClick={event=>this.props.onClick(event.target.name)}>8</button>
                    <button variant="contained" name="9" onClick={event=>this.props.onClick(event.target.name)}>9</button>
                    <button variant="contained" name="*" onClick={event=>this.props.onClick(event.target.name)}>*</button>
                    <br/>
                </Grid>    
                
                <Grid container justify="center">
                    <button variant="contained" name="." onClick={event=>this.props.onClick(event.target.name)}>.</button>
                    <button variant="contained" name="0" onClick={event=>this.props.onClick(event.target.name)}>0</button>
                    <button variant="contained" name="=" onClick={event=>this.props.onClick(event.target.name)}>=</button>
                    <button variant="contained" name="/" onClick={event=>this.props.onClick(event.target.name)}>/</button>
                </Grid>    
                
            </div>
        )
    }
}