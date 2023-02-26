import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import {elevation} from "../common/styles"
import {FontAwesome} from "@expo/vector-icons"
import {withNavigation} from "react-navigation"

function RestaurantItem({restaurant, navigation }){

    let placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

    return (
        <TouchableOpacity onPress={(() => navigation.navigate("Restaurant", {id: restaurant.id}))} >

        <View style={[styles.elevation, styles.container]}>
            <Image style={styles.image} source={{uri: restaurant.image_url !== '' ? restaurant.image_url : placeholderImage}} />
            <View style={styles.infoContainer}>
                <Text style={styles.header} >{restaurant.name}</Text>
                <View style={styles.info}>
                    <Text style={styles.rating}>{restaurant.rating} <FontAwesome name="star" size={13} /></Text>
                    <Text style={styles.money}>{restaurant.price}</Text>
                </View>
            </View>
        </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //elevation,
    container: {
        backgroundColor: "#e5e5e5",
        height: 100,
        alignSelf: "stretch",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    },
    info: {
        flexDirection: "row",
    },
    rating: {
        marginRight: 20
    },
    money: {
        color: "black"
    }
})

export default withNavigation(RestaurantItem);