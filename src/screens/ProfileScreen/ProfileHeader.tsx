import {Image, Text, View} from "react-native";
import styles from "./styles";
import user from "../../data/user.json";
import Button from "../../components/Button";
import React from "react";

const  ProfileHeader = () => {
    // @ts-ignore
    return (
        <View style={styles.root}>
            <View style={styles.headerRow}>
                {/*Profile image*/}
                <Image source={{uri: user.image}} style={styles.avatar}/>
                {/*Post followers, following number*/}
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>98</Text>
                    <Text>Posts</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>198</Text>
                    <Text>Followers</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>298</Text>
                    <Text>Following</Text>
                </View>
            </View>

            <Text style={styles.name}>{user.name}</Text>
            <Text>{user.bio}</Text>

            {/*Edit profile button*/}
            <View style={{ flexDirection: 'row'}}>
                <Button
                    text='Edit Profile'
                    onPress={() => console.warn('On Edit Profile')}
                />
                <Button
                    text='Another Button'
                    onPress={() => console.warn('On another button')}
                />
            </View>
        </View>
    )
}


export default ProfileHeader;
