import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
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
      <Text style={styles.text}>Profile {params.profileId}</Text>
    </View>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  text: {
    fontSize: 24,
  },
});
