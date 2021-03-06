import React from 'react';
import style from './MyMessages.module.css';
import MessageItem from './MessageItem';
import DialogItem from './DialogItem';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Element} from "../../common/FormControls/FormControls";

const MyMessages = (props) => {

	if (!props.stateMessagesPage.dialogsData.length && !props.stateMessagesPage.messagesData.length) {
		props.setMessagesData({
			dialogsData: [
				{
					id: 1,
					userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
					name: 'Andy'
				},
				{
					id: 2,
					userImg: 'https://image1.thematicnews.com/uploads/images/00/00/41/2015/04/30/ad358ed4d0.jpg',
					name: 'Panda'
				},
				{
					id: 3,
					userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
					name: 'Dasha'
				},
				{
					id: 4,
					userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSag9tV0QvMc5HMbiwGKch0lAbSwE9v7i638w&usqp=CAU',
					name: 'July'
				}
			],
			messagesData: [
				{id: 0, message: 'Hi'},
				{id: 1, message: 'How are you?'},
				{id: 2, message: 'Are you here??'}
			],
		})
	}

	let dialogs = props.stateMessagesPage.dialogsData.map(dialog => <DialogItem userImg={dialog.userImg} name={dialog.name} key={dialog.id}
																				id={dialog.id}/>)
	let messages = props.stateMessagesPage.messagesData.map(message => <MessageItem message={message.message} key={message.id}
																					id={message.id}/>)

	const addNewMessage = (values) => {
		props.addDialogMessage(values.newMessageBody)
	}

	// const onChangeMessageText = (e) => {
	// 	let text = e.target.value
	// 	props.onChangeMessageText(text)
	// }
	//
	// const clearMessageInDialog = () => {
	// 	props.clearMessageInDialog()
	// }

	return (
		<div className={style.wrapper}>
			<div className={style.dialog_items}>
				{dialogs}
			</div>
			<div className={style.dialog_messages}>
				<div className={style.dialogMessagesItem_wr}>
					{messages}
				</div>
				<AddMessageFormRedux onSubmit={addNewMessage}/>
			</div>
		</div>
	);
}
const maxLength300 = maxLengthCreator(300)
const Textarea = Element('textarea')


const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name='newMessageBody' placeholder='enter your message' validate={[maxLength300]} />
			{/*<textarea*/}
			{/*	onChange={onChangeMessageText}*/}
			{/*	value={props.stateMessagesPage.newMessageText}*/}
			{/*	placeholder='write a message'*/}
			{/*	name="text"*/}
			{/*	autoFocus={true}*/}
			{/*/>*/}
			<div className={style.btnMessages}>
				<button>Add message</button>
				{/*<button onClick={clearMessageInDialog} type="button">*/}
				{/*	Clear message*/}
				{/*</button>*/}
			</div>
		</form>
	)
}

// наша контейнерная компонента от redux-form, которой мы оборачиваем нашу форму(компоненту)
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default MyMessages;