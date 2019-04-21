import React from 'react'
import style from './Times.module.css'
import CheckboxUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { connect } from 'react-redux'
import { changeTimesCheckBox } from '../../../Redux/actions'

class Times extends React.Component {

    handleChange = event => {
        this.props.changeTimesCheckBox(event.target.value);
    };

    render() {
        console.log("this.props.timesActive",this.props.timesActive);
        
        return (
            <div className={style.Times}>
                <h2>Times</h2>
                <FormControl>
                    <RadioGroup
                        aria-label="Times"
                        name="times"
                        value={this.props.timesActive}
                        onChange={this.handleChange}
                    >

                        {(this.props.times || []).map(
                            (time) => <FormControlLabel
                                key={time.id}
                                value={time.name}
                                control={<Radio color="primary" />}
                                label={time.name}
                            />
                        )}

                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    timesActive: state.firstReducer.timesActive,
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeTimesCheckBox: (payload) => dispatch(
            changeTimesCheckBox(payload)
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Times)


