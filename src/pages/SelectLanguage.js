import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SelectLanguage extends React.Component {
    state = {
        myState: 'Lang Selection'
    }
    render() {
        return (
            <View>
                <Text> {this.state.myState} </Text>
            </View>
        );
    }
}

