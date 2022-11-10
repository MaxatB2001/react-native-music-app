import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import { getSongs } from '../api/SongApi';
import AlbumHeader from '../components/AlbumHeader';
import SongList from '../components/SongList';

const AlbumScreen = () => {

  const route = useRoute();
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => setSongs(songs));
  }, []);

  const album = {
    id: '1',
    imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
    artist: 'King Gnu',
    name: 'Sympha',
    numberOfLikes: 291210,
    songs: [
    
    ]
  }

  return (
    <View>
      <SongList songs={songs} header={() => <AlbumHeader album={album}/>}/>
    </View>
  )
}

export default AlbumScreen