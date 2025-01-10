import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        flex: 1,
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#0D0D0D",
        width: "100%",
        padding: 60,
    },
    task: {
        color: "#5E60CE",
        fontSize: 32,
        fontWeight: "bold",
    },
    on: {
        color: "#4EA8DE",
        fontSize: 32,
        fontWeight: "bold",
    },
    hand: {
        color: "#5E60CE",
        fontSize: 32,
        fontWeight: "bold",
    },
    inputContainer: {
        flexDirection: "row",
    },
    plusIcon: {
        top: -27,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E6F9F",
        width: 52,
        height: 52,
        borderRadius: 5,
    },
    textInput: {
        top: -27,
        backgroundColor: "#262626",
        borderRadius: 5,
        padding: 21,
        marginRight: 10,
        height: 54,
        width: "70%",
    }
});
