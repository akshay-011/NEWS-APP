import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NewsView = (props) => {
    let newsHead = String(props.title)
    if(newsHead.length > 30){
        [newsHead] = newsHead.split(/:/)
    }
    newsHead = newsHead.replace(/^‘|’|'|'$/g, '');
    const dateString = props["published date"];
    const dateObj = new Date(dateString);

    const ISTOptions = { timeZone: "Asia/Kolkata" };
    const pDate = dateObj.toLocaleString("en-IN", ISTOptions);
  return (
    <View style={{
        borderColor:'white',
        borderWidth:1,
        height:350,
        padding:3,
        alignItems:'baseline',
    }} >
        <View>
            <Text style={styles.newsTitleHead} >{newsHead}</Text>
        </View>
        <View style={{
            flex:1,
            justifyContent:'space-between',
            marginTop:7
        }} >
            <Text style={styles.desc} >{String(props.description).replace(/^‘|’|'|'$/g, '')}</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                }} >
                    <Text style={styles.pdate} > 
                       {props.publisher.title} 
                    </Text>

                    <Text style={styles.pdate} >{pDate}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    newsTitleHead : {
        fontSize:23,
        fontWeight:'700',
        color:'white'
    },
    newsTitle : {
        fontSize:17,
        marginTop:5,
        color:'white'
    },
    desc : {
        color:'white',
        fontSize:15,
        fontWeight:'300'
    },
    pdate : {
        color:'white',
        fontSize: 8,
    }
})

export default NewsView
