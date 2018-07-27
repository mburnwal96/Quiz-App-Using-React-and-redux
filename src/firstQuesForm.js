import React, { Component } from 'react';

class FirstQuesForm extends Component {
  constructor(props){
     super();
     this.handleChange = this.handleChange.bind(this);
     this.state ={
  //     "name":""
     }
  }
  handleChange(event) {
  //  this.setState({ name: event.currentTarget.value });
  }
  render() {
  //  const {from}=this.state;
    return (
      <div className="FirstQuesForm">
      <div className="container">
        <h3>Question 1</h3>
        <div className="row">
          <div className ="col-lg-12">
            <div className="col-lg-6">Which gas is not known as green house gas ?</div>
            <div className="col-lg-6"><input type="text" onChange={ this.handleChange } /></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default FirstQuesForm;
