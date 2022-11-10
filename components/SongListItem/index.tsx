import React, {useContext} from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import { AppContext } from '../../AppContext';
import { BASE_URL } from '../../constants/consants';
import { Song } from '../../types';
import styles from './styles';

export type SongListItemProps = {
  song: Song;
}

const SongListItem = ({song}: SongListItemProps) => {

  const value = useContext(AppContext);
  
  const onPlay = () => {
    console.log(song);
    
    value?.setSong(song);
  }

  return (
    <TouchableWithoutFeedback onPress={onPlay}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: BASE_URL + "/" + song.picture }}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.name}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>  
    </TouchableWithoutFeedback>
    
  )
}

export default SongListItem