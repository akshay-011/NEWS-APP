import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import NewsView from "./NewsView";
import { API } from "./api"
import axios from "axios";

export default function MainView(props){
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    axios.get(API+'get_latest_news/')
    .then((res) => {
        setNews(res.data);
        setLoaded(true)
    })
    .catch((err) => {
        console.log("AxiosError Config:", err.config);
        console.log("AxiosError Message:", err.message);
    })
    }, [])
    if(!loaded){
        return(
            <View style={{
                paddingTop:10,
            }} >
                <Text style={{
                    justifyContent:'center',
                    alignItems:'center',
                    fontSize:28,
                    color:'white',
                    fontWeight:'900'
                }} >Loading</Text>
            </View> 
        )
    }
    return(
        <ScrollView>
            <View style={{
                paddingTop:10,
            }} >
                {
                    news.map((n, index) => {
                        return ( <NewsView key={index} {...n} /> )
                    })
                }
            </View>
        </ScrollView>
    )
}