import React from 'react';

export default class DropDowns extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const options = this.props.items;

        return (
            <select onChange={this.props.updateDropDownItems} value={this.props.selected}>
                <option>{this.props.selected}</option>
                {
                    options.map( (dropdownItem) => {
                        return <option>{dropdownItem}</option>
                    })
                }
            </select>
        )
    }
}
