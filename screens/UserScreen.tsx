import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useNavigation } from "@react-navigation/native";
import TouchableTab from "../components/TouchableTab";

const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableTab
        text="Треки"
        onPress={() => navigation.navigate("TracksScreen")}
        icon={<Ionicons name="musical-notes-outline" size={24} color="grey" />}
      />
      <TouchableTab
        text="Альбомы"
        onPress={() => navigation.navigate("AlbumsScreen")}
        icon={<MaterialIcons name="album" size={24} color="grey" />}
      />
      <TouchableTab
        text="Исполнители"
        onPress={() => navigation.navigate("ArtistsScreen")}
        icon={<Entypo name="modern-mic" size={24} color="grey" />}
      />
      <TouchableTab
        text="Плейлисты"
        onPress={() => navigation.navigate("ArtistsScreen")}
        icon={<Ionicons name="albums-outline" size={24} color="grey" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
  }
});

export default UserScreen;
