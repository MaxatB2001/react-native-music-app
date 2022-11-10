import React, { FC } from 'react';
import {View, Text, Image} from 'react-native';
import { AlbumType } from '../../types';
import RoundButton, {RoundButtonStyle} from '../UI/RoundButton';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'

export type AlbumHeaderProps = {
  album: AlbumType;
}

const AlbumHeader: FC<AlbumHeaderProps> = ({album}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album.imageUri }}/>
      <Text style={styles.title}>{album.name}</Text>
      <Text style={styles.artist}>{album.artist}</Text>
      <View style={styles.buttons}>
        <RoundButton buttonStyle={RoundButtonStyle.transparent} icon={<AntDesign name="download" size={23} color="white"/>}/>
        <RoundButton buttonStyle={RoundButtonStyle.yellow} icon={<AntDesign name="caretright" size={23} color="black"/>}/>
        <RoundButton buttonStyle={RoundButtonStyle.transparent} icon={<AntDesign name="hearto" size={23} color="white"/>}/>
      </View>
    </View>
  )
}

export default AlbumHeader