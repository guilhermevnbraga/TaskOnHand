import { View, Text, TouchableOpacity } from "react-native";
import { CheckIcon, TrashIcon } from "react-native-heroicons/outline";
import { styles } from "../assets/styles/task";

export default function Taks({
    content,
    done,
    handleDone,
    handleDelete,
}: {
    content: string;
    done: boolean;
    handleDone: () => void;
    handleDelete: () => void;
}) {
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={done ? styles.taskCheckDone : styles.taskCheck} onPress={handleDone}>
                {done ? <CheckIcon color="#F2F2F2" size={(15)} /> : null}
            </TouchableOpacity>
            <Text style={done ? styles.taskTextDone : styles.taskText}>{content}</Text>
            <TouchableOpacity onPress={handleDelete}>
                <TrashIcon color="#808080" />
            </TouchableOpacity>
        </View>
    );
}
