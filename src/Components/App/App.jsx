import React from 'react'
import { connect } from 'react-redux'
import style from './App.module.css'
import BlackBoxes from './BlackBoxes/BlackBoxes.jsx'
import Protocols from './Protocols/Protocols.jsx'
import Times from './Times/Times.jsx'
import Summery from './Summery/Summery.jsx'
import { InitializeState } from '../../Redux/actions'

class App extends React.Component {

    componentDidMount() {
        this.props.InitializeState();
    }

    handleSubmit = (event) => {

    }

    render() {
        // console.log('[App] > render');
        console.log("this.props.protocols",this.props.protocols);

        return (
            <div className={style.App}>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <BlackBoxes device_groups={this.props.device_groups} />
                    <Protocols protocols={this.props.protocols}></Protocols>
                    <Times times={this.props.times}></Times>
                    <Summery></Summery>
                {/* </form> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        device_groups: state.firstReducer.device_groups,
        protocols: state.firstReducer.protocols,
        times: state.firstReducer.times
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        InitializeState: () => dispatch(InitializeState()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)