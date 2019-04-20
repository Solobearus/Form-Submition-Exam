
import * as actions from './actions'
import ex_data from './ex_data'

const initialState = {
    device_groups: null,
    protocols: null,
    times: null,
};

function firstReducer(state = initialState, action) {

    let newChange = null;
    let checked = null;
    // console.log('initialState: ', initialState);

    switch (action.type) {
        case actions.GET_INITIALIZESTATE: // will be called after UI mounted
            const newState = { ...ex_data };

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
                    }
                }
            }
            return { ...state, ...newState };

        case actions.CHANGE_GROUP_CHECKBOX:
            // change is made to device_groups
            newChange = state.device_groups;
            // if checkedCounter of the group was equal to groups length than the group's checkbox was checked 
            checked = newChange[action.id].checkedCounter === newChange[action.id].legnth;
            // if it was checked : reset the counter to uncheck it , otherwise equal it to length to check it
            newChange[action.id].checkedCounter = checked ? 0 : newChange[action.id].length;
            // than go through every device and if group's checkbox was checked now uncheck all device's, 
            // otherwise if it was'nt checked , now check all devices.
            const active = checked ? 0 : 1;
            newChange[action.id].forEach(device => {
                device.active = active;
            });

            return { ...state, device_groups: newChange };

        case actions.CHANGE_DEVICE_CHECKBOX:
            // change is made to device_groups
            newChange = state.device_groups;

            // toggle device checkbox and update checkedCounter of group to handle groups checkbox.
            checked = newChange[action.payload.groupId].devices[action.payload.id].active === 1;
            if (checked) {
                newChange[action.payload.groupId].checkedCounter--;
            } else {
                newChange[action.payload.groupId].checkedCounter++;
            }
            newChange[action.payload.groupId].devices[action.payload.id].active = !newChange[action.payload.groupId].devices[action.payload.id].active;
            return { ...state, device_groups: newChange };


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