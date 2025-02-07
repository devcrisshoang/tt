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
import { categoryItems } from "../menu/categoryItems";
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
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Tìm kiếm công việc..."
            value={search}
            onChangeText={handleSearch}
          />
          <View style={styles.imagePadding}>
            <Image source={require("../assets/map.png")} style={styles.map}></Image>
          </View>

        </View>

        {/* Danh sách danh mục công việc */}
        <View style={styles.category}>
          {categoryItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.categoryPadding}>
                <Image source={item.logo} style={styles.logoCategory} />
              </View>
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

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
    backgroundColor: color.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Tránh đè lên trên Android
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: color.backgroundTagItemColor,
  },
  searchBarContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  map: {
    height: 40,
    width: 40,
    backgroundColor: color.white,
    resizeMode: "contain",
  },
  imagePadding: {
    flexDirection: "row",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: color.green,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: color.white,
  },
  searchBar: {
    flex: 1,
    height: 50,
    borderColor: color.green,
    backgroundColor: color.white,
    borderWidth: 1,
    borderRadius: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    backgroundColor: color.white,
    paddingVertical: 5,
    width: "100%",
  },
  footerMenu: {
    flexDirection: "row",
    backgroundColor: color.white,
    width: "100%",

  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  menuText: {
    color: color.gray,
    fontSize: 14,
  },
  logo: {
    width: 24,
    height: 24,
  },
  logoCategory: {
    width: 24,
    height: 24,
    
  },
  categoryPadding: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 25,
  },
  categoryText: {
    color: color.black,
    fontSize: 15,
  },
});

export default JobListScreen;
