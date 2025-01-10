import { View, Text, TextInput } from "react-native";
import { useState, useRef } from "react";
import { styles } from "../assets/styles/app";
import { PlusCircleIcon, ClipboardIcon } from "react-native-heroicons/outline";

interface Task {
    content: string;
    done: boolean;
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.task}>Task</Text>
                <Text style={styles.on}>on</Text>
                <Text style={styles.hand}>Hand</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={"#808080"}
                        style={styles.textInput}
                    />
                    <View style={styles.plusIcon}>
                        <PlusCircleIcon color="#F2F2F2" />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>Criadas</Text>
                        <Text style={styles.infoQuantity}>{tasks.length}</Text>
                    </View>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>Concluídas</Text>
                        <Text style={styles.infoQuantity}>
                            {tasks.filter((task) => task.done).length}
                        </Text>
                    </View>
                </View>
            </View>

            {tasks.length > 0 ? null: (
                <View style={styles.noTasks}>
                    <ClipboardIcon color="#333" size={69} />
                    <Text style={styles.noTasksTextBold}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.noTasksText}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            )}
        </View>
    );
}
