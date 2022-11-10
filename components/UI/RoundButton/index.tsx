import React, {ReactNode, FC} from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import styles from './styles';

export type RoundButtonProps = {
  icon: ReactNode;
  buttonStyle: RoundButtonStyle;
  onPress: () => void
}

export enum RoundButtonStyle {
  yellow = 'yellow',
  transparent = 'transparent',
}

const RoundButton: FC<RoundButtonProps> = ({icon, buttonStyle, onPress}) => {  

  return (
    <TouchableOpacity onPress={onPress} style={[styles[buttonStyle], styles.button]}>
      {icon}
    </TouchableOpacity>
  )
}

export default RoundButton