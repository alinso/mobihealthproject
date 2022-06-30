import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";
import Lang from "./LocalTitles";
import getLocalTitles from "../getLocalTitles";

class ModuleList extends React.Component {

    constructor() {
        super();
         this.state = {
            titles: null
        }
        getLocalTitles(Lang, this);
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('SelectLanguage');
    }

    render() {

        if (this.state.titles == null)
            return null;

        return (
            <GestureRecognizer onSwipeRight={(state) => this.onSwipeRight(state)} style={styles.appContainer}>

                <View style={styles.flexContainer}>
                    <View style={{flex: 1}}/>
                    <View style={{flexDirection: "column", flex: 4}}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/module1-menu.png")}
                                />
                                <Text>{this.state.titles.module1}</Text>
                            </View>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/body-menu.png")}
                                />
                                <Text>{this.state.titles.body}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.props.navigation.navigate("MedicineMenu")}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/medicine-menu.png")}
                                />
                                <Text>{this.state.titles.medicine}</Text>
                            </TouchableOpacity>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/sickness-menu.png")}
                                />
                                <Text>{this.state.titles.sickness}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/firstaid-menu.png")}
                                />
                                <Text>{this.state.titles.firstaid}</Text>
                            </View>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/healthylife-menu.png")}
                                />
                                <Text>{this.state.titles.health}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                <Image source={require("../../assets/icon.png")} style={styles.footer}/>
            </GestureRecognizer>

        );
    }
}

export default withNavigation(ModuleList);
