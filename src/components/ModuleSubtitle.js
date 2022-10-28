import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import styles from "../Styles";
import {withNavigation} from 'react-navigation';
import ModuleProgressTracker from "../ModuleProgressTracker";

let progress = new ModuleProgressTracker();
function ModuleSubtitle(props) {
    let {imgSource} = props;


    return (
        <TouchableOpacity onPress={() => handlePress(props.moduleName, props.titleIndex)}
                          style={styles.titleListItem}>
            <Image source={imgSource} style={styles.moduleStepImage}/>
            <Text style={styles.moduleSteptitle}>{props.title}</Text>
        </TouchableOpacity>
    );


    function handlePress(moduleName, titleIndex) {
            progress.proceed(moduleName, titleIndex);
            props.navigation.navigate(props.href, {item: props.navParam});
    }

}

export default withNavigation(ModuleSubtitle);
