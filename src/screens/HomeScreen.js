import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search';
import Restaurants from '../components/Restaurants';
import { useState } from "react"

export default function HomeScreen(){

    const [term, setTerm] = useState("Burger");

    const commonCategories = [
      {
        name: "Burger",
        imageUrl: require('../assets/images/burger.png')
      },
      {
        name: "Pizza",
        imageUrl: require('../assets/images/pizza.png')
      },
      {
        name: "Desserts",
        imageUrl: require('../assets/images/cake.png')
      },
      {
        name: "Drinks",
        imageUrl: require('../assets/images/smoothies.png')
      },
      {
        name: "Carne",
        imageUrl: require('../assets/images/steak.png')
      },
      {
        name: "Pasta",
        imageUrl: require('../assets/images/pasta.png')
      },
    ];

    return (
      <View style={styles.container}>
        <Header />
        <Search setTerm={setTerm} categories={commonCategories}/>
        <Categories categories={commonCategories} setTerm={setTerm} term={term} />
        <Restaurants term={term} />
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(253,253,253)",
        marginTop: -50
    }
});