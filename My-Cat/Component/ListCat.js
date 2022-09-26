import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

const ListCat = ({ cat, deletItem }) => {
  return (
    <TouchableOpacity style={styles.listCat}>
      <View style={styles.listCatView}>
        <Text style={styles.listCatVText}>{cat.name}</Text>
        <View style={styles.butContiner}>
          <Button style={styles.listCatEidt} title="Edit"></Button>
          <Button
            style={styles.listCatRemove}
            title="X"
            onPress={() => deletItem(cat.id)}
          ></Button>
        </View>
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
    color: "firebrick",
  },
  listCatEidt: {
    marginLeft: 50,
  },
});

export default ListCat;
