import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import SelectDropdown from 'react-native-select-dropdown';
import styles from "../Styles";
import GestureRecognizer from "react-native-swipe-gestures";
import Lang from "./LocalTitles";
import getLocalTitles from "../getLocalTitles";
import Storage from "../Storage";
import Progress from "../Progress";

const langs = ["Türkçe", "English", "Português", "Deutsche"];
let progress= new Progress();

class ModuleList extends React.Component {

    constructor() {
        super();
        this.state = {
            titles: null,
            currentLng: null,
            medicineProgress:0
        }
        this.updateLang = this.updateLang.bind(this);
        getLocalTitles(Lang, this);
        let self=this;

        Storage.getData("@medicine").then(function (medicineCurent){
            let medicineCurrentObj = JSON.parse(medicineCurent);
            let medicineCurrentArr=Object.keys(medicineCurrentObj).map((key) => medicineCurrentObj[key]);
            let res= (100*progress.getTotal(medicineCurrentArr))/progress.getTotal(progress.medicineLimit);
            self.setState({medicineProgress:Math.round(res)});
        });
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
                                <Text>{this.state.titles.medicine} {this.state.medicineProgress}</Text>
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
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex: 4}}>
                                <SelectDropdown
                                    defaultValue={defaultLang}
                                    data={langs}
                                    onSelect={(selectedItem, index) => {
                                        this.updateLang(index);
                                    }}
                                />
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
