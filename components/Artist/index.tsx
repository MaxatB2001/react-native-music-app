import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { BASE_URL } from "../../constants/consants";
import { Artist } from "../../types";
import styles from "./styles";

type ArtistComponentProps = {
  artist: Artist;
};

const ArtistComponent: FC<ArtistComponentProps> = ({ artist }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ArtistScreen", {id: artist._id})}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{ uri: `${BASE_URL}/${artist.picture}` }}
          />
          <Text style={styles.name}>{artist.name}</Text>
        </View>
        <Entypo
          style={styles.dots}
          name="dots-three-horizontal"
          size={20}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ArtistComponent;
