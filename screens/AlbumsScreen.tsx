import React, { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import { getLikedAlbums } from '../api/SongApi';
import Album from '../components/Album';
import { AlbumType } from '../types';



const AlbumsScreen = () => {
  const [albums, setAlbums] = useState<Array<AlbumType>>([]);
  useEffect(() => {
    getLikedAlbums().then(data => setAlbums(data))
  }, [])
  return (
    <View>
      <FlatList 
          data={albums}
          renderItem={({item}) => <Album album={item}/>}
          keyExtractor={item => item._id}
          numColumns={2}
         />
    </View>
  )
}

export default AlbumsScreen