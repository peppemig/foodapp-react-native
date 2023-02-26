import { StyleSheet, Text, ScrollView, View, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({term}){
    const [{data, loading, error}, searchRestaurants] = useRestaurants();

    useEffect(() => {
        searchRestaurants(term)
    }, [term]);

    console.log({data: data})
    console.log({loading})
    console.log({error})

    if(loading) return <ActivityIndicator size="large" marginVertical={30} />
    if(error) return (
        <View style={styles.container}>
            <Text style={styles.header}>{error}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>I risultati migliori</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({item}) => 
                    <RestaurantItem restaurant={item}/>
                }
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    },
});