import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Modal,
  TextInput,
  Pressable,
} from "react-native";

const ListCat = ({ cat, deletItem, updateItem }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [updateName, setUpdateName] = useState("");
  const [updateBreed, setUpdateBreed] = useState("");
  const [updateUrl, setUpdateUrl] = useState("");
  const [updateDescription, setuUpdateDescription] = useState("");

  const hundleOnPress = (id, name) => {
    setModalVisible(!modalVisible);
    updateItem(id, name);
  };

  return (
    <TouchableOpacity style={styles.listCat}>
      <View style={styles.listCatView}>
        <Text style={styles.listCatVText}>{cat.name}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                placeholder="Cat Name"
                style={styles.input}
                onChangeText={(newName) => setUpdateName(newName)}
                value={updateName}
              />
              <TextInput
                placeholder="Breed"
                style={styles.input}
                onChangeText={(newName) => setUpdateBreed(newName)}
                value={updateBreed}
              />
              <TextInput
                placeholder="Cat Photo"
                style={styles.input}
                onChangeText={(newName) => setUpdateUrl(newName)}
                value={updateUrl}
              />
              <TextInput
                placeholder="Description,"
                style={styles.input}
                onChangeText={(newName) => setuUpdateDescription(newName)}
                value={updateDescription}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => hundleOnPress(cat.id, updateItem)}
              >
                <Text style={styles.textStyle}>Update</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Edit</Text>
        </Pressable>
        <Button
          style={styles.listCatRemove}
          title="X"
          onPress={() => deletItem(cat.id)}
        ></Button>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCat: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 2,
    borderColor: "#eee",
    marginTop: 50,
  },
  butContiner: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  listCatView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listCatVText: {
    fontSize: 18,
  },
  listCatRemove: {
    backgroundColor: "firebrick",
  },
  listCatEidt: {
    marginLeft: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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

export default ListCat;
