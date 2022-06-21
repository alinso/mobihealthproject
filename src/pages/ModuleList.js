import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";


class ModuleList extends React.Component {


    onSwipeRight() {
        this.props.navigation.navigate('SelectLanguage');
    }

    render() {
        return (
            <GestureRecognizer onSwipeRight={this.onSwipeRight} style={styles.appContainer}>

                <View style={styles.flexContainer}>
                    <View style={{flex: 1}}/>
                    <View style={{flexDirection: "column", flex: 4}}>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/module1-menu.png")}
                                />
                                <Text>Tıbbi Terimler</Text>
                            </View>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/body-menu.png")}
                                />
                                <Text>Vücudum</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.props.navigation.navigate("MedicineMenu")}>
                                    <Image style={styles.moduleListImage}
                                           source={require("../../assets/images/module/medicine-menu.png")}
                                    />
                                    <Text>İlaçlar</Text>
                            </TouchableOpacity>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/sickness-menu.png")}
                                />
                                <Text>Hastalıklar</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/firstaid-menu.png")}
                                />
                                <Text>İlk Yardım</Text>
                            </View>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/healthylife-menu.png")}
                                />
                                <Text>Sağlıklı Yaşam</Text>
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
