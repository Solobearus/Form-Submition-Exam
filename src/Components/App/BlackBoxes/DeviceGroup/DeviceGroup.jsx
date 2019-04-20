import React from 'react'
import style from './DeviceGroup.module.css'
import ButtonUI from '@material-ui/core/Button';
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class DeviceGroup extends React.Component {

    state = {
        showList: false, // dropdown open/close
        checked: false,  // group checbox checked?
    }

    componentDidMount() {
        this.setState({ checked: this.props.group.checkedCounter === this.props.group.length });
    }

    render() {
        let devicesList = null;

        if (this.state.showList) {
            devicesList = (this.props.devices || []).map(
                (device) => <Device {...device, groupId = this.props.devices.id} />
            )
        }

        return (
            <div className={style.DeviceGroup}>
                <ButtonUI onClick={this.setState({ showList: !this.state.showList })}></ButtonUI>

                {/* group 1 */}
                <FormControlLabel
                    control={
                        <CheckboxUI
                            checked={this.state.checked}
                            onChange={this.props.changeGroupCheckBox(this.props.group.id)}
                            value={this.props.id}
                            color="primary"
                        />
                    }
                    label={this.props.name}
                />

                {devicesList}
            </div>
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
