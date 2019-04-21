
/*
 * action types
 */

export const GET_INITIALIZESTATE = 'GET_INITIALIZESTATE';
export const GET_DEVICE_GROUPS = 'GET_DEVICE_GROUPS';
export const CHANGE_GROUP_CHECKBOX = 'CHANGE_GROUP_CHECKBOX';
export const CHANGE_DEVICE_CHECKBOX = 'CHANGE_DEVICE_CHECKBOX';
export const CHANGE_PROTOCOL_CHECKBOX = 'CHANGE_PROTOCOL_CHECKBOX';
export const CHANGE_TIMES_CHECKBOX = 'CHANGE_TIMES_CHECKBOX';
export const RESET_STATE = 'RESET_STATE';
export const SUBMIT_FORM = 'SUBMIT_FORM';

/*
 * action creators
 */
export function InitializeState(payload) {
    return { type: GET_INITIALIZESTATE, payload }
};

export function changeGroupCheckBox(payload) {
    return { type: CHANGE_GROUP_CHECKBOX, payload }
};

export function changeDeviceCheckBox(payload) {
    return { type: CHANGE_DEVICE_CHECKBOX, payload }
};

export function changeProtocolCheckBox(payload) {
    return { type: CHANGE_PROTOCOL_CHECKBOX, payload }
};

export function changeTimesCheckBox(payload) {
    return { type: CHANGE_TIMES_CHECKBOX, payload }
};

export function resetState(payload) {
    return { type: RESET_STATE, payload }
};

export function submitForm(payload) {
    return { type: SUBMIT_FORM, payload }
};
