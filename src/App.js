import React from 'react';
import './App.css';
import AddItem from './components/Additem';
import ListItems from './components/ListItems';

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0, name: 'ABC'
        }, 
        {
          id: 1, name: 'BEF'
        }
      ]
    }
  }

  addItem = (item) => {
   this.setState(state => ({
    data: [...state.data, {id: this.state.data.length, name: item}]
   }));
  };

  render () {
    return (<div>
      <AddItem addItem={this.addItem}/>
      {this.state.data.map((item, index) => {
        return <ListItems key={index} item={item}/>
      })}
    </div>)
  }
};

export default TodoApp;
