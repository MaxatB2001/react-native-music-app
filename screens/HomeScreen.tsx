import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getSelections } from "../api/SongApi";
import AlbumCategory from "../components/AlbumCategory";
import TouchableTab from "../components/TouchableTab";
import { Selections } from "../types";

export default function HomeScreen() {
  const [selections, setSelections] = useState<Array<Selections> | null>(null);
  const navigation = useNavigation();
  useEffect(() => {
    getSelections().then((data) => setSelections(data));
  }, []);

  if (selections == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={selections}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View>
            <TouchableTab
              text="Новые релизы"
              onPress={() => navigation.navigate("NewReleasesScreen")}
              icon={
                <AntDesign name="calendar" size={24} color="grey" />
              }
            />
            <TouchableTab
              text="Чарт"
              onPress={() => navigation.navigate("ChartScreen")}
              icon={
                <MaterialIcons name="stacked-line-chart" size={24} color="grey" />
              }
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
