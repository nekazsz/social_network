import {createSelector} from "reselect";

const getUsersSelector = (state) => {
	return state.usersPage.users
}

// fake filter for testing
export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter(u => true)
})

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching
}

export const getIsFollowingProgress = (state) => {
	return state.usersPage.isFollowingProgress
}

export const getIsAuth = (state) => {
	return state.auth.isAuth
}