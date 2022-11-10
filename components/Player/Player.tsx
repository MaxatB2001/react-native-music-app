import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { Dimensions, Animated, StyleSheet, Button } from 'react-native'
import { AppContext } from '../../AppContext'
import RoundButton, { RoundButtonStyle } from '../UI/RoundButton'

const Player = () => {
  const bottomHeight = Dimensions.get("window").height
  const bottomWidth = Dimensions.get("window").width
  const bottom = useRef(new Animated.Value(-bottomHeight)).current;
  const {showPlayer, setShowPlayer} = useContext(AppContext)
  const [open, setOpen] = useState(showPlayer)

  useEffect(() => {
    if (showPlayer) {
      setOpen(showPlayer)
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [showPlayer]);

  if (!open) {
    return null
  }

  return (
    <Animated.View style={[styles.root, {height: bottomHeight, bottom: bottom}]}>
      <RoundButton buttonStyle={RoundButtonStyle.yellow} onPress={()=> setShowPlayer(false)}></RoundButton>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0, 
    zIndex: 100,
    backgroundColor: '#fff',
  
  }
})

export default Player