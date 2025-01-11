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
        padding: 57,
        paddingBottom: 90,
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
    content: {
        paddingHorizontal: 18
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    plusIcon: {
        top: -29,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E6F9F",
        width: 57,
        height: 57,
        borderRadius: 5,
    },
    textInput: {
        top: -30,
        backgroundColor: "#262626",
        borderRadius: 5,
        paddingHorizontal: 21,
        marginRight: 5,
        height: 60,
        width: "75%",
        fontSize: 18,
        borderColor: "#0D0D0D",
        borderWidth: 1,
        flex: 1,
        color: "#F2F2F2",
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderColor: "#808080",
        borderBottomWidth: 0.5,
        paddingBottom: 30,
    },
    infoTextContainer: {
        flexDirection: "row",
        gap: 10,
    },
    infoText: {
        color: "#4EA8DE",
        fontSize: 18,
    },
    infoQuantity: {
        textAlign: "center",
        color: "#F2F2F2",
        fontSize: 18,
        borderRadius: 25,
        backgroundColor: "#333",
        width: 30,
    },
    noTasks: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 51,
    },
    noTasksText: {
        color: "#808080",
        fontSize: 16,
    },
    noTasksTextBold: {
        color: "#808080",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 18,
    }
});
