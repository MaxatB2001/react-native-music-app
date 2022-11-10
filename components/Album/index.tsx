import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import { AlbumType } from '../../types';
import styles from './styles';

export type AlbumProps = {
  album: AlbumType;
}

const Album = ({album}: AlbumProps) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', {id: album.id})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: album.imageUri}} style={styles.image}/>
        <Text style={styles.text}>{album.artist}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Album;