import React from "react";
export default class Calculator extends React.Component{

    constructor(props){
        super(props)
        this.state = {res:""}
        this.ButtonFun  = this.ButtonFun.bind(this)
        this.ClearFun = this.ClearFun.bind(this)
        this.EqualFun = this.EqualFun.bind(this)
        this.str = ""
    }

   ButtonFun(event){

    this.setState({res:this.state.res = this.state.res+event.target.value})
    

    var Operator = ""
    var Operator_Index = ""
    var str1 = ""
    var str2 = ""
    for(var i =0; i<this.state.res.length;i++){
        if(this.state.res[i]==="+" || this.state.res[i]==="-"||this.state.res[i]==="*"||this.state.res[i]==="/"){
            Operator = this.state.res[i];
            Operator_Index = i
        }
        str1 = str1+ this.state.res[i]
    }

    for(var j = Operator_Index+1; j<this.state.res.length;j++){
        str2 = str2 + this.state.res[j]
    }

    if(Operator==="+"){
        this.str = parseInt(str1)+parseInt(str2)
    }else if(Operator === "-"){
        this.str = parseInt(str1)-parseInt(str2)
    }else if(Operator === "*"){
        this.str = parseInt(str1)*parseInt(str2)
    }else if(Operator === "/"){
        this.str = parseInt(str1) / parseInt(str2)
    }

    event.preventDefault()
   }
  EqualFun(event){
    this.setState({res:this.str})
    event.preventDefault()
   }

   ClearFun(event){
    this.setState({res:event.target.value})
    event.preventDefault()
   }

    render(){
        return(
                <div>
                    <h1>Our Calculator</h1>
                    <input type="text" value={this.state.res} onChange={this.ClearFun} />
                    <br />
                    <button value="1" onClick={this.ButtonFun}>1</button>
                    <button value="2" onClick={this.ButtonFun}>2</button>
                    <button value="3" onClick={this.ButtonFun}>3</button>
                    <button value="4" onClick={this.ButtonFun}>4</button>
                    <br />
                    <button value="5" onClick={this.ButtonFun}>5</button>
                    <button value="6" onClick={this.ButtonFun}>6</button>
                    <button value="7" onClick={this.ButtonFun}>7</button>
                    <button value="8" onClick={this.ButtonFun}>8</button>
                    <br />
                    <button value="9" onClick={this.ButtonFun}>9</button>
                    <button value="0" onClick={this.ButtonFun}>0</button>
                    <button value="+" onClick={this.ButtonFun}>+</button>
                    <button value="-" onClick={this.ButtonFun}>-</button>
                    <br />
                    <button value="/" onClick={this.ButtonFun}>/</button>
                    <button value="*" onClick={this.ButtonFun}>*</button>
                    <button value=" " onClick={this.ClearFun}>C</button>
                    <button  onClick={this.EqualFun}>=</button>
                </div>
        )
    }


}