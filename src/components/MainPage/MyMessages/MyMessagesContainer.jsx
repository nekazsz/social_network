import React from 'react';
import {addDialogMessage, setMessagesData } from "../../../Redux/dialogs-reducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
	return {
		stateMessagesPage: state.messagesPage
	}
}

export default compose(
	connect(mapStateToProps,{setMessagesData, addDialogMessage}),
	withAuthRedirect
)(MyMessages)