import React from 'react';
import classes from './MainPage.module.css';
import Profile from './Profile/Profile';
import MyMessages from './MyMessages/MyMessages';
import Music from "./Music/Music";
import Notifications from './Notifications/Notifications';
import MySettings from './MySettings/MySettings';
import {Route} from "react-router-dom";

const MainPage = (props) => {

    return (
        <div className={classes.mainPage}>
            <Route exact path='/' render={() =>
                <Profile
                    stateProfilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updatePostMessageText={props.updatePostMessageText}
                />}/>
            <Route path='/myMessages' render={() =>
                <MyMessages
                    stateMessagesPage={props.state.messagesPage}
                    addDialogMessage={props.addDialogMessage}
                    updateDialogMessageText={props.updateDialogMessageText}
                />}/>
            <Route path='/myMusic' render={Music}/>
            <Route path='/notifications' render={Notifications}/>
            <Route path='/mySettings' render={MySettings}/>
        </div>
    );
}

export default MainPage;