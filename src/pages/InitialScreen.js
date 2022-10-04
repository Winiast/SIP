import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

// Home Screen page
export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIP DIGITAL</Text>

      <Button
        style={styles.buttons}
        title="Go to Details"
        color="#841584"
        onPress={() => navigation.navigate("Detalhes do Plantão")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 30,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    backgroundColor: "black",
    padding: 15,
    color: "#2d2d",
    margin: 20,
  },
});
