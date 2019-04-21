import React from 'react'
import style from './BlackBoxes.module.css'
import DeviceGroup from './DeviceGroup/DeviceGroup.jsx'
import FormLabel from "@material-ui/core/FormLabel";

const BlackBoxes = (props) => {
    return (
        <div className={style.BlackBoxes}>
            <h2>Black Boxes</h2>
            <div className={style.DeviceGroups}>
                {(props.device_groups || []).map(
                    (group) => <DeviceGroup {...group} key={group.id} />
                )}
            </div>
        </div>
    )
}

export default BlackBoxes
