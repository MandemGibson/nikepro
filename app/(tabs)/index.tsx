import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconContainer from "@/components/IconContainer";
import NavList from "@/components/NavList";
import { useState } from "react";

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const data = [1, 2, 3, 4];

  const renderHorizView = () => {
    return (
      <View
        style={{
          width: screenWidth,
          padding: 20,
        }}
      >
        <View
          style={{
            width: 334,
            backgroundColor: "#C4C4C4",
            height: 150,
            borderRadius: 18,
            marginRight: 20,
            padding: 20,
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "space-between", marginTop: 2 }}>
            <View>
              <Text style={{ fontWeight: "600", fontSize: 30 }}>
                20% Discount{" "}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 400 }}>
                on your first purchase
              </Text>
            </View>

            <Pressable
              style={{
                width: 96,
                height: 29,
                backgroundColor: "#000",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 10,
                }}
              >
                Shop now
              </Text>
            </Pressable>
          </View>

          <Image
            source={require("../../assets/images/Green 1.png")}
            width={195}
            height={95}
            style={{
              position: "absolute",
              top: -42,
              right: -18,
              aspectRatio: 1,
            }}
          />
        </View>
      </View>
    );
  };

  const renderDotIndicator = () => {
    return data.map((_, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor: activeIndex === index ? "#000000" : "#C4C4C4",
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        />
      );
    });
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = e.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconContainer name="menu" />
            <Image
              source={require("../../assets/images/Nike icon mark.png")}
              style={{ marginLeft: 15 }}
            />
          </View>

          <IconContainer name="bag-outline" />
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={renderHorizView}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            style={{ overflow: "visible" }}
            bounces={false}
            onScroll={(e) => handleScroll(e)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderDotIndicator()}
        </View>

        <View style={{margin:16, }}>
          <ScrollView
            style={{ overflow:"visible" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <NavList text="All" selected/>
            <NavList text="Running" />
            <NavList text="Sneakers" />
            <NavList text="Formal" />
            <NavList text="Casual" />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  body: {
    flex: 1,
  },
});
