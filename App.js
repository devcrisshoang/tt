import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import JobListScreen from "./components/JobListScreen";
import color from "./color/color";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.backgroundItemColor }}>
      <TextInput></TextInput>
      <JobListScreen />
    </SafeAreaView>
  );
};

export default App;
