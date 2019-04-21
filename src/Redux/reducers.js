
import * as actions from './actions'
import ex_data from './ex_data'
import update from 'immutability-helper';

const initialState = {
    device_groups: null,
    protocols: null,
    times: null,
    timesActive: "Last 30 minutes",
};

function firstReducer(state = initialState, action) {

    let newChange = null;
    let checked = null;
    let indexOfdevice_group = null;
    let newState = null;

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
                        // console.log("checkedCounter", newState.device_groups[i].checkedCounter);
                    }
                }
            }

            for (let i = 0; i < newState.protocols.length; i++) {
                newState.protocols[i].active = false;
            }

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

            return { ...state, device_groups: [...newChange] };

        case actions.CHANGE_DEVICE_CHECKBOX:
            // change is made to device_groups
            newChange = [...state.device_groups];
            // indexOfdevice_group is the index that represents the id of groupId
            indexOfdevice_group = newChange.map(device_group => device_group.id).indexOf(action.payload.groupId);

            let devicesPerGroup = newChange[indexOfdevice_group].devices;

            // indexOfId is the index that represents the id that we look for
            let indexOfId = devicesPerGroup.map(device => device.id).indexOf(action.payload.id);

            checked = devicesPerGroup[indexOfId].active == 1;
            if (checked) {
                newChange[indexOfdevice_group].checkedCounter--;
            } else {
                newChange[indexOfdevice_group].checkedCounter++;
            }

            // toggle device checkbox and update checkedCounter of group to handle groups checkbox.
            newChange[indexOfdevice_group].devices[indexOfId].active = !devicesPerGroup[indexOfId].active;

            return { ...state, device_groups: [...newChange] };

        case actions.CHANGE_PROTOCOL_CHECKBOX:
            // change is made to protocols
            newChange = [...state.protocols];

            let indexOfprotocol = newChange.map(protocol => protocol.id).indexOf(action.payload);

            newChange[indexOfprotocol].active = !newChange[indexOfprotocol].active;

            return { ...state, protocols: [...newChange] };

        case actions.CHANGE_TIMES_CHECKBOX:
            // change is made to times
            newChange = action.payload;

            console.log("actions.payload", action.payload);
            return { ...state, timesActive: newChange };

        case actions.RESET_STATE:
            let newStateDevice_groups = [...state.device_groups];
            let newStateProtocols = [...state.protocols];

            for (let i = 0; i < newStateDevice_groups.length; i++) {
                // reset all device_groups to 0
                newStateDevice_groups[i].checkedCounter = 0;

                for (let j = 0; j < newStateDevice_groups[i].devices.length; j++) {
                    // reset all devices to 0
                    newStateDevice_groups[i].devices[j].active = 0
                }
            }

            for (let i = 0; i < newStateProtocols.length; i++) {
                // reset all protocols to 0
                newStateProtocols[i].active = false;
            }

            let newTimesActive = "Last 30 minutes";

            return { ...state, device_groups : newStateDevice_groups, protocols : newStateProtocols, timesActive : newTimesActive , };

        default:
            return state
    }
}

export default firstReducer