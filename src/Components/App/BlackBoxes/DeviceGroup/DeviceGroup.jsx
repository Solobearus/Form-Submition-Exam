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

class DeviceGroup extends React.Component {

    state = {
        showList: false, // dropdown open/close
    }
    theme = createMuiTheme({
        palette: {
            type: "dark",
        },
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
                <FontAwesomeIcon className={style.FontAwesomeIcon} icon={icon} onClick={() => { this.setState({ showList: !this.state.showList }) }} />

                {/* group 1 */}
                <FormControlLabel
                    theme={this.theme}
                    control={

                        < CheckboxUI
                            checked={this.props.checkedCounter === this.props.devices.length}
                            onChange={() => { this.props.changeGroupCheckBox(this.props.id) }}
                            value={this.props.id}
                            color="primary"
                        />
                    }
                    label={this.props.name}
                />

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
