import { StatusBar, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import { PlusCircleIcon, ClipboardIcon } from "react-native-heroicons/outline";
import { styles } from "../assets/styles/app";
import Task from "../components/Task";

interface Task {
    content: string;
    done: boolean;
}

export default function App() {
    const inputRef = useRef<TextInput>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    function handleAddTask() {
        if (newTask === "") return;
        setTasks([...tasks, { content: newTask, done: false }]);
        setNewTask("");
        inputRef.current?.clear();
    }

    function handleDone(index: number) {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    }

    function handleDelete(index: number) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.title}>
                <Text style={styles.task}>Task</Text>
                <Text style={styles.on}>on</Text>
                <Text style={styles.hand}>Hand</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={inputRef}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={"#808080"}
                        style={styles.textInput}
                        onChangeText={(text) => setNewTask(text)}
                        keyboardAppearance="dark"
                    />
                    <TouchableOpacity style={styles.plusIcon} onPress={handleAddTask}>
                        <PlusCircleIcon color="#F2F2F2" />
                    </TouchableOpacity>
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
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <Task
                            key={index}
                            content={task.content}
                            done={task.done}
                            handleDone={() => handleDone(index)}
                            handleDelete={() => handleDelete(index)}
                        />
                    ))
                ) : (
                    <View style={styles.noTasks}>
                        <ClipboardIcon color="#333" size={69} />
                        <Text style={styles.noTasksTextBold}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.noTasksText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}
