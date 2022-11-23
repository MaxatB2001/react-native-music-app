import React from 'react';
import {Text, View, FlatList} from 'react-native';
import { AlbumType } from '../../types';
import Album from '../Album';
import styles from './styles';

export type AlbumCategoryProps = {
  title: string;
  albums: Array<AlbumType>
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList 
        data={props.albums}
        renderItem={({item}) => <Album album={item}/>}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default AlbumCategory