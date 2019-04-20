import React from 'react'
import style from './Device.module.css'
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Device extends React.Component {
    render() {
        return (
            <div className={style.Device}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.props.active}
                            onChange={this.props.changeDeviceCheckBox({groupId : groupId, id : this.props.id})}
                            value={this.props.id}
                            color="primary"
                        />
                    }
                    label={this.props.name}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeDeviceCheckBox: (payload) => dispatch(changeDeviceCheckBox(payload)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Device)