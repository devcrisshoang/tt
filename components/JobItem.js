import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const JobItem = ({ job }) => {
  return (
    <View style={styles.jobContainer}>
      {/* Logo công ty */}
      <Image source={{ uri: job.logo }} style={styles.logo} />

      {/* Nội dung công việc */}
      <View style={styles.textContainer}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.companyName}>
          {job.company} - {job.location}
        </Text>
        <Text style={styles.salary}>{job.salary}</Text>

        {/* Danh sách thẻ tags */}
        <View style={styles.tagContainer}>
          {job.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  jobTitle: { fontSize: 16, fontWeight: "bold" },
  companyName: { fontSize: 14, color: "gray" },
  salary: { fontSize: 14, fontWeight: "600", color: "green", marginTop: 5 },
  tagContainer: { flexDirection: "row", marginTop: 5 },
  tag: {
    backgroundColor: "#e0e0e0",
    color: "#333",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 5,
  },
});

export default JobItem;
