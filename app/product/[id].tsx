import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import product from "@/components/data/product";
import IconContainer from "@/components/IconContainer";
import { useNavigation } from "expo-router";

const ProductDetails = () => {
  const navigation = useNavigation();
  const { price, name, sizes } = product[3];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <IconContainer
          name="arrow-back-outline"
          onPress={() => navigation.goBack()}
        />
        <Text>{name}</Text>
        <IconContainer name="bag-outline" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems:"center",
          justifyContent: "space-between",
          flex: 1,
          paddingHorizontal:20
          // marginTop:150
        }}
      >
        <View>
          <Text>Size</Text>
          {sizes.map((size, index) => {
            return (
              <View key={index}>
                <Text>{size}</Text>
              </View>
            );
          })}
        </View>
        <View style={{  }}>
          <Text
            style={{
              transform: [{ rotate: "90deg" }],
              fontSize: 30,
              fontWeight: "900",
              fontStyle: "italic",
              color: "#9C9C9C",
            }}
          >
            NIKE
          </Text>
          <Image source={require("../../assets/images/Red Shoe.png")} style={{width:170, aspectRatio:1, position:"absolute"}}/>
        </View>
        <View>
          <IconContainer name="bookmark-outline" />
          <Text>Color</Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
