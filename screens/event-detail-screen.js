import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const EventDetailScreen = () => {
  const { params } = useRoute();

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Event Detail Screen {params.eventId}</Text>
      <Text style={styles.text}>{params.title}</Text>
      <Text style={styles.text}>{params.description}</Text>
    </View>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  text: {
    fontSize: 24,
  },
});
