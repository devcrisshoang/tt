import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import JobCategory from "./JobCategory";
import { jobCategories } from "../data/jobs";

const JobListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={jobCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCategory category={item} />}
      />
    </SafeAreaView>
  );
};

export default JobListScreen;
