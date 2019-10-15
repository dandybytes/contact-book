const defaultPageState = {
    currentPage: 1,
    itemsPerPage: 10
};

const reducerPagination = (state = defaultPageState, action) => {
    switch (action.type) {
        case "set_items_per_page":
            return {...state, itemsPerPage: action.itemsPerPage};
        case "set_current_page":
            return {...state, currentPage: action.currentPage};
        default:
            return state;
    }
};

export default reducerPagination;
