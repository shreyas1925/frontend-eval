export const BACKEND_URL = 'http://localhost:8000/';

export const GET_EVENTS = {
    url: 'api/events',
    method: 'get',
};

export const GET_EVENT_BYID = (eventID) => ({
    url: `api/events/${eventID}/`,
    method: 'get',
});

export const UPDATE_REGISTER_BY_ID = (eventID) => ({
    url: `api/events/${eventID}/`,
    method: 'patch',
});