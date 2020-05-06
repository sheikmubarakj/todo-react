import React from 'react';

class ListItems extends React.Component {
    render() {
        return (<div className="list-item">
            <div className={this.props.item.isStriked ? 'strikeout ': ''} onClick={() => this.props.selectItem(this.props.item)}>{this.props.item.name}</div>
            <button className="delete is-pulled-right close-btn" onClick={() => this.props.removeItem(this.props.item)}></button>
        </div>)
    }
}

export default ListItems;