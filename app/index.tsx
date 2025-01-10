import { View, Text, TextInput } from "react-native";
import { styles } from "../assets/styles/app";
import { PlusCircleIcon } from "react-native-heroicons/outline";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.task}>Task</Text>
                <Text style={styles.on}>on</Text>
                <Text style={styles.hand}>Hand</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Adicione uma nova tarefa!"
                    placeholderTextColor={"#808080"}
                    style={styles.textInput}
                />
                <View style={styles.plusIcon}>
                    <PlusCircleIcon color="#F2F2F2" />
                </View>
            </View>
        </View>
    );
}
