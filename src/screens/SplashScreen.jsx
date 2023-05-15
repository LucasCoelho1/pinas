import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "../utils/styles";
import { Video, ResizeMode  } from "expo-av";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 1000);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff4655" />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: '../assets/video-mascaco.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <Text>Aguarde um instante...</Text>
    </View>
  );
}
