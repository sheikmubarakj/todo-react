import React from 'react';

class ListItems extends React.Component {
    render() {
        return (<div>
            <li>{this.props.item.name}</li>
        </div>)
    }
}

export default ListItems;