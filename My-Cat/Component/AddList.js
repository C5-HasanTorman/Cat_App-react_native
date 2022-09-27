import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
 
} from "react-native";

const AddList = ({ addCat }) => {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescriptione] = useState("");

  return (
    <View style={styles.addList}>
      <TextInput
        placeholder="Cat Name"
        style={styles.input}
        onChangeText={(newName) => setName(newName)}
        value={name}
      />
      <TextInput
        placeholder="Breed"
        style={styles.input}
        onChangeText={(newBreed) => setBreed(newBreed)}
        value={breed}
      />
      <TextInput
        placeholder="Cat Photo"
        style={styles.input}
        onChangeText={(newUrl) => setUrl(newUrl)}
        value={url}
      />
      <TextInput
        placeholder="Description,"
        style={styles.input}
        onChangeText={(newDescription) => setDescriptione(newDescription)}
        value={description}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => addCat(name, breed, url, description)}
      >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "dark",
    fontSize: 20,
    textAlign: "center",
  },
 
});

export default AddList;
