import React from 'react'
import style from './Protocol.module.css'
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux'
import { changeProtocolCheckBox } from '../../../../Redux/actions'

class Protocol extends React.Component {
    render() {
        return (
            <div className={style.Protocol}>
                <FormControlLabel
                    control={
                        <CheckboxUI
                            checked={this.props.active == 1 ? true : false}
                            onChange={() => { this.props.changeProtocolCheckBox(this.props.id) }}
                            color="primary"
                        />
                    }
                    label={this.props.name}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        changeProtocolCheckBox: (payload) => dispatch(
            changeProtocolCheckBox(payload)
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Protocol)
