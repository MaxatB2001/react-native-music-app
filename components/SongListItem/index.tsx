import React, { memo } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { BASE_URL } from "../../constants/consants";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Song } from "../../types";
import styles from "./styles";

export type SongListItemProps = {
  song: Song;
  songs: Array<Song>;
  index: number
};

const SongListItem = ({ song, songs, index }: SongListItemProps) => {
  const currentPlayingSongList = useTypedSelector(
    (state) => state.playerReducer.currentPlayingSongList
  );
  const { setActiveTrack } = useActions();

  const { setCurrentPlayingSongList } = useActions();

  const onPlay = () => {
    setActiveTrack(song, index);

    if (songs !== currentPlayingSongList) {
      setCurrentPlayingSongList(songs);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPlay}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: BASE_URL + "/" + song.picture }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.name}</Text>
          <Text style={styles.artist}>{song.artist.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
