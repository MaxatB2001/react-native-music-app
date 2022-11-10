import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerWidget from './components/PlayerWidget';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AppContext } from './AppContext';
import { useState } from 'react';
import { Song } from './types';
import Player from './components/Player/Player';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [song, setSong] = useState<Song>({} as Song);
  console.log('updated');
  const [showPlayer, setShowPlayer] = useState(false)
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          song,
          setSong: (song: Song) => setSong(song),
          showPlayer,
          setShowPlayer
        }}> 
          <Navigation colorScheme={colorScheme} />
          <Player/>
          <StatusBar />
          { song._id ? <PlayerWidget/> : null}
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
