import React, {FC, useContext, useEffect, useState} from 'react'
import {Song} from '../../types'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { EvilIcons, Foundation   } from '@expo/vector-icons';
import { AVPlaybackStatus } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { AppContext } from '../../AppContext';
import { BASE_URL } from '../../constants/consants';

const PlayerWidget: FC = () => {

  console.log('rendeed');
  const [sound, setSound] = useState<Sound|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);

  const {setShowPlayer} = useContext(AppContext);

  const value = useContext(AppContext)

  const onPlaybackStatusUpdate = (status: any) => {
    
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  }

  const getSongProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    } 

    return (position / duration) * 100;
  }
  
  const playCurrentSong = async () => {

    if (sound) {
      await sound.unloadAsync();
    }
    
    const {sound: newSound} = await Sound.createAsync(
      {uri: `${BASE_URL}/` + value.song.audio},
      {shouldPlay: true},
      onPlaybackStatusUpdate
    )
    setSound(newSound)
  }

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  }

  useEffect(() => {
    playCurrentSong();
  }, [value.song])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowPlayer(true)}>
      <View style={[styles.progress, {width: `${getSongProgress()}%`}]}></View>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: `${BASE_URL}/` + value.song.picture}}/>
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{value.song.name}</Text>
            <Text style={styles.artist}>{value.song.artist}</Text>
          </View>
          <View style={styles.icons}>
            <EvilIcons name='heart' size={30} color='white'/>
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