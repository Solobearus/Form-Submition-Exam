import React from 'react'
import style from './SummeryBlock.module.css'

const SummeryBlock = (props) => {
    return (
        <div className={ style.SummeryBlock }>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default SummeryBlock
