export const ADD_STEP = 'ADD_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'

export function addStep(e) {
    return {
        type: ADD_STEP,
        content: e
    }
}

export function removeStep(i) {
    return {
        type: REMOVE_STEP,
        index: i
    }
}

