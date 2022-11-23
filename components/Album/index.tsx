import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import { BASE_URL } from '../../constants/consants';
import { AlbumType } from '../../types';
import styles from './styles';

export type AlbumProps = {
  album: AlbumType;
}

const Album = ({album}: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: album._id})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: BASE_URL + '/' + album.picture}} style={styles.image}/>
        <Text style={styles.name}>{album.name}</Text>
        <Text style={styles.text}>{album.artist.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Album;