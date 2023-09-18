import React from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = () => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("refreshing...:")}
          />
        }
      />
    </View>
  );
};

export default EventList;
