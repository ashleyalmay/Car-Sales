export const DELETE_FEATURES = 'DELETE_FEATURES';

export const deleteFeatures = item => {
    return {
        type: DELETE_FEATURES,
        payload:item
    }
}

export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeatures = item => {
    return {
        type: ADD_FEATURES,
        payload:item
    }
}
