import React, { Component } from 'react';

class SecondQuesForm extends Component {
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
      <div className="SecondQuesForm">
      <div className="container">
        <h3>Question 2</h3>
        <div className="row">
          <div className="col-lg-8">Which is used in pencils?</div>
          <div className="col-lg-4"><input type="text" /></div>
        </div>
      </div>
      </div>
    );
  }
}

export default SecondQuesForm;
