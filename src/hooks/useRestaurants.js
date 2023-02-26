import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    })

    const searchRestaurants = async (term) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })
        try {
            console.log(term.term)
            const response = await yelp.get('/search', {
                params: {
                    limit: 15,
                    term: term,
                    location: "Caserta"
                },
            });
            setResults({
                data: response.data.businesses,
                loading: false,
                error: null
            })
        } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: "Qualcosa è andato storto :(",
            })
        }
    };
    return [results, searchRestaurants]
};