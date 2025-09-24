import { TextInput, Text, View, Button } from "react-native";
import { styles } from "./style";

export default function Form(){
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura: </Text>
                <TextInput style={styles.input}placeholder="Ex: 1.75" /*Tipo do teclado que deve aparecer*/keyboardType="numeric"/>
                <Text style ={styles.formLabel}>Peso: </Text>
                <TextInput  style = {styles.input} placeholder="Ex: 75.4" /*Tipo do teclado que deve aparecer*/keyboardType="numeric"/>
                <Button title="Calcular" onPress={() => {}}/>
            </View>
        </View>
    );
}