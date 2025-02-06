import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import color from "../color/color";

const JobItem = ({ job }) => {
  return (
    <View style={styles.jobContainer}>
      <Image source={{uri: job.logo}} style={styles.logo}></Image>
      <View>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company} - {job.location}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
        <View style={styles.tagContainer}>
          {job.tags.map((tag,index) => (
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
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  jobContainer: {
    backgroundColor: color.backgroundItemColor,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 16
  },
  company: {
    color: color.gray,
    marginLeft: 5,
    fontSize: 14
  },
  salary: {
    marginLeft: 5,
    color: color.green,
    fontWeight: "bold",
    fontSize: 14
  },
  tagContainer: {
    flexDirection: "row"
  },
  tag: {
    marginLeft: 5,
    backgroundColor: color.backgroundTagItemColor,
    margin: 5,
    padding: 3,
    borderRadius: 10,
    fontSize: 14
  }
})

export default JobItem;
