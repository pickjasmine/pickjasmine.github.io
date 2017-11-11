import React from 'react';

export default class Survey extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownItems: ["--Select an option--", "1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown1: ["--Select an option--", "1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown2: ["--Select an option--", "1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown3: ["--Select an option--", "1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown4: ["--Select an option--", "1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"]
        };
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.deleteDropdownItem = this.deleteDropdownItem.bind(this);
    }

    handleChangeEvent(event) {
        let index = this.state.dropdownItems.indexOf(event);

        this.setState({
            dropdownItems: [
                ...this.state.dropdownItems.slice(0, index),
                ...this.state.dropdownItems.slice(index + 1)
            ],
            selected: event.target.value
        }, function () {
            //function to update single dropdown menu
            console.log(this.state.dropdownItems);
        });
    }

    deleteDropdownItem(item) {                  //delete item from this.state.dropdownItems, call back to updateDropDowns
        let index = this.state.dropdownItems.indexOf(item);
        this.state = ({
            dropdownItems: [
                ...this.state.dropdownItems.slice(0, index),
                ...this.state.dropdownItems.slice(index + 1)
            ]
        }, function() {
            console.log(this.state.dropdownItems)
        });
    }
    //
    //update other drop downs to reflect update this.state.dropdownItems, callback to console.log
    updateDropDowns(dropdownId) {

    }

    //or create functions to update each method and pass as props to each dropdown; will have to change arrays to include option tags so I can declare selected on one
    updateDropDown1(selectedItem) {
        this.state = ({
        dropdown1: [
            ...this.state.dropdownItems,
            selectedItem
        ]
    })
    }


    render() {
        return (
            <div>
                <p>WDV341 Intro PHP</p>
                <p>Survey Form</p>
                <form name="form1" method="post" action="">
                    <fieldset>
                        <p>
                            <label>Email:
                                <input type="text" name="cust_email" id="cust_email"/>
                            </label>
                        </p>
                        <p>Please rate the following times from best (1) to worst (4)</p>
                        <p>
                            <select onChange={this.deleteDropdownItem}>
                                <DropDowns items={this.state.dropdown1} deleteDropdownItem={this.deleteDropdownItem} updateDropDownItems={this.updateDropdown1}/>
                            </select>
                            Monday/Wednesday 10:10am-Noon
                        </p>
                        <p>
                            <select onChange={this.deleteDropdownItem}>
                                <DropDowns items={this.state.dropdown2} deleteDropdownItem={this.deleteDropdownItem} updateDropDownItems={this.updateDropdown2}/>
                            </select>
                            Tuesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <select onChange={this.deleteDropdownItem}>
                                <DropDowns items={this.state.dropdown3} deleteDropdownItem={this.deleteDropdownItem} updateDropDownItems={this.updateDropdown4}/>
                            </select>
                            Wednesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <select onChange={this.deleteDropdownItem}>
                                <DropDowns items={this.state.dropdown4} deleteDropdownItem={this.deleteDropdownItem} updateDropDownItems={this.updateDropdown5}/>
                            </select>
                            Tuesday/Thursday 10:10am-Noon
                        </p>
                        <p>
                            <input type="submit" name="button" id="button" value="Submit"/>
                            <input type="reset" name="button2" id="button2" value="Reset"/>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}