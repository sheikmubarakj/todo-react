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
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.item) return;
        this.props.addItem(this.state.item); 
        this.state.item = '';
    };

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" className='input' onChange={this.onChangeValue} value={this.state.item} placeholder="Add new Item" />
            <button className='button' onClick={() => {this.props.addItem(this.state.item); this.state.item = ''}}>+</button>
        </form>)
    }
}

export default AddItem;