import React from 'react';

export default class DropDowns extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent(event) {
        let selected = event.target.value;
        this.props.deleteDropdownItem(selected, this.props.id);
    }


    render() {

        const options = this.props.items;

        return (
            <select onChange={this.handleChangeEvent}>
                {options.map((dropdownItem) => {
                    return <option>{dropdownItem}</option>
                    }
                )}
            </select>
        )
    }
}
