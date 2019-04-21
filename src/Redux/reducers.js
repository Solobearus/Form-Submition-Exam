
import * as actions from './actions'
import ex_data from './ex_data'
import update from 'immutability-helper';

const initialState = {
    device_groups: null,
    protocols: null,
    times: null,
};

function firstReducer(state = initialState, action) {

    let newChange = null;
    let checked = null;
    let indexOfdevice_group = null;
    let newState = null;
    // console.log('initialState: ', initialState);

    switch (action.type) {
        case actions.GET_INITIALIZESTATE: // will be called after UI mounted
            newState = { ...ex_data };

            // In order to know if we should check the device group's checkbox
            // For every device group
            for (let i = 0; i < newState.device_groups.length; i++) {
                // We add a counter for the device_group
                newState.device_groups[i].checkedCounter = 0;
                // For every device
                for (let j = 0; j < newState.device_groups[i].devices.length; j++) {
                    // If device is active
                    if (newState.device_groups[i].devices[j].active === 1) {
                        // We count the checked devices for that device group
                        newState.device_groups[i].checkedCounter++;
                        console.log("checkedCounter" ,newState.device_groups[i].checkedCounter);
                    }
                }
            }
            
            // newState = update( state, {$set: newState} );

            return { ...state, ...newState };

        case actions.CHANGE_GROUP_CHECKBOX:
            // change is made to device_groups
            newChange = [...state.device_groups];

            // In order to get the correct id we need to indexOf the ids inside the device_groups object

            indexOfdevice_group = newChange.map(device_group => device_group.id).indexOf(action.payload);
            // if checkedCounter of the group was equal to groups length than the group's checkbox was checked 

            checked = newChange[indexOfdevice_group].checkedCounter === newChange[indexOfdevice_group].devices.length;
            // if it was checked : reset the counter to uncheck it , otherwise equal it to length to check it

            newChange[indexOfdevice_group].checkedCounter = checked ? 0 : newChange[indexOfdevice_group].devices.length;
            // than go through every device and if group's checkbox was checked now uncheck all device's, 
            // otherwise if it was'nt checked , now check all devices.

            const active = checked ? 0 : 1;
            newChange[indexOfdevice_group].devices.forEach(device => {
                device.active = active;
            });

            return { ...state, device_groups : [...newChange]};

        case actions.CHANGE_DEVICE_CHECKBOX:
            // change is made to device_groups
            newChange = [...state.device_groups];
            // indexOfdevice_group is the index that represents the id of groupId
            indexOfdevice_group = newChange.map(device_group => device_group.id).indexOf(action.payload.groupId);

            let devicesPerGroup = newChange[indexOfdevice_group].devices;
            
            // indexOfId is the index that represents the id that we look for
            let indexOfId = devicesPerGroup.map(device => device.id).indexOf(action.payload.id);
            console.log("indexOfId", indexOfId);
            
            checked = devicesPerGroup[indexOfId].active == 1;
            console.log("checked", checked);

            if (checked) {
                newChange[indexOfdevice_group].checkedCounter--;
            } else {
                newChange[indexOfdevice_group].checkedCounter++;
            }
        
            // toggle device checkbox and update checkedCounter of group to handle groups checkbox.
            newChange[indexOfdevice_group].devices[indexOfId].active = !devicesPerGroup[indexOfId].active;

            return { ...state , device_groups : [...newChange] };


        case actions.GET_DEVICE_GROUPS:
            newChange = state.change;
            console.log(`Reducer: some change was made to state.change`);
            return { ...state, change: newChange };

        case actions.GET_DEVICES:
            newChange = state.change;
            console.log(`Reducer: some change was made to state.change`);
            return { ...state, change: newChange };

        case actions.GET_PROTOCOLS:
            newChange = state.change;
            console.log(`Reducer: some change was made to state.change`);
            return { ...state, change: newChange };

        case actions.GET_TIMES:
            newChange = state.change;
            console.log(`Reducer: some change was made to state.change`);
            return { ...state, change: newChange };

        default:
            return state
    }
}

export default firstReducer