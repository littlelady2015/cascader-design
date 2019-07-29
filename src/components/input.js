
import React from 'react';
import './input.scss';
class Input extends React.Component {
  render () {
    return <input className="input" value={this.props.inputValue} onChange= {this.props.handleClick} onBlur={this.props.onBlur} placeholder="请选择"/> 
  }
}
export default Input;
