import {View, Text, FlatList, Image} from 'react-native'
import React from 'react'
import {IPost} from "../../types/models";
import FeedGridItem from "./FeedGridItem";

interface IFeedGridView {
    data: IPost[];
    ListHeaderComponent?: React.FC;
}

const  FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
    return (
        <FlatList
            data={data}
            // @ts-ignore
            renderItem={({item}) => <FeedGridItem post={item}/>}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeaderComponent}
            style={{marginHorizontal: -1}}
        />
    )
}

export default FeedGridView;
