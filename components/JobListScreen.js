import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import JobCategory from "./JobCategory";
import { jobCategories } from "../data/jobs";
 import { menuItems } from "../menu/menuItems";
import color from "../color/color";

const JobListScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(jobCategories);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = jobCategories.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(jobCategories);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Đảm bảo ứng dụng không bị đè bởi thanh trạng thái */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View style={styles.container}>
        {/* Thanh tìm kiếm */}
        <TextInput
          style={styles.searchBar}
          placeholder="Tìm kiếm công việc..."
          value={search}
          onChangeText={handleSearch}
        />

        {/* Danh sách danh mục công việc */}
        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCategory category={item} />}
        />
      </View>

      {/* Footer Menu */}
      <View style={styles.footerMenu}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <Image source={item.logo} style={styles.logo} />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Tránh đè lên trên Android
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: color.backgroundTagItemColor,
  },
  searchBar: {
    height: 50,
    borderColor: color.green,
    backgroundColor: color.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  footerMenu: {
    flexDirection: "row",
    backgroundColor: color.white,
    paddingVertical: 5,
    width: "100%",

  },  
  menuItem: {
    flex: 1,  
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },  
  menuText: {
    color: color.gray,
    fontSize: 14,
  },
  logo: {
    width: 24, 
    height: 24,
    color: color.gray,
  }
});

export default JobListScreen;
