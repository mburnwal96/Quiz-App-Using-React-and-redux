import React, { Component } from 'react';

class ThirdQuesForm extends Component {
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
      <div className="ThirdQuesForm">
      <div className="container">
        <h3>Question 3</h3>
        <div className="row">
          <div className="col-lg-8">Which metal forms an amalgam with other metals?</div>
          <div className="col-lg-4"><input type="text" /></div>
        </div>
      </div>
      </div>
    );
  }
}

export default ThirdQuesForm;
