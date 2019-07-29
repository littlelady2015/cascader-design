import React from 'react'
import Svg from './svg'
import './tabList.scss';
class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
      limitLevel: 3,
    }
  }
  handleExpand =(item)=>{
    let { defaultValue } = this.props;
      if(item.level === 1){
        defaultValue=[];
        defaultValue.push(item);
      }
      if (item.level === 2){
        defaultValue = [defaultValue[0]];
        defaultValue.push(item);
      }
      if(item.level === 3){
        defaultValue = [defaultValue[0],defaultValue[1]];
        defaultValue.push(item);
      }
      this.props.handleChange(defaultValue);
  }

  renderList = () =>{
    let { defaultValue, dataSource } = this.props;

    return defaultValue.map((current,index) =>{
      if (index < this.state.limitLevel && current.hasChildren) 
        return <ul className="tab" key={defaultValue[index].value}>
          {
            dataSource.map((next)=> {
            if(next.parentValue === current.value) 
            {
              return (
                <li key={next.value}
                  onClick={() => { this.handleExpand(next) }}
                ><span className="tab-item">{next.label}</span><Svg hasChildren={next.hasChildren} /></li>
              )}
          })
          }
          </ul>
      }
    );
  }
  render() {
    let { dataSource } = this.props;
    return (<>
    <ul className="tab">
      {dataSource.map((item) =>{
        if(!item.parentValue)
          return <li key={item.value} 
                  onClick={()=>{this.handleExpand(item)}}
          ><span className="tab-item">{item.label}</span><Svg hasChildren={item.hasChildren}/></li>
      })}
        </ul>
        {this.renderList()}</>)
  }
}
export default TabList;
