import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListCat = ({ cat }) => {
  return (
    <TouchableOpacity style={styles.listCat}>
      <View style={styles.listCatView}>
        <Text style={styles.listCatVText}>{cat.name}</Text>
        <Text style={styles.listCatRemove}>X</Text>
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
  },
  listCatView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listCatVText: {
    fontSize: 18,
  },
  listCatRemove:{
    color:"firebrick",
  }
});

export default ListCat;
