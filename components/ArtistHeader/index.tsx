import React, { FC } from "react";
import { View, Text, ImageBackground } from "react-native";
import { AlbumType, Artist } from "../../types";
import RoundButton, { RoundButtonStyle } from "../UI/RoundButton";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { BASE_URL } from "../../constants/consants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";


export type AlbumHeaderProps = {
  artist: Artist;
  footer?: JSX.Element
};

const AlbumHeader: FC<AlbumHeaderProps> = ({ artist, footer }) => {
  const user = useTypedSelector((state) => state.userReducer.user);
  const {} = useActions();

  const addToLikedArtists = () => {
    
  }
  
  const removeLikedArtists = () => {
    
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} source={{ uri: BASE_URL + "/" + artist.picture }}>
      <Text style={styles.title}>{artist.name}</Text>
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
          onPress={user?.likedArtists.includes(artist._id) ? removeLikedArtists : addToLikedArtists}
          buttonStyle={RoundButtonStyle.transparent}
          icon={<AntDesign name={user?.likedArtists.includes(artist._id) ? "heart" : "hearto"} size={23} color="white" />}
        />
      </View>
      </ImageBackground>
      {footer}
    </View>
  );
};

export default AlbumHeader;
