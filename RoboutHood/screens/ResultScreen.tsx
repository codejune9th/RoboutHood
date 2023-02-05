import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Lottie from 'lottie-react-native';

import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { Text, View } from '../components/Themed';

const Separator = () => <View style={styles.separator} />;

export default function ResultScreen({ navigation: { navigate }, route: { params }}) {
  const search = params.search;
  const [generateResult, setGenerateResult] = useState(undefined);
  useEffect(() => {
    console.log(search[0].text, 'in resultscreen');
    setGenerateResult(search[0].text);
  }, [search])
  // setTimeOut(() => {

  // }, 5000);

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          <View style={styles.recordButton}>
          <TouchableOpacity
            title="Record"
          >
            <Text>Record</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.title}>{generateResult ? generateResult : null}</Text>
        </View>
        <Separator />
        <View style={styles.buttons}>
          <TouchableOpacity
            title="Search More"
          >
            <Text style={styles.button}>Search Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            title="Cancel"
            onPress={(() => navigate("Search"))}
          >
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  smallContainer: {
    flex: 1,
    flexDirection: "column",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    // marginTop: 16,
    // marginLeft: 8,
    // marginRight: 8,
    // marginBottom: 16,
    fontSize: 20,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // justifyContent: 'start'
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginLeft: 40,
    marginRight: 40
  },
  recordButton: {
    justifyContent: "flex-end"
  },
  separator: {
    marginVertical: 8,
    // height: 1,
    // width: '80%',
    borderBottomColor: '#737373',
  },
});