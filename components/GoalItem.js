import { Button, StyleSheet, View, Text, Pressable } from "react-native"
function GoalItem({text, onDeleteGoal, id}) {
return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color: "green"}} style={({pressed}) =>pressed && styles.pressedItem} onPress={() => onDeleteGoal(id)}>
            <Text style={styles.goalText}>{text}</Text>
        </Pressable>
    </View>
)
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 7,
        backgroundColor: "blue",
        margin: 10
      }
    ,

    goalText: {
      fontWeight: "bold",
      margin: 8,
      padding: 8,
      color: "white"
    },
    pressedItem: {
        opacity: 0.5
    }


});

