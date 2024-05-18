import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: any;
  size?: number,
  onPress?:()=>void
}

const IconContainer = ({ name, size=25, onPress }: Props) => {
  return <Ionicons name={name} size={size} style={styles.iconContainer} onPress={onPress}/>;
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
