
/*
 * action types
 */

export const GET_DEVICE_GROUPS = 'GET_DEVICE_GROUPS';
export const CHANGE_GROUP_CHECKBOX = 'CHANGE_GROUP_CHECKBOX';
export const CHANGE_DEVICE_CHECKBOX = 'CHANGE_DEVICE_CHECKBOX';
export const GET_DEVICES = 'GET_DEVICES';
export const GET_PROTOCOLS = 'GET_PROTOCOLS';
export const GET_TIMES = 'GET_TIMES';
export const GET_INITIALIZESTATE = 'GET_INITIALIZESTATE';

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










export function getDevice_groups(payload) {
    return { type: GET_DEVICE_GROUPS, payload }
};

export function getDevices(payload) {
    return { type: GET_DEVICES, payload }
};

export function getProtocols(payload) {
    return { type: GET_PROTOCOLS, payload }
};

export function getTimes(payload) {
    return { type: GET_TIMES, payload }
};
