export const formatNameFirstLast = () => ({ type: "set_name_format_first_last" });
export const formatNameLastFirst = () => ({ type: "set_name_format_last_first" });

export const sortByFirstName = () => ({ type: "sort_by_first_name" });
export const sortByLastName = () => ({ type: "sort_by_last_name" });

export const showAll = () => ({ type: "status_filter_all" });
export const showFavorite = () => ({ type: "status_filter_favorite" });
export const showNeutral = () => ({ type: "status_filter_neutral" });
export const showBlocked = () => ({ type: "status_filter_blocked" });
