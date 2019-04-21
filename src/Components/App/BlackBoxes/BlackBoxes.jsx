import React from 'react'
import style from './BlackBoxes.module.css'
import DeviceGroup from './DeviceGroup/DeviceGroup.jsx'

const BlackBoxes = (props) => {
    // console.log('[BlackBoxes] render');
    console.log('props', props.device_groups);

    return (
        <div className={style.BlackBoxes}>
            {(props.device_groups || []).map(
                (group) => <DeviceGroup {...group} key = {group.id}/>
            )}
        </div>
    )
}

export default BlackBoxes
