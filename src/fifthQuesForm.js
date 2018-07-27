import React, { Component } from 'react';

class FifthQuesForm extends Component {
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
        <h3>Question 5</h3>
        <div className="row">
          <div className="col-lg-8">Which of the following is a non metal that remains liquid at room temperature?</div>
          <div className="col-lg-4"><input type="text" /></div>
        </div>
      </div>
      </div>
    );
  }
}

export default FifthQuesForm;
