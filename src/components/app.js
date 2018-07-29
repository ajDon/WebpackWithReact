import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
// import DatePicker from "react-date-picker";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';
import { isDate } from 'util';
// import FormGroup from "./formGroup";

initializeIcons();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: 'AJ', Date: new Date(), showModal: false, errorMessage: '',
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleDate = this._handleDate.bind(this);
        this._submitForm = this._submitForm.bind(this);
        this._reset = this._reset.bind(this);
        this._validateForm = this._validateForm.bind(this);
    }

    render() {
        return (
            <div className="container">
                <h1>
                    {this.props.formName}
                </h1>
                {/* <form>
                    <FormGroup ControlId="txtName" Label="Name" ControlType="Text" ControlDefaultValue={this.state.Name} HelpText="Enter Name" onChangeEvent={this.handleChange}
                        readOnly="false" ControlPlaceholder="Enter Name" />
                    <div className="form-group">
                        <label htmlFor="datePickerDate">Enter Date</label>
                        <DatePicker value={this.state.Date} onChange={this.handleDate} name="datePickerDate" className="form-control" showNavigation={true}/>
                    </div>
                </form> */}
                <form onSubmit={this._submitForm}>
                    <Fabric id="Test" >
                        <TextField label="Enter Name" placeholder="Name" value={this.state.Name} onChanged={this._handleChange} underlined required errorMessage="This Field is required" />
                        <DatePicker borderless label="Select Date" placeholder="Select a Date..." value={this.state.Date} onSelectDate={this._handleDate} showMonthPickerAsOverlay />
                        <div className="row">
                            <PrimaryButton primary text="Save" onClick={this._submitForm} />
                            <DefaultButton text="reset" onClick={this._reset} />
                        </div>
                        <Modal isOpen={this.state.showModal} isBlocking />
                    </Fabric>
                </form>
            </div>
        );
    }

    _handleChange(newValue) {
        // this.setState({ Name: event.target.value });
        this.setState({ Name: newValue });
    }

    _handleDate(date) {
        this.setState({ Date: date });
    }

    _reset(event) {
        event;
        this.setState({ Name: 'AJ', Date: new Date() });
    }

    _submitForm(event) {
        event.preventDefault();
        if (this._validateForm()) {
            const name = this.state.Name;
            const date = this.state.Date;
            alert(` Name: ${name}\n Date: ${date.toLocaleString()}`);
        } else {
            this.setState({ showModal: true, errorMessage: 'Validation Failed!!!' });
        }
    }

    _validateForm() {
        let isValid = true;
        this.setState({ showModal: false, errorMessage: '' });
        if (this.state.Name === undefined || this.state.Name === '') {
            isValid = false;
        } else if (this.state.Name.trim() === '') {
            isValid = false;
        }
        if (!isDate(this.state.Date)) {
            isValid = false;
        }

        return isValid;
    }
}
App.propTypes = {
    formName: PropTypes.string.isRequired,
};

export default App;
