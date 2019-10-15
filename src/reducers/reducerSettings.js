const defaultSettings = {
    nameFormat: "first-last",
    sortBy: "unsorted",
    statusFilter: "all",
    details: "no-choice"
};

const reducerSettings = (state = defaultSettings, action) => {
    switch (action.type) {
        case "set_name_format_first_last":
            return {...state, nameFormat: "first-last"};
        case "set_name_format_last_first":
            return {...state, nameFormat: "last-first"};
        case "sort_by_first_name":
            return {...state, sortBy: "first-name"};
        case "sort_by_last_name":
            return {...state, sortBy: "last-name"};
        case "status_filter_all":
            return {...state, statusFilter: "all"};
        case "status_filter_favorite":
            return {...state, statusFilter: "favorite"};
        case "status_filter_blocked":
            return {...state, statusFilter: "blocked"};
        case "status_filter_neutral":
            return {...state, statusFilter: "neutral"};
        default:
            return state;
    }
};

export default reducerSettings;
