import axios from 'axios';
import {PROJECTS_FETCH} from './types';

export const projectsFetch = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api').then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsUpdate = (id) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/api/'+id).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsCreate = (project) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/api',{project}).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};

export const projectsDelete = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3000/api/' + id).then( (response) => {
            dispatch({
                type:PROJECTS_FETCH,
                payload:response.data
            });
        });
    }
};