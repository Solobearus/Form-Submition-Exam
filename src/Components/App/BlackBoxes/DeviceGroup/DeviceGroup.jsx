import React from 'react'
import style from './DeviceGroup.module.css'
import ButtonUI from '@material-ui/core/Button';
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Device from './Device/Device.jsx'
import { connect } from 'react-redux'
import { changeGroupCheckBox } from '../../../../Redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const StyledCheckboxUI = withStyles({
    root: { color: 'white', },
    checked: { color: 'white', },   
    unchecked: { color: 'white', }
})(CheckboxUI);

class DeviceGroup extends React.Component {

    state = {
        showList: false, // dropdown open/close
    }
    theme = createMuiTheme({
        overrides: {
            // Name of the component ⚛️ / style sheet
            MuiIconButton: {
                // Some CSS
                backgroundColor: 'white',
                color: 'white',
            },
        },
        typography: { useNextVariants: true },
    });

    render() {
        let devicesList = null;
        let icon = "angle-down";
        if (this.state.showList) {
            icon = "angle-up";
            devicesList = (this.props.devices || []).map(
                (device) => <Device {...device} groupId={this.props.id} key={device.id} />
            )
        }

        return (
            <div className={style.DeviceGroup} >
                <div className={style.DeviceGroupDiv}>
                    <FontAwesomeIcon className={style.FontAwesomeIcon} icon={icon} onClick={() => { this.setState({ showList: !this.state.showList }) }} />
                    {/* group 1 */}
                    <FormControlLabel
                        theme={this.theme}
                        control={

                            < StyledCheckboxUI
                                checked={this.props.checkedCounter === this.props.devices.length}
                                onChange={() => { this.props.changeGroupCheckBox(this.props.id) }}
                                value={this.props.id}
                                color="primary"
                            />
                        }
                    />
                    {this.props.name}
                </div>
                {devicesList}
            </div >
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        changeGroupCheckBox: (id) => dispatch(changeGroupCheckBox(id)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceGroup)
