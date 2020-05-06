import React from 'react';
import './App.css';
import AddItem from './components/Additem';
import ListItems from './components/ListItems';

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    const todoCounter = 0;
    this.state = {
      todoCounter: todoCounter,
      data: []
    }
  }

  addItem = (item) => {
    
  const nextId = this.state.todoCounter + 1;
   this.setState(state => ({
    data: [...state.data, {id: nextId, name: item}],
    todoCounter: nextId
   }));
  };

  selectItem = (_item) => {
    this.state.data.find((item) => {
      if (item.id === _item.id) {
        item.isStriked = !_item.isStriked;
        return true;
      } else {
        return false
      }
    });
    this.setState(state => ({
      data: [...state.data]
    }));
  };

  removeItem = (_item) => {
    let itemIndex = this.state.data.findIndex((item) => item.id === _item.id);
    this.state.data.splice(itemIndex, 1);
    this.setState(state => ({
      data: [...state.data]
    }));
  };

  render () {
    return (<div className='wrapper'>
      <div className='card frame'>
        <AddItem addItem={this.addItem}/>
        <div className="list-wrapper">
          {this.state.data.map((item, index) => {
            return <ListItems key={index} item={item} selectItem={this.selectItem} removeItem={this.removeItem}/>
          })}
        </div>
      </div>
    </div>)
  }
};

export default TodoApp;
