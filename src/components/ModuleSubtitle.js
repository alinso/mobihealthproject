import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import styles from "../Styles";
import {withNavigation} from 'react-navigation';

function ModuleSubtitle(props) {
    let {imgSource}= props;

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.href, {item : props.navParam})} style={styles.moduleListItem}>
            <Image source={imgSource} style={styles.moduleStepImage}/>
            <Text style={styles.moduleSteptitle}>{props.title}</Text>
        </TouchableOpacity>
    );

}

export default withNavigation(ModuleSubtitle);
