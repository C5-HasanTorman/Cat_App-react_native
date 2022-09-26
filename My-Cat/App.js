import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import { v5 as uuidv5 } from "uuid";
import Header from "./Component/Header";
import ListCat from "./Component/ListCat";
import AddList from "./Component/AddList";

const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";

export default function App() {
  const [cats, setCats] = useState([
    {
      id: uuidv5("", MY_NAMESPACE),
      name: "kity",
      breed: "hymilaeas",
    },
    {
      id: uuidv5("1", MY_NAMESPACE),
      name: "zaza",
      breed: "shirazi",
    },
  ]);

  const addCat = () => {
    setCats((prevItems) => {
      return [
        { id: uuidv5("hasan", MY_NAMESPACE), name, breed, url, Description },
        ...prevItems,
      ];
    });
  };

  const deletItem = (id) => {
    setCats((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddList addCat={addCat} />
      <FlatList
        data={cats}
        renderItem={({ item }) => <ListCat cat={item} deletItem={deletItem} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
