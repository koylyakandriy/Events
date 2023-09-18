import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";

const EventDetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "new title",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

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
