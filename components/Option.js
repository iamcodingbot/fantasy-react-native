import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Option = props => {
    return(
        <View>
            <View style = {Styles.option}>
                <Text>{props.optionText}</Text>
                <Text>{props.counts}</Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    option: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'space-between'
    }
});

export default Option;