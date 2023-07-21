import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";
import Lang from "./LocalTitles";
import getLocalTitles from "../getLocalTitles";
import Storage from "../Storage";
import ModuleProgress from "../components/ModuleProgress";
import {withNavigation} from 'react-navigation';


class ModuleList extends React.Component {

    constructor() {
        super();

        this.state = {
            titles: null,
            currentLng: null,
            update: false,
            medicineActivePassive: null,
            sicknessActivePassive: null,
            firstAidActivePassive: null,
            healthyLifeActivePassive: null,
            certificateActivePassive:null
        }
        this.isActive = this.isActive.bind(this);
        this.updateLang = this.updateLang.bind(this);
        getLocalTitles(Lang, this);

        this.isActive("@medicine")
        this.isActive("@sickness")
        this.isActive("@firstAid")
        this.isActive("@healthyLife")
        this.isActive("Certificate")


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


    isActive(moduleName) {
        let prevModule;

        if (moduleName === "@body") {
            this.props.navigation.navigate(navName);
            return;
        } else if (moduleName === "@medicine") {
            prevModule = "@body";
        } else if (moduleName === "@sickness") {
            prevModule = "@medicine";
        } else if (moduleName === "@firstAid") {
            prevModule = "@sickness";
        } else if (moduleName === "@healthyLife") {
            prevModule = "@firstAid";
        } else if (moduleName === "Certificate") {
            prevModule = "@healthyLife";
        }

        let self = this;
        Storage.getData(prevModule).then(function (resx) {
            let res = true;
            if (resx === null) {
                res = false;
            } else {
                let moduleArray = JSON.parse(resx);
                for (let i = 0; i < moduleArray.length; i++) {
                    if (moduleArray[i] === 0) {
                        res = false
                        break;
                    }
                }
            }

            if (res && moduleName === "@medicine") {
                self.setState({medicineActivePassive: require("../../assets/images/module/medicine-menu.png")})
            } else if (!res && moduleName === "@medicine") {
                self.setState({medicineActivePassive: require("../../assets/images/module/passive/medicine-menu.png")})
            } else if (res && moduleName === "@sickness") {
                self.setState({sicknessActivePassive: require("../../assets/images/module/sickness-menu.png")})
            } else if (!res && moduleName === "@sickness") {
                self.setState({sicknessActivePassive: require("../../assets/images/module/passive/sickness-menu.png")})
            } else if (res && moduleName === "@firstAid") {
                self.setState({firstAidActivePassive: require("../../assets/images/module/firstaid-menu.png")})
            } else if (!res && moduleName === "@firstAid") {
                self.setState({firstAidActivePassive: require("../../assets/images/module/passive/firstaid-menu.png")})
            } else if (res && moduleName === "@healthyLife") {
                self.setState({healthyLifeActivePassive: require("../../assets/images/module/healthylife-menu.png")})
            } else if (!res && moduleName === "@healthyLife") {
                self.setState({healthyLifeActivePassive: require("../../assets/images/module/passive/healthylife-menu.png")})
            }else if (!res && moduleName === "Certificate") {
                self.setState({certificateActivePassive: require("../../assets/images/module/passive/certificate-menu.png")})
            }else if (res && moduleName === "Certificate") {
                self.setState({certificateActivePassive: require("../../assets/images/module/certificate-menu.png")})
            }
        });

    }

    checkAndNavigate(moduleName) {
        let navName;


        if (moduleName === "@medicine")
            navName = "MedicineMenu";
        else if (moduleName === "@firstAid")
            navName = "FirstaidMenu";
        else if (moduleName === "@healthyLife")
            navName = "HealthyLifeMenu";
        else if (moduleName === "@body")
            navName = "BodyMenu";
        else if (moduleName === "@sickness")
            navName = "SicknessMenu";
        else if (moduleName === "Certificate")
            navName = "Certificate";


        let prevModule;
        if (moduleName === "@body") {
            this.props.navigation.navigate(navName);
            return;
        } else if (moduleName === "@medicine") {
            prevModule = "@body";
        } else if (moduleName === "@sickness") {
            prevModule = "@medicine";
        } else if (moduleName === "@firstAid") {
            prevModule = "@sickness";
        } else if (moduleName === "@healthyLife") {
            prevModule = "@firstAid";
        } else if (moduleName === "Certificate") {
            prevModule = "@healthyLife";
        }


        let self = this;

        Storage.getData(prevModule).then(function (resx) {
            let result = true;
            if (resx === null) {
                result = false
            } else {
                let moduleArray = JSON.parse(resx);
                for (let i = 0; i < moduleArray.length; i++) {
                    if (moduleArray[i] === 0) {
                        result = false;
                        break;
                    }
                }
            }

            if (result) //todo: remove true
                self.props.navigation.navigate(navName);
            else
                alert(self.state.titles.lockWarning);
        });
    }


    render() {

        let self = this;
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

        const bodyActivePassive = require("../../assets/images/module/body-menu.png")


        return (
            <GestureRecognizer onSwipeRight={(state) => this.onSwipeRight(state)}
                               style={styles.moduleListContainer}>

                <View style={styles.flexContainer}>

                    <View style={{flexDirection: "column", flex: 4}}>

                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@body")}>
                                <Image style={styles.moduleListImage}
                                       source={bodyActivePassive}
                                />
                                <Text>{this.state.titles.body}</Text>
                                <ModuleProgress moduleName={"@body"}/>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@medicine")}>
                                <Image style={styles.moduleListImage}
                                       source={this.state.medicineActivePassive}
                                />
                                <Text>{this.state.titles.medicine}</Text>
                                <ModuleProgress moduleName={"@medicine"}/>
                            </TouchableOpacity>

                        </View>


                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@sickness")}>

                                <Image style={styles.moduleListImage}
                                       source={this.state.sicknessActivePassive}
                                />
                                <Text>{this.state.titles.sickness}</Text>
                                <ModuleProgress moduleName={"@sickness"}/>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@firstAid")}>
                                <Image style={styles.moduleListImage}
                                       source={this.state.firstAidActivePassive}
                                />
                                <Text>{this.state.titles.firstaid}</Text>
                                <ModuleProgress moduleName={"@firstAid"}/>
                            </TouchableOpacity>
                        </View>


                        <View style={{flexDirection: "row"}}>

                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("@healthyLife")}>
                                <Image style={styles.moduleListImage}
                                       source={this.state.healthyLifeActivePassive}
                                />
                                <Text>{this.state.titles.healthyLife}</Text>
                                <ModuleProgress moduleName={"@healthyLife"}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.props.navigation.navigate("Search")}>
                                <Image style={styles.moduleListImage}
                                       source={require("../../assets/images/module/module1-menu.png")}
                                />
                                <Text>{this.state.titles.module1}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={styles.moduleListItem}
                                              onPress={() => this.checkAndNavigate("Certificate")}>
                                <Image style={styles.moduleListImage2}
                                       source={this.state.certificateActivePassive}
                                />
                            </TouchableOpacity>

                        </View>


                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 2, alignItems: "center", marginTop: "20%", marginBottom: "35%"}}>
<TouchableOpacity onPress={() =>this.props.navigation.navigate("SelectLanguage")}>
                                <View style={{
                                    backgroundColor: "orange",
                                    padding: "2%",
                                    borderRadius: 3,
                                    zIndex:40
                                }}
                               >
                                    <Text style={{color: "white"}}>{defaultLang}</Text>
                                </View></TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>
                                <Text style={{marginTop: "12%", opacity: 0.4}}
                                    >{this.state.titles.about}
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                </View>
                <Image source={require("../../assets/icon.png")} style={styles.footer}/>
            </GestureRecognizer>);
    }
}


export default withNavigation(ModuleList);
