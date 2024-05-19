import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: any;
  size?: number;
  onPress?: () => void;
}

const IconContainer = ({ name, size = 25, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} style={styles.iconContainer} selectable/>
    </Pressable>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D7DBDD",
  },
});
