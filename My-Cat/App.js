import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { v5 as uuidv5 } from "uuid";
import Header from "./Component/Header";
import ListCat from "./Component/ListCat";

const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

export default function App() {
  const [cats, setCats] = useState([
    {
      id: uuidv5("", MY_NAMESPACE),
      name: "kity",
      breed: "hymilaeas",
    },
    {
      id: uuidv5("", MY_NAMESPACE),
      name: "zaza",
      breed: "shirazi",
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={cats} renderItem={({ item }) => <ListCat cat={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
