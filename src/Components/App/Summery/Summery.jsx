import React from 'react'
import style from './Summery.module.css'
import { connect } from 'react-redux'
import SummeryBlock from './SummeryBlock/SummeryBlock.jsx'
import Button from '@material-ui/core/Button';
import { resetState, submitForm } from '../../../Redux/actions'
class Summery extends React.Component {

    submit = () => {
        let device_groups = this.props.device_groups;
        let protocols = this.props.protocols;
        let times = this.props.times;
        let timesActive = this.props.timesActive;

        let url = window.location.hostname;
        let activeDevices = [];

        device_groups.map((group) => {
            group.devices.map((device) => {
                if (device.active) {
                    activeDevices.push(device.id);
                }
            })
        })

        if (activeDevices.length > 0) {
            url += url.indexOf("?") === -1 ? "?" : "&";
            url += "devices=";
            activeDevices.map((device) => {
                url += device + ",";
            })
            url = url.slice(0, -1);
        }

        let activeProtocols = [];

        protocols.map((protocol) => {
            if (protocol.active) {
                activeProtocols.push(protocol.id);
            }
        })
        if (activeProtocols.length > 0) {
            url += url.indexOf("?") === -1 ? "?" : "&";
            url += "protocols=";
            activeProtocols.map((protocol) => {
                url += protocol + ",";
            })
            url = url.slice(0, -1);
        }

        url += url.indexOf("?") === -1 ? "?" : "&";
        let indexOftimes = times.map((device) => device.name).indexOf(timesActive);
        url += "times=" + times[indexOftimes].id;
        window.location.href = url;
    }

    reset = () => {
        this.props.resetState();
    }

    render() {
        return (
            <div className={style.Summery}>
                <h2>Summary</h2>
                <SummeryBlock title='1'>{(this.props.device_groups || []).map((group) => {
                    return <div key={group.id}>
                        {(group.devices || []).map((device) => device.active ? <p key={device.id}>{device.name}</p> : null)}
                        <br />
                    </div>
                })}</SummeryBlock>
                <SummeryBlock title='2'>
                    {(this.props.protocols || []).map((protocol) => protocol.active ? <p>{protocol.name}</p> : null)}
                </SummeryBlock>
                <SummeryBlock title='3'>{this.props.timesActive}</SummeryBlock>
                <Button color="primary" onClick={() => { this.props.resetState(); }}>Clear</Button>
                <Button variant="contained" color="primary" onClick={() => { this.submit(); }}>Start Learning</Button>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        device_groups: state.firstReducer.device_groups,
        protocols: state.firstReducer.protocols,
        times: state.firstReducer.times,
        timesActive: state.firstReducer.timesActive
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetState: () => dispatch(resetState()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summery)