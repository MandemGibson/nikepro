import { Pressable, Text } from 'react-native'
import React from 'react'

interface Props{
    text:string,
    selected?: boolean,
    onPress?: ()=>void
}

const NavList = ({text, selected=false, onPress}: Props) => {
  return (
    <Pressable
            style={{
              backgroundColor: selected ? "#000" : "#fff",
              borderRadius: 100,
              height:36,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal:selected ? 25 : 10,
              margin:4
            }}
            onPress={onPress}
          >
            <Text
              style={{
                color: selected ? "#fff" : "#9C9C9C",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {text}
            </Text>
          </Pressable>
  )
}

export default NavList