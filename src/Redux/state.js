const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_POST_MESSAGE_TEXT = 'UPDATE-POST-MESSAGE-TEXT'
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT'
const CLEAR_DIALOG_MESSAGE_TEXT = 'CLEAR-DIALOG-MESSAGE-TEXT'

const store = {
	_state: {
		messagesPage: {
			dialogsData: [
				{id: 1, name: 'Andy'},
				{id: 2, name: 'Panda'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Vika'},
				{id: 5, name: 'Dasha'},
				{id: 7, name: 'Lusya'}
			],
			messagesData: [
				{id: 0, message: 'Hi'},
				{id: 1, message: 'How are you?'},
				{id: 2, message: 'Are you here??'}
			],
			newMessageText: ""
		},
		profilePage: {
			postData: [
				{id: 0, message: 'Hi, how are you?', likeCount: 15},
				{id: 1, message: "It's my first post", likeCount: 34},
			],
			newPostText: ""
		},
		sideBar: {
			avatarsData: [
				{id: 0, userName: 'Andy'},
				{id: 1, userName: 'Panda'},
				{id: 2, userName: 'Dasha'},
				{id: 3, userName: 'Vika'},
				{id: 4, userName: 'Masha'},
				{id: 5, userName: 'Tanya'}
			]
		}
	},
	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	// наши методы до добавления dispatch
	// addPost() {
	// 	if (this._state.profilePage.newPostText && this._state.profilePage.newPostText.replace(/\s/g, "")) {
	// 		let newPost = {
	// 			id: 2,
	// 			message: this._state.profilePage.newPostText,
	// 			likeCount: 0,
	// 		}
	// 		this._state.profilePage.postData.push(newPost)
	// 		this._state.profilePage.newPostText = ""
	// 		this.rerenderEntireTree(this._state)
	// 	} else {
	// 		return false
	// 	}
	// },
	// addMessage() {
	// 	if (this._state.messagesPage.newMessageText && this._state.messagesPage.newMessageText.replace(/\s/g, "")) {
	// 		let newDialogMessage = {
	// 			id: 3,
	// 			message: this._state.messagesPage.newMessageText
	// 		}
	// 		this._state.messagesPage.messagesData.push(newDialogMessage)
	// 		this._state.messagesPage.newMessageText = ""
	// 		this.rerenderEntireTree(this._state)
	// 	} else {
	// 		return false
	// 	}
	// },
	// updatePostMessageText(newText) {
	// 	this._state.profilePage.newPostText = newText
	// 	this.rerenderEntireTree(this._state)
	// },
	// updateDialogMessageText(newText) {
	// 	this._state.messagesPage.newMessageText = newText
	// 	this.rerenderEntireTree(this._state)
	// },
	// clearDialogMessageText() {
	// 	if (this._state.messagesPage.newMessageText) {
	// 		this._state.messagesPage.newMessageText = ""
	// 		this.rerenderEntireTree(this._state)
	// 	} else {
	// 		return false
	// 	}
	// },
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			if (this._state.profilePage.newPostText && this._state.profilePage.newPostText.replace(/\s/g, "")) {
				let newPost = {
					id: 5,
					message: this._state.profilePage.newPostText,
					likeCount: 0,
				}
				this._state.profilePage.postData.push(newPost)
				this._state.profilePage.newPostText = ""
				this._callSubscriber(this._state)
			} else {
				return false
			}
		} else if (action.type === 'UPDATE-POST-MESSAGE-TEXT') {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === 'ADD-MESSAGE') {
			if (this._state.messagesPage.newMessageText && this._state.messagesPage.newMessageText.replace(/\s/g, "")) {
				let newDialogMessage = {
					id: 3,
					message: this._state.messagesPage.newMessageText
				}
				this._state.messagesPage.messagesData.push(newDialogMessage)
				this._state.messagesPage.newMessageText = ""
				this._callSubscriber(this._state)
			} else {
				return false
			}
		} else if (action.type === 'UPDATE-DIALOG-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === 'CLEAR-DIALOG-MESSAGE-TEXT') {
			if (this._state.messagesPage.newMessageText) {
				this._state.messagesPage.newMessageText = ""
				this._callSubscriber(this._state)
			} else {
				return false
			}
		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const onChangePostTextActionCreator = (text) => ({type: UPDATE_POST_MESSAGE_TEXT, newText: text})

export const onChangeMessageTextActionCreator = (text) => ({type: UPDATE_DIALOG_MESSAGE_TEXT, newText: text})

export const clearMessageInDialogActionCreator = () => ({type: CLEAR_DIALOG_MESSAGE_TEXT})



window.store = store

export default store;


// ниже наш статический стейт, который мы искусственно создавали вначале

// заглушка по умолчанию, которая все равно переназначается внутри функции subscriber
// let rerenderEntireTree = () => {
// 	console.log('state changed')
// }

// наш главный стейт с данными ( статический )
// let state = {
// 	messagesPage: {
// 		dialogsData: [
// 			{id: 1, name: 'Andy'},
// 			{id: 2, name: 'Panda'},
// 			{id: 3, name: 'Sveta'},
// 			{id: 4, name: 'Vika'},
// 			{id: 5, name: 'Dasha'},
// 			{id: 7, name: 'Lusya'}
// 		],
// 		messagesData: [
// 			{id: 0, message: 'Hi'},
// 			{id: 1, message: 'How are you?'},
// 			{id: 2, message: 'Are you here??'}
// 		],
// 		newMessageText: ""
// 	},
// 	profilePage: {
// 		postData: [
// 			{id: 0, message: 'Hi, how are you?', likeCount: 15},
// 			{id: 1, message: "It's my first post", likeCount: 34},
// 		],
// 		newPostText: ""
// 	},
// 	sideBar: {
// 		avatarsData: [
// 			{id: 0, userName: 'Andy'},
// 			{id: 1, userName: 'Panda'},
// 			{id: 2, userName: 'Dasha'},
// 			{id: 3, userName: 'Vika'},
// 			{id: 4, userName: 'Masha'},
// 			{id: 5, userName: 'Tanya'}
// 		]
// 	}
// }

// функция добавления поста на главную страницу, вноси созданный объект в стейт, обнуляем строку и рендерим компонент
// export const addPost = () => {
// 	if (state.profilePage.newPostText && state.profilePage.newPostText.replace(/\s/g, "")) {
// 		let newPost = {
// 			id: 2,
// 			message: state.profilePage.newPostText,
// 			likeCount: 0,
// 		}
// 		state.profilePage.postData.push(newPost)
// 		state.profilePage.newPostText = ""
// 		rerenderEntireTree(state)
// 	} else {
// 		return false
// 	}
// }

// функция, которая отслеживает вводимые данные, сразу же меняет их в стейт и рендерит компонент
// export const updatePostMessageText = (newText) => {
// 	state.profilePage.newPostText = newText
// 	rerenderEntireTree(state)
// }

// функция добавления сообщения в диалогах
// export const addDialogMessage = () => {
// 	if (state.messagesPage.newMessageText && state.messagesPage.newMessageText.replace(/\s/g, "")) {
// 		let newDialogMessage = {
// 			id: 3,
// 			message: state.messagesPage.newMessageText
// 		}
// 		state.messagesPage.messagesData.push(newDialogMessage)
// 		state.messagesPage.newMessageText = ""
// 		rerenderEntireTree(state)
// 	} else {
// 		return false
// 	}
// }

// функция, которая отслеживает вводимые данные, сразу же меняет их в стейт и рендерит компонент
// export const updateDialogMessageText = (newText) => {
// 	state.messagesPage.newMessageText = newText
// 	rerenderEntireTree(state)
// }

//функция, которая чистит весь введенный текст в поле ввода в сообщениях
// export const clearDialogMessageText = () => {
// 	if (state.messagesPage.newMessageText) {
// 		state.messagesPage.newMessageText = ""
// 		rerenderEntireTree(state)
// 	} else {
// 		return false
// 	}
// }

// наш наблюдатель, которому в качестве аргумента прилетает функция отрисовки приложения из index.js, которую мы позже
// вызываем при каждом изменении UI
// export const subscriber = (observer) => {
// 	rerenderEntireTree = observer
// }