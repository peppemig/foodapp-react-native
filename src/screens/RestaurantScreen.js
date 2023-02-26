import { useEffect } from "react";
import { Text, View, ScrollView, FlatList, Image, Dimensions, ActivityIndicator, StyleSheet, ImageBackground, ImageBackgroundBase, TouchableOpacity, Linking } from "react-native";
import useSingleRestaurant from "../hooks/useSingleRestaurant";
import {FontAwesome} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'

export default function RestaurantScreen({navigation}){
    const [{data, loading, error}, searchSingleRestaurant] = useSingleRestaurant();
    const id = navigation.getParam("id")

    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round(dimensions.width * 9)/16

    const callNumber = (number) => {
        Linking.openURL(`tel:${number}`);
      };

    useEffect(() => {
        searchSingleRestaurant(id);
    }, []);


    if(loading) return <ActivityIndicator size="large" marginVertical={30} />;

    if(error) return <Text>{error}</Text>;

    if(data) return (
        
        <ScrollView>
            <View style={styles.textTopContainer}>
                <Text style={styles.textTop}>{data.name}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={{uri: data.photos[0]}} style={styles.image} />
            </View>

            <View style={styles.infoContainerOne}>
                <FontAwesome name="map-marker" size={25} style={{paddingRight: 10}}/>
                <Text style={{fontSize: 15}}>{data.location.city}, {data.location.address1}</Text>
            </View>

            <View style={styles.infoContainerOne}>
                <FontAwesome name="star" size={25} style={{paddingRight: 10, color: 'gold'}}/>
                <Text style={{fontSize: 15}}>{data.rating} - {data.review_count} recensioni</Text>
            </View>
            

            {data.is_closed ?
            <View style={{marginLeft: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 30, width: 100, backgroundColor: 'red', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>CHIUSO</Text>
                </View>
            </View>
            :
            <View style={{marginLeft: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 30, width: 100, backgroundColor: 'green', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>APERTO</Text>
                </View>
            </View>
            }


            <TouchableOpacity onPress={() => callNumber(data.phone)}>
            <Animatable.View animation="pulse" easing={"ease-in-out"} iterationCount="infinite">
                <View style={styles.button}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', paddingRight: 10}}>Ordina ora</Text>
                    <FontAwesome name="phone-square" size={25} style={{color: 'white'}}/>
                </View>
            </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View>
                <View style={styles.button2}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', paddingRight: 10}}>Sfoglia il menu</Text>
                    <FontAwesome name="cutlery" size={25} style={{color: 'white'}}/>
                </View>
            </View>
            </TouchableOpacity>

            <View style={{flex: 1, height: 3, backgroundColor: 'black', marginLeft: 25, marginRight: 25, marginTop: 20, marginBottom: 20, borderRadius: 20}}></View>

            <View style={styles.textTopContainer}>
                <Text style={styles.textGallery}>Galleria</Text>
            </View>

            <View style={{marginTop: 20}}>
                <Image source={{ uri: data.photos[0] }} style={{flex: 1,height: imageHeight, borderRadius: 20, marginBottom: 10, marginLeft: 10, marginRight: 10}} />
                <Image source={{ uri: data.photos[1] }} style={{flex: 1,height: imageHeight, borderRadius: 20, marginBottom: 10, marginLeft: 10, marginRight: 10}} />
                <Image source={{ uri: data.photos[2] }} style={{flex: 1,height: imageHeight, borderRadius: 20, marginBottom: 10, marginLeft: 10, marginRight: 10}} />
            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    textTop: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textGallery: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textTopContainer: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: 20,
        flex: 1,
        height: 250,
        backgroundColor: 'red',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20
    },
    infoContainerOne: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'black', 
        height: 50, 
        marginLeft: 30, 
        marginRight: 30, 
        marginTop: 20, 
        borderRadius: 20
    },
    button2: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: "rgb(241,186,87)", 
        height: 50, 
        marginLeft: 50, 
        marginRight: 50, 
        marginTop: 10, 
        borderRadius: 20
    }
})