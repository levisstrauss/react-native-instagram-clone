import React from 'react';
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";

const App = () => {
  return (
    <View style={styles.app}>
      <EditProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 40,
  }

})

export default App;
