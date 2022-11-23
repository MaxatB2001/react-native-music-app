import React, { useEffect, useState } from 'react'
import {View} from 'react-native'
import { getLikedSongs } from '../api/SongApi';
import SongList from '../components/SongList';

const TracksScreen = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getLikedSongs().then(data => setSongs(data))
  }, [])
  return (
    <View>
      <SongList songs={songs}/>
    </View>
  )
}

export default TracksScreen