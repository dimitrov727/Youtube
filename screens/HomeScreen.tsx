import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import VideoList from "../components/VideoList/VideoItem";
import videos from "../assets/data/videos.json";
const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoList video={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
