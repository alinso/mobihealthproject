import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ModuleList extends React.Component {
    state = {
        myState: 'Module List'
    }
    render() {
        return (
            <View>
                <Text> {this.state.myState} </Text>
            </View>
        );
    }
}

