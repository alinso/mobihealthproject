import React from 'react';
import {Button, Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";
import Lang from "./LocalTitles";
import getLocalTitles from "../getLocalTitles";
import Storage from "../Storage";
import ModuleProgress from "../components/ModuleProgress";
import ModuleProgressTracker from "../ModuleProgressTracker";

const langs = ["Türkçe", "English", "Português", "Deutsche"];
let progress = new ModuleProgressTracker();

class ModuleList extends React.Component {

    constructor() {
        super();
        this.state = {
            titles: null,
            currentLng: null,
        }
        this.updateLang = this.updateLang.bind(this);
        getLocalTitles(Lang, this);

    }

    updateLang(index) {
        let selectedLang;
        if (index == 0)
            selectedLang = "turkish";
        else if (index == 1)
            selectedLang = "english";
        else if (index == 2)
            selectedLang = "portugal";
        else if (index == 3)
            selectedLang = "german"

        let self = this;

        Storage.save("@lang", selectedLang).then(function () {
            self.setState({titles: Lang[index]});
        });
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('Welcome');
    }

    checkAndNavigate(moduleName) {
        var navName;

        if (moduleName === "@medicine")
            navName = "MedicineMenu";
        else if (moduleName === "@firstAid")
            navName = "FirstaidMenu";
        else if (moduleName === "@healthyLife")
            navName = "HealthyLifeMenu";
        else if (moduleName === "@body")
            navName = "bodyMenu";
        else if (moduleName === "@sickness")
            navName = "sicknessMenu";


        if (progress.isAllowed(moduleName))
            this.props.navigation.navigate(navName);
        else
            alert(this.state.titles.lockWarning);

    }

    render() {

        if (this.state.titles == null)
            return null;
        if (this.state.currentLng == null)
            return null;

        let defaultLang;
        if (this.state.currentLng == "english")
            defaultLang = "English";
        else if (this.state.currentLng == "turkish")
            defaultLang = "Türkçe";
        else if (this.state.currentLng == "german")
            defaultLang = "Deutsch";
        else if (this.state.currentLng == "portugal")
            defaultLang = "Português";


        return (
            <GestureRecognizer onSwipeRight={(state) => this.onSwipeRight(state)} style={styles.appContainer}>

                <View style={styles.flexContainer}>
                    <View style={{flex: 1}}/>
                    <View style={{flexDirection: "column", flex: 4}}>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() =>this.checkAndNavigate("@medicine")}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/medicine-menu.png")}
                                />
                                <Text>{this.state.titles.medicine}</Text>
                                <ModuleProgress moduleName={"@medicine"}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@firstAid")}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/passive/firstaid-menu.png")}
                                />
                                <Text>{this.state.titles.firstaid}</Text>
                                <ModuleProgress moduleName={"@firstAid"}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/passive/module1-menu.png")}
                                />
                                <Text>{this.state.titles.module1}</Text>
                                <ModuleProgress moduleName={""}/>

                            </View>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@sickness")}>

                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/passive/sickness-menu.png")}
                                />
                                <Text>{this.state.titles.sickness}</Text>
                                <ModuleProgress moduleName={"@sickness"}/>

                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: "row"}}>

                            <View style={styles.moduleListItem}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/passive/body-menu.png")}
                                />
                                <Text>{this.state.titles.body}</Text>
                                <ModuleProgress moduleName={"@body"}/>

                            </View>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.props.navigation.navigate("HealthyLifeMenu")}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/passive/healthylife-menu.png")}
                                />
                                <Text>{this.state.titles.healthyLife}</Text>
                                <ModuleProgress moduleName={"@healthyLife"}/>
                            </TouchableOpacity>

                        </View>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 2, alignItems: "center", marginTop: "12%", marginBottom: "-35%"}}>
                                {/*<SelectDropdown*/}
                                {/*    buttonStyle={{width:"50%",height:"20%",backgroundColor:"#28678F",borderRadius:8}}*/}
                                {/*    buttonTextStyle={{fontSize:12,color:"white"}}*/}
                                {/*    rowStyle={{backgroundColor:"#28678F",opacity:0.6}}*/}
                                {/*    rowTextStyle={{color:"white"}}*/}
                                {/*    defaultValue={defaultLang}*/}
                                {/*    data={langs}*/}
                                {/*    onSelect={(selectedItem, index) => {*/}
                                {/*        this.updateLang(index);*/}
                                {/*    }}*/}
                                {/*/>*/}

                                <Pressable style={{
                                    marginTop: "5%",
                                    backgroundColor: "#28678F",
                                    padding: "3%",
                                    borderRadius: 3
                                }}
                                           onPress={() => this.props.navigation.navigate("SelectLanguage")}>
                                    <Text style={{color: "white"}}>{defaultLang}</Text>
                                </Pressable>
                                <Text style={{marginTop: "20%", opacity: 0.4}}
                                      onPress={() => this.props.navigation.navigate("About")}>{this.state.titles.about}</Text>


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
