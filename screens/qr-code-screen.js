import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QrCodeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>QR Code Scan</Text>
    </View>
  );
};

export default QrCodeScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
