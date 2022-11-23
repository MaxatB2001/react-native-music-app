import React, {FC, useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { AntDesign, Foundation } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';
import { BASE_URL } from '../../constants/consants';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { dislikeSong, likeSong } from '../../api/SongApi';

const PlayerWidget: FC = () => {
  const { active, currentTime, duration, soundObj, isPlaying } = useTypedSelector(
    (state) => state.playerReducer
  );
  const user = useTypedSelector(state => state.userReducer.user)
  const { setShowPlayer, setCurrentTime, setSoundObj, setDuration, setIsPlaying, setLikedSong, removeFromLikedSong } = useActions();

  const onPlaybackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setCurrentTime(status.positionMillis);
  }

  const getSongProgress = () => {
    if (soundObj === null || duration === null || currentTime === null) {
      return 0;
    } 

    return (currentTime / duration) * 100;
  }

  const addLikedSong = () => {
    likeSong(active?._id as string)
    setLikedSong(active?._id as string)
  }

  const removeLikedSong = () => {
    dislikeSong(active?._id as string)
    removeFromLikedSong(active?._id as string)
  }

  const playCurrentSong = async () => {

    if (soundObj) {
      await soundObj.unloadAsync();
    }
    
    const {sound: newSound} = await Sound.createAsync(
      {uri: `${BASE_URL}/` + active?.audio},
      {shouldPlay: true},
      onPlaybackStatusUpdate
    )
    setSoundObj(newSound)
  }

  const onPlayPausePress = async () => {
    if (!soundObj) {
      return;
    }
    if (isPlaying) {
      await soundObj.pauseAsync();
    } else {
      await soundObj.playAsync();
    }
  }

  useEffect(() => {
    playCurrentSong();
  }, [active])

  if (!active) {
    return null
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowPlayer(true)}>
      <View style={[styles.progress, {width: `${getSongProgress()}%`}]}></View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: `${BASE_URL}/` + active?.picture}}/>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{active?.name}</Text>
            <Text style={styles.artist}>{active?.artist.name}</Text>
          </View>
          <View style={styles.icons}>
            {user?.likedTracks.includes(active._id) ? <AntDesign onPress={removeLikedSong} name="heart" size={24} color="#ffdb4d" /> : <AntDesign onPress={addLikedSong} name="hearto" size={24} color="white" />}
            <TouchableOpacity onPress={onPlayPausePress}>
              <Foundation name={isPlaying ? "pause" : "play"} size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default PlayerWidget