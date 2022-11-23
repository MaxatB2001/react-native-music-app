import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Easing,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AntDesign } from "@expo/vector-icons";
import { View } from "../Themed";
import styles from "./styles";
import { BASE_URL } from "../../constants/consants";
import { Entypo } from "@expo/vector-icons";
import RoundButton, { RoundButtonStyle } from "../UI/RoundButton";

const Player = () => {
  const bottomHeight = Dimensions.get("window").height;
  const bottom = useRef(new Animated.Value(-bottomHeight)).current;
  const { showPlayer, active, currentTime, duration, soundObj, isPlaying , songIndex} =
    useTypedSelector((state) => state.playerReducer);
  const { setShowPlayer, playNextSong, playPrevSong } =
    useActions();
  const [open, setOpen] = useState(showPlayer);

  const onChange = (value: any) => {
    if (value == 0) return;

    soundObj?.setPositionAsync(Number(value));
  };

  const onPlayPausePress = async () => {
    if (!soundObj) {
      return;
    }
    if (isPlaying) {
      await soundObj.pauseAsync();
    } else {
      await soundObj.playAsync();
    }
  };

  useEffect(() => {
    if (showPlayer) {
      setOpen(showPlayer);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomHeight,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [showPlayer]);

  if (!open) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.root, { height: bottomHeight, bottom: bottom }]}
    >
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setShowPlayer(false)}>
          <AntDesign name="down" size={24} color="#b2b1a8" />
        </TouchableOpacity>

        <Text>Сейчас играет</Text>

        <TouchableOpacity onPress={() => setShowPlayer(false)}>
          <AntDesign name="bars" size={24} color="#b2b1a8" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${BASE_URL}/` + active?.picture }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.title}>
          <Text style={styles.songName}>{active?.name}</Text>
          <Text style={styles.songArtist}>{active?.artist.name}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          value={Number(currentTime) | 0}
          onSlidingComplete={onChange}
          maximumValue={Number(duration) | 0}
          thumbTintColor="white"
          minimumTrackTintColor="white"
          maximumTrackTintColor="#b2b1a8"
        />
        <View style={styles.buttons}>
          <AntDesign name="download" size={24} color="white" />
          <TouchableOpacity onPress={playPrevSong}>
            <AntDesign name="stepbackward" size={24} color="white" />
          </TouchableOpacity>
          <RoundButton
            onPress={onPlayPausePress}
            buttonStyle={RoundButtonStyle.white}
            icon={
              <AntDesign
                name={isPlaying ? "pause" : "caretright"}
                size={23}
                color="#7e7e72"
              />
            }
          />
          <TouchableOpacity onPress={playNextSong}>
            <AntDesign name="stepforward" size={24} color="white" />
          </TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </View>
      </View>
    </Animated.View>
  );
};

export default Player;
