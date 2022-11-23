import React, { FC, ReactNode, useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { getChart } from "../api/SongApi";
import SongListItem from "../components/SongListItem";
import { Song } from "../types";

const SongList = () => {
  const [songs, setSongs] = useState<Array<Song> | null>(null);

  useEffect(() => {
    getChart().then((data) => setSongs(data));
  }, []);

  if (songs === null) return null;

  return (
    <FlatList
      data={songs}
      renderItem={({ item, index }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{              
              color: "white",
              paddingHorizontal: 10,
              fontWeight: 'bold',
              fontSize: 15
            }}
          >
            {index + 1}
          </Text>
          <SongListItem song={item} songs={songs} index={index} />
        </View>
      )}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SongList;
