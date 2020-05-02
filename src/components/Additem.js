import React from 'react';
import '../App.css';

class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            item: ''
        }
    }
    onChangeValue = (e) => {
        this.setState({
            item: e.target.value
        })
    };
    render() {
        return (<div>
            <input type="text" onChange={this.onChangeValue} value={this.state.item} placeholder="Add new Item" />
            <button onClick={() => this.props.addItem(this.state.item)} className="add-button">+</button>
        </div>)
    }
}

export default AddItem;