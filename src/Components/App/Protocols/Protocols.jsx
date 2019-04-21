import React from 'react'
import style from './Protocols.module.css'
import Protocol from './Protocol/Protocol.jsx'

const Protocols = (props) => {
    console.log("props.protocols",props.protocols);
    
    return (
        <div className={style.BlackBoxes}>
            <h2>Protocols</h2>
            {(props.protocols || []).map(
                (protocol) => <Protocol {...protocol} key = {protocol.id}/>
            )}
        </div>
    )
}

export default Protocols
