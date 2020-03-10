import React,{Component} from "react";
import Grid from "@material-ui/core/Grid"
class Display extends Component{
    render(){
        let {result} = this.props;
        return(
            <div className="result">
                <Grid container justify="center">
                    {result}
                </Grid>
            </div>
            
        );
    }
}

export default Display;