import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

// GoalInput component receives props from parent
const GoalInput = (props) => {
  // State to store input goal text
  const [goalText, setGoalText] = useState("");

  // Function to update goal text when user types
  const goalInputHandler = (text) => {
    //  console.log(text);
    setGoalText(text);
  };

  // Function to add goal and close modal
  const addGoalHandler = () => {
    props.onAddGoal(goalText); // send goal text to parent component
    props.onClose(); // close the modal
  };

  return (
    // Modal used to display input screen
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* Goal icon image */}
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />

        {/* Text input for typing goal */}
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Type your goal"
        />

        {/* Container for buttons */}
        <View style={styles.buttonContainer}>
          {/* Cancel button */}
          <View style={styles.button}>
            <Button color={"#f31282"} title="Cancel" onPress={props.onClose} />
          </View>

          {/* Add goal button */}
          <View style={styles.button}>
            <Button
              color={"#5e0acc"}
              onPress={addGoalHandler}
              title="Add Goal"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// Styling for component
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", // center items vertically
    alignItems: "center", // center items horizontally
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 24,
    flex: 1,
    padding: 16,
    backgroundColor: "#1A0037",
  },
  textInput: {
    borderWidth: 1, // input border
    borderColor: "#cccccc",
    width: "100%", // full width
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    flexDirection: "row", // buttons in row
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8, // spacing between buttons
  },
  image: {
    width: 100,
    height: 100,
    margin: 20, // space around image
  },
});

// Export component
export default GoalInput;
