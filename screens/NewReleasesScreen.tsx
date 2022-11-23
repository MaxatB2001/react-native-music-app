import React, { useEffect, useState } from 'react'
import {View} from 'react-native'; 
import { getLatestReleases } from '../api/SongApi';
import AlbumList from '../components/AlbumList';
import { AlbumType } from '../types';

const NewReleasesScreen = () => {
  const [albums, setAlbums] = useState<Array<AlbumType> | null>(null);
  useEffect(() => {
    getLatestReleases().then(data => setAlbums(data))
  }, [])
  if (albums == null) return null;
  return (
    <View>
      <AlbumList data={albums}/>
    </View>
  )
}

export default NewReleasesScreen