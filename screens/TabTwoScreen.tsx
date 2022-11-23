import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, FlatList } from "react-native";
import { search } from "../api/SongApi";
import Album from "../components/Album";
import AlbumList from "../components/AlbumList";
import ArtistComponent from "../components/Artist";
import SongList from "../components/SongList";
import { AlbumType, Artist, Song } from "../types";

export enum searchFilters {
  track = "track",
  album = "album",
  artist = "artist",
}

export default function TabTwoScreen() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Array<AlbumType | Song | Artist>>([]);
  const [activeFilter, setActiveFilter] = useState(searchFilters.track);

  useEffect(() => {
    search(query, activeFilter)
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
  }, [query, activeFilter]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor="gray"
        placeholder="Трек, альбом, исполнитель"
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
      <View style={styles.items}>
        <Text
          style={
            activeFilter == searchFilters.track
              ? [styles.item, styles.activeFilter]
              : styles.item
          }
          onPress={() => {
            setItems([]);
            setActiveFilter(searchFilters.track);
          }}
        >
          Треки
        </Text>
        <Text
          style={
            activeFilter == searchFilters.album
              ? [styles.item, styles.activeFilter]
              : styles.item
          }
          onPress={() => {
            setItems([]);
            setActiveFilter(searchFilters.album);
          }}
        >
          Альбомы
        </Text>
        <Text
          style={
            activeFilter == searchFilters.artist
              ? [styles.item, styles.activeFilter]
              : styles.item
          }
          onPress={() => {
            setItems([]);
            setActiveFilter(searchFilters.artist);
          }}
        >
          Исполнители
        </Text>
        <Text style={styles.item}>Плейлисты</Text>
      </View>
      {activeFilter == searchFilters.track && (
        <SongList songs={items as Array<Song>} />
      )}
      {activeFilter == searchFilters.album && (
        <AlbumList data={items as AlbumType[]} />
      )}
      {activeFilter == searchFilters.artist && (
        <FlatList
          data={items as Array<Artist>}
          renderItem={({ item }) => <ArtistComponent artist={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    margin: 10,
    backgroundColor: "#131313",
    padding: 10,
    borderRadius: 20,
    color: "white",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  item: {
    color: "white",
    backgroundColor: "#131313",
    padding: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  activeFilter: {
    borderColor: "yellow",
    borderWidth: 1,
  },
});
