import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import JobItem from "./JobItem";

const JobCategory = ({ category }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        data={category.jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobItem job={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});

export default JobCategory;
