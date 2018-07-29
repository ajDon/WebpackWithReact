import * as React from 'react';
import PropTypes from 'prop-types';

class FormGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.ControlId}>
                    {this.props.Label}
                </label>
                <input
                    type={this.props.ControlType}
                    value={this.props.ControlDefaultValue}
                    id={this.props.ControlId}
                    onChange={this.props.onChangeEvent}
                    name={this.props.ControlId}
                    className={`form-control ${this.props.ControlAdditionalClass ? this.props.ControlAdditionalClass : ""}`}
                    style={this.props.ControlStyle}
                    readOnly={this.props.readOnly}
                    placeholder={this.props.ControlPlaceholder}
                />
                {this.checkHelpText()}
            </div>
        );
    }

    checkHelpText() {
        if (this.props.HelpText) {
            return (
                <small id={`${this.props.ControlId}Help`} className="form-text text-muted">{this.props.HelpText}</small>
            );
        }
        "";
    }
}

FormGroup.propTypes = {
    ControlId: PropTypes.string.isRequired,
    Label: PropTypes.string.isRequired,
    ControlType: PropTypes.string.isRequired,
    ControlDefaultValue: PropTypes.string.isRequired,
    onChangeEvent: PropTypes.func.isRequired,
    ControlAdditionalClass: PropTypes.string,
    ControlStyle: PropTypes.string,
    readOnly: PropTypes.bool.isRequired,
    ControlPlaceholder: PropTypes.string,
    HelpText: PropTypes.string,
};

export default FormGroup;
