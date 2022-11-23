import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { getArtist } from "../api/SongApi";
import Album from "../components/Album";
import ArtistHeader from '../components/ArtistHeader'
import AlbumList from "../components/AlbumList";
import SongList from "../components/SongList";
import { AlbumType, Artist, Song } from "../types";

const ArtistScreen = () => {
  const route = useRoute();
  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    getArtist(route.params?.id).then((data) => setArtist(data));
  }, []);

  if (artist == null) return null;

  return (
    <View>
      <SongList
        songs={artist?.tracks as Song[]}
        header={
          <AlbumList
          header={<ArtistHeader footer={<Text style={styles.text}>Альбомы</Text>} artist={artist}/>}
            footer={
              <Text
                style={styles.text}
              >
                Треки
              </Text>
            }
            data={artist?.albums as AlbumType[]}
          />
        }
      />
    </View>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: 'center', 
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20
  }
})