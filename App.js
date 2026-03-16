// Import required components from react-native
import { StyleSheet, View, FlatList, Button } from "react-native";

// Import React hook for state management
import { useState } from "react";

// Import custom components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Import StatusBar from Expo
import { StatusBar } from "expo-status-bar";

export default function App() {
  // State to store list of goals
  const [goals, setGoals] = useState([]);

  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to add a new goal
  const addGoalHandler = (goalText) => {
    // console.log(goalText);

    // Update goals state by adding new goal to existing array
    setGoals((currentGoals) => [...currentGoals, goalText]);
  };

  // Function to delete goal based on index
  const deleteItems = (index) => {
    // console.log("Delete item" + index);

    // Filter out the goal that matches the index
    const newGoals = goals.filter((el, i) => i != index);

    // Update goals state after removing item
    setGoals(newGoals);
  };

  // Function to open modal for adding goal
  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  // Function to close modal
  const closeGoalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* Status bar styling */}
      <StatusBar style="light" />

      {/* Main container */}
      <View style={styles.appContainer}>
        {/* Button to open modal for adding new goal */}
        <Button
          title="Add New Goal"
          color="#A070D6"
          onPress={startAddGoalHandler}
        />

        {/* Goal input modal component */}
        <GoalInput
          onClose={closeGoalHandler}
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
        />

        {/* Container to display goals */}
        <View style={styles.goalContainer}>
          {/* FlatList used for efficient rendering of list items */}
          <FlatList
            data={goals}
            // Render each goal item
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item}
                  // Pass delete function to GoalItem
                  onDelete={() => deleteItems(itemData.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

// Stylesheet for component styling
const styles = StyleSheet.create({
  // Main app container styling
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1A0037",
  },

  // Goal list container styling
  goalContainer: {
    flex: 4,
  },
});
