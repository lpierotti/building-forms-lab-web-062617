import React, { Component } from 'react';

class Bands extends Component {
  
  constructor(props) {
  	super(props)
  }

  render(){
    var bandList;
    if (this.props.store.getState().bands) {
    	bandList = this.props.store.getState().bands.map((band,index) => <li key={index}>{band}</li>)
    }
    return (
      <div>
        <ul>
        	{bandList}
        </ul>
      </div>
    );
  }
};

export default Bands;
