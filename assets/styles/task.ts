import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        marginVertical: 5,
        backgroundColor: "#262626",
        borderRadius: 10,
        width: "100%",
    },
    taskCheck: {
        borderColor: "#4EA8DE",
        borderRadius: 50,
        borderWidth: 2,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    taskCheckDone: {
        backgroundColor: "#5E60CE",
        borderColor: "#5E60CE",
        borderRadius: 50,
        borderWidth: 2,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    taskText: {
        color: "#F2F2F2",
        fontSize: 18,
        maxWidth: "80%",
    },
    taskTextDone: {
        color: "#808080",
        fontSize: 18,
        textDecorationLine: "line-through",
        maxWidth: "80%",
    },
});
