import React, { Component } from 'react';
import './App.css';
import './QuesFormStyle.css';
import FirstQuesForm from './firstQuesForm';
import SecondQuesForm from './secondQuesForm';
import ThirdQuesForm from './thirdQuesForm';
import FourthQuesForm from './fourthQuesForm';
import FifthQuesForm from './fifthQuesForm';
import {setName} from './actions/userAction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.increaseIndexValue=this.increaseIndexValue.bind(this);
    this.decreaseIndexValue= this.decreaseIndexValue.bind(this);
    this.state = {
      "previousIndex":0,
      "nextIndex":1,
      "componentArray" : ["FirstQuesForm", "SecondQuesForm", "ThirdQuesForm", "FourthQuesForm", "FifthQuesForm"],
    }
  }
  increaseIndexValue(){
    const {nextIndex, previousIndex, componentArray} = this.state;
    if(nextIndex == 1){
        this.setState((prevState) => {
          return {nextIndex: prevState.nextIndex + 1, previousIndex:0}
        });
    }
    else if (nextIndex >1 && nextIndex < componentArray.length-1) {
      this.setState((prevState) => {
        return {nextIndex: prevState.nextIndex + 1, previousIndex:prevState.previousIndex+1}
      });
    }
    else if (nextIndex == componentArray.length -1) {
      this.setState((prevState) => {
        return {nextIndex: 4, previousIndex:3}
      });
    }
  }
  decreaseIndexValue(){
    const {nextIndex, previousIndex, componentArray} = this.state;
    if(previousIndex >=0){
        if(previousIndex == 0){
          this.setState((prevState) => {
            return {previousIndex: prevState.previousIndex, nextIndex:prevState.previousIndex+1}
          });
        }
        else {
          this.setState((prevState) => {
            return {previousIndex: prevState.previousIndex - 1, nextIndex:prevState.previousIndex+1}
          });
        }
    }
  }
  render() {
    const {nextIndex, previousIndex, componentArray} = this.state;
    console.log(previousIndex+ " " +nextIndex);
  //  let ComponentType='';
    // switch (componentIndex) {
    //   case "0": ComponentType = <FirstQuesForm />
    //     break;
    //   case "1": ComponentType = <SecondQuesForm />
    //     break;
    //   case "2": ComponentType = <ThirdQuesForm />
    //     break;
    //   case "3": ComponentType = <FourthQuesForm />
    //     break;
    //   case "4": ComponentType = <FifthQuesForm />
    //     break;
    //   default: ComponentType = <FirstQuesForm />
    // }
    //
    // if (componentIndex == 0) {
    //   ComponentType = <FirstQuesForm />
    // }
    // else if (componentIndex == 1) {
    //   ComponentType = <SecondQuesForm />
    // }
    // else if (componentIndex == 2) {
    //   ComponentType = <ThirdQuesForm />
    // }
    // else if (componentIndex == 3) {
    //   ComponentType = <FourthQuesForm />
    // }
    // else if (componentIndex == 4) {
    //   ComponentType = <FirstQuesForm />
    // }
    // else {
    //   ComponentType = <FirstQuesForm />
    // }
    return(
      <Router>
        <div className="App">
          <div className="row">
            <Route exact path="/" component={FirstQuesForm} />
            <Route path="/FirstQuesForm" component={FirstQuesForm} />
            <Route path="/SecondQuesForm" component={SecondQuesForm} />
            <Route path="/ThirdQuesForm" component={ThirdQuesForm} />
            <Route path="/FourthQuesForm" component={FourthQuesForm} />
            <Route path="/FifthQuesForm" component={FifthQuesForm} />
          </div>
          <div className="LinkPages">
            <div className="row" style={{float:'right'}}>
              <Link to={"/"+componentArray[previousIndex]}><a href="" className="previous" onClick={this.decreaseIndexValue}>&laquo; Previous</a></Link>
              <Link to={"/"+componentArray[nextIndex]}><a href="" className="next" onClick={this.increaseIndexValue}>Next &raquo;</a></Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.userReducer,
    math : state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) =>{
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
