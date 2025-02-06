import React from "react";
import { SafeAreaView } from "react-native";
import JobListScreen from "./components/JobListScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <JobListScreen />
    </SafeAreaView>
  );
};

export default App;
