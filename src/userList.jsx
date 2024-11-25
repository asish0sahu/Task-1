// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import './App.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: "",
    };
  }

  handleChange=(event)=>{
    this.setState({currentItem:event.target.value})
  }


  //Add items
  addItem=()=>{
    const {items,currentItem} = this.state;
    if(currentItem){
      items.push(currentItem);
      this.setState({items, currentItem:""})
    }
  }

  //Delete items
  deleteItem=(index)=>{
    const {items} =this.state;

    const updateItems=[...items]
    updateItems.splice(index,1)
    this.setState({items:updateItems})

  }

  render() {
    const { items, currentItem } = this.state;
    return (
      <div className="container">
        <h1 className="title">Item List Rendering</h1>
        <div className="form">
          <input type="text" className="input" value={currentItem} placeholder="Enter your items here" onChange={this.handleChange} />
          <button onClick={this.addItem} className="add-item">Add</button>
        </div>
        <ul className="list">
          {items.map((item,index)=>(
            <li key={index} className="list-item">{item}
            <button onClick={() =>this.deleteItem(index)} className="delete-item">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
