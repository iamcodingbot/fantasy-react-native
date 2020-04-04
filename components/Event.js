import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Event = props => {
    return (
        <View style = {styles.event}> 
            <Text style = {styles.title}>Recent and upcoming events</Text>
            <View style = {styles.inputContainer}>
                <View style = {styles.desc}>
                    <Text>IND vs ZIM, 15 August 2020</Text>
                </View>
                <View style = {styles.option}>
                    <Text>IND</Text>
                    <Text>19.1k votes</Text>
                </View>    
                <View style = {styles.option}>
                    <Text>ZIM</Text>
                    <Text>1.1k votes</Text>
                </View>  
                <View style = {styles.otherdisplay}>
                    <Text style = {styles.textdisplay}>Total rewards - 1 million tokens</Text>
                </View> 
                <View style = {styles.otherdisplay}>
                    <Text style = {styles.textdisplay}>Voting closes at 14 August 2020, 1220 PM IST</Text>
                </View> 
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    event: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    desc: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    inputContainer: {
        width: 350,
        maxWidth: '90%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: '',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10

    },
    option: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 20,
        paddingTop: 20,
    },
    otherdisplay: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    textdisplay: {
        fontSize: 10,
        color: 'grey'
    }
});

export default Event;


