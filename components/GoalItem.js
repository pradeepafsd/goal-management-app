import { StyleSheet, Text, View, Pressable } from "react-native";

// GoalItem component receives props from parent
const GoalItem = (props) => {
  return (
    // Container for each goal item
    <View style={styles.goalItem}>
      <Pressable
        // When user presses the goal item, delete function will run
        onPress={props.onDelete}
        // android ripple effect (currently commented)
        // android_ripple={{ color: "#210466" }}

        // Apply pressed style when user presses the item
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        {/* Display goal text */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  goalItem: {
    marginTop: 15, // space between items
    borderRadius: 6, // rounded corners
    backgroundColor: "#5e0acc", // item background color
  },
  goalText: {
    color: "white", // text color
    margin: 8, // outer spacing
    padding: 3, // inner spacing
  },
  pressedItem: {
    opacity: 0.5, // reduce opacity when pressed
  },
});

// Export component
export default GoalItem;
