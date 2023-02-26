import { useEffect } from "react";
import { Text, View, ScrollView, FlatList, Image, Dimensions, ActivityIndicator } from "react-native";
import useSingleRestaurant from "../hooks/useSingleRestaurant";

export default function RestaurantScreen({navigation}){
    const [{data, loading, error}, searchSingleRestaurant] = useSingleRestaurant();
    const id = navigation.getParam("id")

    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round(dimensions.width * 9)/16

    useEffect(() => {
        searchSingleRestaurant(id);
    }, []);

    if(loading) return <ActivityIndicator size="large" marginVertical={30} />;

    if(error) return <Text>{error}</Text>;

    //console.log(id)

    if(data) return (
        <ScrollView>
        <View>
            <Text>{data.name}</Text>
            <Image source={{ uri: data.photos[0] }} style={{height: imageHeight, width: imageWidth}} />
            <Image source={{ uri: data.photos[1] }} style={{height: imageHeight, width: imageWidth}} />
            <Image source={{ uri: data.photos[2] }} style={{height: imageHeight, width: imageWidth}} />
        </View>
        </ScrollView>
    )

}