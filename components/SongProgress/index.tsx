import Slider from '@react-native-community/slider'
import React from 'react'


type SongProgressProps ={
  left: number,
  right: number,
  onChange: (value: number) => void;
}

const SongProgress = ({left, right, onChange}: SongProgressProps) => {
  return (
    <Slider 
        style={{ width: 250, height: 40 }} 
        minimumValue={0}
        value={left}
        maximumValue={right}
        onValueChange={onChange}
        />
  )
}

export default SongProgress