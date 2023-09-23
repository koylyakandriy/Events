import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeStack, ProfileStack } from "./stack";
import { Image, Linking, SafeAreaView, StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={styles.area}>
          <View style={styles.view}>
            <Image
              style={styles.logo}
              source={require("../assets/homer.png")}
            />
          </View>
          <DrawerItemList {...props} />
          <DrawerItem
            label={"More info"}
            onPress={() => Linking.openURL("https://google.com")}
            icon={() => <Ionicons name="information" size={22} />}
          />
        </SafeAreaView>
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />,
        }}
      />
      <Drawer.Screen
        name="ProfilesStack"
        component={ProfileStack}
        options={{
          title: "Profile",
          drawerIcon: () => (
            <MaterialCommunityIcons name="face-man-profile" size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  area: { flex: 1, backgroundColor: "#99f6e4" },
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
  },
  logo: {
    width: 100,
    resizeMode: "contain",
  },
});
