import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: any;
}

const IconContainer = ({ name }: Props) => {
  return <Ionicons name={name} size={25} style={styles.iconContainer}/>;
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
