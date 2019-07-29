import React from 'react'
import ReactDOM from 'react-dom';
import Input from './components/input'
import TabList from './components/tabList'
const dataSource = [
  { label: '中国', value: 'china', hasChildren: true, parentValue: '', level: 1 }, 
  { label: '四川', value: 'sichuan', hasChildren: false, parentValue: 'china', level: 2 },
  { label: '河北', value: 'hebei', hasChildren: false, parentValue: 'china', level: 2 },
  { label: '河南', value: 'henan', hasChildren: false, parentValue: 'china', level: 2 },
  { label: '西藏', value: 'xizang', hasChildren: true, parentValue: 'china', level: 2 },
  { label: '西宁', value: 'xining', hasChildren: false, parentValue: 'xizang', level: 3 }
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      defaultValue: [],
      inputValue: '',
    }
  }
  onChange = (data) => {
    this.setState({
      defaultValue: data,
    },()=> {
      this.handleInput();
    })
  }
  openTab= () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  handleInput = ()=> {
    const { defaultValue } = this.state;
    let txt = [];
    defaultValue.forEach((i)=> {
      txt.push(i.label);
    })
    this.setState({
      inputValue: txt.toString().replace(/,/g,'/'),
    })
  }
  render () {
    return (<div>
        <Input inputValue={this.state.inputValue} handleClick={this.openTab} />
          {this.state.isOpen ? 
          <TabList dataSource={dataSource} 
          defaultValue={this.state.defaultValue}
          handleChange={this.onChange}
          handleInput={this.handleInput}
          result = {this.state.inputValue}
          />: ''}
        </div>) 
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
