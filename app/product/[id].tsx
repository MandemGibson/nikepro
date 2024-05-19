import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import product from "@/components/data/product";
import IconContainer from "@/components/IconContainer";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProductDetails = () => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState<number>(-1);
  const { price, name, sizes, image } = product[3];

  const handleSelectedSize = (index: number) => {
    setSelectedSize(index);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
            onPress={() => {
              console.log("Clicked");
              navigation.goBack();
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{name}</Text>
          <IconContainer name="bag-outline" />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            top: -30,
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              bottom: 10,
              zIndex: 1,
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "600", letterSpacing: 0.25 }}
            >
              Size
            </Text>
            {sizes.map((size, index) => {
              return (
                <Pressable
                  key={index}
                  style={{
                    borderWidth: 1,
                    marginTop: 15,
                    width: 50,
                    height: 36,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: selectedSize === index ? "#000" : "#DEE3EB",
                  }}
                  onPress={() => handleSelectedSize(index)}
                >
                  <Text
                    style={{
                      color: selectedSize === index ? "#000" : "#1F2732",
                      fontSize: 14,
                      letterSpacing: 0.25,
                      fontWeight: "500",
                    }}
                  >
                    {size}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "90deg" }],
                width: 492,
                fontSize: 165,
                fontWeight: "900",
                fontStyle: "italic",
                color: "#E5E5E5",
                marginTop: 150,
              }}
            >
              NIKE
            </Text>

            <Image
              source={image}
              style={{
                width: 284.77,
                height: 400,
                resizeMode: "cover",
                aspectRatio: 1,
                overflow: "visible",
                position: "absolute",
                transform: [{ rotate: "-5deg" }],
                top: 110,
              }}
            />
          </View>
          <View
            style={{
              height: "35%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                width: 32,
                height: 32,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="bookmark-outline" size={17} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "600" }}>Color</Text>
              <View
                style={{
                  borderWidth: 1,
                  width: 32,
                  height: 32,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: "#CD2626",
                    borderRadius: 2,
                  }}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  width: 32,
                  height: 32,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: "#394376",
                    borderRadius: 2,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ top: -80, paddingHorizontal: 20 }}>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>$</Text>
              {price}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#BE3032" }}>
              10% OFF
            </Text>
          </View>

          <Text
            style={{ textAlign: "center", fontSize: 12, fontWeight: "600" }}
          >
            Swipe down to add
          </Text>

          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 10,
              width: 38,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <Ionicons name="bag-outline" size={18} color={"white"} />
            <Ionicons name="chevron-down" size={18} color={"white"} />
            <Ionicons name="chevron-down" size={18} color={"white"} />
            <Ionicons name="chevron-down" size={18} color={"white"} />
          </View>

          <View style={{ top: -75, alignSelf: "center" }}>
            <Image
              source={require("../../assets/images/kisspng-computer-icons-shoe-sneakers-nike-5ae47eb41fe5b8 1.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
