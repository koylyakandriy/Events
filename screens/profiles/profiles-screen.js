import React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilesScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile screen</Text>
      <Button
        title="Some Profile"
        onPress={() => navigation.navigate("Profile", { profileId: 1 })}
      />
    </View>
  );
};

export default ProfilesScreen;
