import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Cat App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#552586",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 23,
  },
});

export default Header;
