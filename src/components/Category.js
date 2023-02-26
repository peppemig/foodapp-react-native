import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {elevation} from "../common/styles"


export default function CategoryItem({name, imageUrl, index, active, handlePress}){
    //console.log(name)
    return(
        <TouchableOpacity onPress={handlePress}>
        <View style={[
                styles.container, 
                styles.elevation, 
                index === 0 ? {marginLeft: 25} : {marginLeft: 15},
                active ? {backgroundColor: "rgb(241,186,87)"} : {backgroundColor: "#e5e5e5"}
            ]}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image}/>
            </View>
            <Text style={styles.header}>{name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //elevation,
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "#e5e5e5",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#e5e5e5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    },
    header: {
        fontWeight: "bold"
    }
})