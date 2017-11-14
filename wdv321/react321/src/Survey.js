import React from 'react';
import DropDowns from './DropDowns';

export default class Survey extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownItems: ["1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown1: "--Select an option--",
            dropdown2: "--Select an option--",
            dropdown3: "--Select an option--",
            dropdown4: "--Select an option--"
        };
        this.updateDropdown = this.updateDropdown.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    updateDropdown(index, event) {
        const selectedItem = event.target.value;
        const indexOfSelection = this.state.dropdownItems.indexOf(selectedItem);
        this.setState({
            dropdownItems: [
                ...this.state.dropdownItems.slice(0, indexOfSelection),
                ...this.state.dropdownItems.slice(indexOfSelection + 1)
            ],
            [`dropdown${index}`]: selectedItem
        }, function () {
            console.log(this.state[`dropdown${index}`]);
        })
    }

    resetForm() {
        this.setState({
            dropdownItems: ["1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],
            dropdown1: "--Select an option--",
            dropdown2: "--Select an option--",
            dropdown3: "--Select an option--",
            dropdown4: "--Select an option--"
        }, function() {
            console.log(this.state.dropdownItems);
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
                            <DropDowns items={this.state.dropdownItems}
                                       selected={this.state.dropdown1}
                                       updateDropDownItems={this.updateDropdown.bind(this, 1)}/>
                            Monday/Wednesday 10:10am-Noon
                        </p>
                        <p>
                            <DropDowns items={this.state.dropdownItems}
                                       selected={this.state.dropdown2}
                                       updateDropDownItems={this.updateDropdown.bind(this, 2)}/>
                            Tuesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <DropDowns items={this.state.dropdownItems}
                                       selected={this.state.dropdown3}
                                       updateDropDownItems={this.updateDropdown.bind(this, 3)}/>
                            Wednesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <DropDowns items={this.state.dropdownItems}
                                       selected={this.state.dropdown4}
                                       updateDropDownItems={this.updateDropdown.bind(this, 4)}/>
                            Tuesday/Thursday 10:10am-Noon
                        </p>
                        <p>
                            <input type="submit" name="button" id="button" value="Submit"/>
                            <input type="reset" name="button2" id="button2" value="Reset" onClick={this.resetForm}/>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}