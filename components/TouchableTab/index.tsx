import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

type TouchableTabProps = {
  onPress: () => void;
  text: string;
  icon: JSX.Element
};

const TouchableTab: FC<TouchableTabProps> = ({ onPress, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.tab}>
        <View style={styles.tabLeft}>
          {icon}
          <Text style={styles.text}>{text}</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="grey" />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableTab;
