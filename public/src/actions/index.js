import axios from 'axios';
import {PROJECTS_FETCH} from './types';

export const projectsFetch = () => {
    return (dispatch) => {
        axios.get('https://projecttimer.herokuapp.com/api').then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsUpdate = (id) => {
    return (dispatch) => {
        axios.post('https://projecttimer.herokuapp.com/api/'+id).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsCreate = (project) => {
    return (dispatch) => {
        axios.post('https://projecttimer.herokuapp.com/api',{project}).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsDelete = (id) => {
    return (dispatch) => {
        axios.delete('https://projecttimer.herokuapp.com/api/' + id).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};