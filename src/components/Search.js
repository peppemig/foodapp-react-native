import { View, TextInput, StyleSheet, Text} from "react-native"
import {FontAwesome} from "@expo/vector-icons"
import {elevation} from "../common/styles"
import {useState} from "react"

export default function Search({setTerm, categories}){

    const commonCategories = categories;

    const [input, setInput] = useState("")

    //const handleEndEditing = () => {
    //    if(!input) return
    //    setTerm(input)
    //    setInput("")
    //}

    const handleEndEditing = () => {
        if (!input) return;
        // Extract all the names from the categories array

        const category = commonCategories.find(
            (cat) => cat.name.toLowerCase().includes(input.toLowerCase())
          );
      
          if (category) {
            setTerm(category.name);
          }else{
            setTerm(input);
          }
      
          setInput("");
        };

    return(
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            <TextInput 
                style={styles.input} 
                placeholder="Cerca qui!"
                value={input}
                onChangeText={(text) => {setInput(text)}}
                onEndEditing={handleEndEditing}
                //onSubmitEditing={handleEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    elevation,
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 40,
    },
    input: {
        fontSize: 20,
        marginLeft: 10
    }
})