import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

type VideoListProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    user: {
      name: string;
      image?: string;
    };
    views: number;
  };
};

const VideoList = ({video}: VideoListProps) => {
  const minutes = Math.floor(video.duration/60)
  const seconds = video.duration % 60
  return (
    <View>
      {/* Tumbnail */}
      <Image
        style={styles.img}
        source={{
          uri: video.thumbnail,
        }}
      />
      <View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{minutes}:{seconds}</Text>
        </View>
      </View>

      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Avatar */}
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />

        {/* Middle container */}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>
            { video.user.name }
            { video.views }
            { video.createdAt }
          </Text>
        </View>
        {/* Icon */}
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default VideoList;
