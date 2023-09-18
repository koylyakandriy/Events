import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventItem = ({ id, title, description }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Event", { eventId: id, title, description })
      }
    >
      <Text>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};

export default EventItem;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#c5c5c5",
    borderRadius: 10,
    marginVertical: 10,
    padding: 30,
  },
});
