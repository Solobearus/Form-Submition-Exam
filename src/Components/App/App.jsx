import React from 'react'
import { connect } from 'react-redux'
import style from './App.module.css'
import BlackBoxes from './BlackBoxes/BlackBoxes.jsx'
import Protocols from './Protocols/Protocols.jsx'
import Times from './Times/Times.jsx'
import Summery from './Summery/Summery.jsx'

class App extends React.Component {

    componentDidMount() {
        this.props.InitializeState();
    }

    handleSubmit = (event) => {

    }

    render() {
        return (
            <div className={style.App}>
                <form onSubmit={this.handleSubmit}>
                    <BlackBoxes device_groups={this.props.device_groups}></BlackBoxes>
                    {/* <Protocols protocos={this.props.protocols}></Protocols> */}
                    {/* <Times times={this.props.times}></Times> */}
                    {/* <Summery></Summery> */}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    device_groups: state.device_groups,
    protocols: state.protocols,
    times: state.times    
});

const mapDispatchToProps = (dispatch) => {
    return {
        InitializeState: () => dispatch(InitializeState()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)