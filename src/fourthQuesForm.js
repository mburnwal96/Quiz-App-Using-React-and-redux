import React, { Component } from 'react';

class FourthQuesForm extends Component {
  constructor(props){
     super();
    // this.onTextChange=this.onTextChange.bind(this);
    // this.state={
    //   "from":'',
    // };
  }
  render() {
  //  const {from}=this.state;
    return (
      <div className="FirstQuesForm">
      <div className="container">
        <h3>Question 4</h3>
        <div className="row">
          <div className="col-lg-8">The gas usually filled in the electric bulb is ?</div>
          <div className="col-lg-4"><input type="text" /></div>
        </div>
      </div>
      </div>
    );
  }
}

export default FourthQuesForm;
