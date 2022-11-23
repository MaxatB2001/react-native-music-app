import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { getAlbum, getSongs } from '../api/SongApi';
import AlbumHeader from '../components/AlbumHeader';
import SongList from '../components/SongList';
import { AlbumType } from '../types';

const AlbumScreen = () => { 
  const route = useRoute();
  const [album, setAlbum] = useState<AlbumType | null>(null)

  useEffect(() => {
    getAlbum(route.params?.id).then(data => setAlbum(data));
  }, []);

  if (album == null) return null;

  return (
    <View>
      <SongList songs={album.tracks} header={() => <AlbumHeader album={album}/>}/>
    </View>
  )
}

export default AlbumScreen