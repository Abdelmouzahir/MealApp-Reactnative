import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.listText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listText: {
    color: "white",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#D04848",
  },
});
