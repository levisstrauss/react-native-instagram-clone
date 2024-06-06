import {Image, FlatList} from 'react-native'
import React from 'react'
import user from '../../data/user.json'
import ProfileHeader from "./ProfileHeader";
import FeedGridView from "../../components/FeedGridView";


const ProfileScreen = () => {
    return (
       <FeedGridView
           data={user.posts}
           ListHeaderComponent={ProfileHeader}
       />
    )
}

export default ProfileScreen;
