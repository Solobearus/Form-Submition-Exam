import React from 'react'
import style from './BlackBoxes.module.css'
import DeviceGroup from './DeviceGroup/DeviceGroup.jsx'

const BlackBoxes = (props) => {


    return (
        <div className={style.BlackBoxes}>
            {(this.props.device_groups || []).map(
                (group) => <DeviceGroup {...group} />
            )}
        </div>
    )
}

export default BlackBoxes
