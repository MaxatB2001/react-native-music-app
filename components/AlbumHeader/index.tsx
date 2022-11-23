import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { AlbumType } from "../../types";
import RoundButton, { RoundButtonStyle } from "../UI/RoundButton";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { BASE_URL } from "../../constants/consants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { dislikeAlbum, likeAlbum } from "../../api/SongApi";

export type AlbumHeaderProps = {
  album: AlbumType;
};

const AlbumHeader: FC<AlbumHeaderProps> = ({ album }) => {
  const user = useTypedSelector((state) => state.userReducer.user);
  const {addLikedAlbum, removeFromLikedAlbums} = useActions();

  const addToLikedAlbums = () => {
    addLikedAlbum(album._id)
    likeAlbum(album._id)
  }
  
  const removeLikedAlbum = () => {
    removeFromLikedAlbums(album._id)
    dislikeAlbum(album._id)
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: BASE_URL + "/" + album.picture }}
      />
      <Text style={styles.title}>{album.name}</Text>
      <Text style={styles.artist}>{album.artist.name}</Text>
      <View style={styles.buttons}>
        <RoundButton
          onPress={() => {}}
          buttonStyle={RoundButtonStyle.transparent}
          icon={<AntDesign name="download" size={23} color="white" />}
        />
        <RoundButton
          onPress={() => {}}
          buttonStyle={RoundButtonStyle.yellow}
          icon={<AntDesign name="caretright" size={23} color="black" />}
        />
        <RoundButton
          onPress={user?.likedAlbums.includes(album._id) ? removeLikedAlbum : addToLikedAlbums}
          buttonStyle={RoundButtonStyle.transparent}
          icon={<AntDesign name={user?.likedAlbums.includes(album._id) ? "heart" : "hearto"} size={23} color="white" />}
        />
      </View>
    </View>
  );
};

export default AlbumHeader;
