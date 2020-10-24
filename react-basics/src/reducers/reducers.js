const ADD_OPERATION = "Add";
const SUBTRACT_OPERATION = "Sub"
const operations = (state, action) => {
    if (action.type == ADD_OPERATION) {
        return {
            value: state.value + 1
        }

    }

    if (action.type == SUBTRACT_OPERATION) {
        return {
            value: state.value - 1
        }

    }
    return state
}

export default operations
