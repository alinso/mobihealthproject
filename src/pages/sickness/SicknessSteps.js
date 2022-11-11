import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import getLocalContent from "../../getLocalContent";
import Images from "../../Images";
import HtmlView from "react-native-htmlview";
import ModuleProgressTracker from "../../ModuleProgressTracker";
import ModuleInfo from "./content/ModuleInfo";
import Bowell from "./content/Bowell";
import Cancer from "./content/Cancer";
import CancerTypes from "./content/CancerTypes";
import Cardiovaskuler from "./content/Cardiovaskuler";
import ChronicDisease from "./content/ChronicDisease";
import Diabetics from "./content/Diabetics";
import Digestive from "./content/Digestive";
import Hepatisis from "./content/Hepatisis";
import Muscular from "./content/Muscular";
import RespiratorySystem from "./content/RespiratorySystem";
import SicknessFactors from "./content/SicknessFactors";
import STD from "./content/STD";
import Zootonic from "./content/Zootonic";

let progress =new ModuleProgressTracker();

class HealthyLifeSteps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            localContents: null,
            title: null,
            content: [],
            currentStep: 0,
        }

        this.titleIndex=0;
        this.image = null;
        let self = this;
        this.setContent = this.setContent.bind(this);
        this.onSwipeLeft = this.onSwipeLeft.bind(this);
        this.onSwipeRight = this.onSwipeRight.bind(this);


        getLocalTitles(LocalTitles, this).then(function () {
            setTimeout(function () {
                self.setContent(self.props.navigation.state.params.item);
            }, 500)
        });
    }

    onSwipeLeft() {
        if (this.state.currentStep == (this.state.content.length - 1)) {
            return;
        }
        let newCurrentStep = this.state.currentStep + 1;
        this.setState({currentStep: newCurrentStep});
        progress.proceed("@sickness",this.titleIndex,newCurrentStep+1);
    }

    onSwipeRight() {
        if (this.state.currentStep == 0) {
            this.props.navigation.push('SicknessMenu');
            return;
        }
        let newCurrentStep = this.state.currentStep - 1;
        this.setState({currentStep: newCurrentStep});
    }

    setContent(link) {
        let stepsTitle;
        if (link === "ModuleInfo") {
            getLocalContent(ModuleInfo, this);
            this.image = Images.module.sickness.infoPic;
            stepsTitle = this.state.titles.info;
            this.titleIndex=0;
        }else if (link === "Bowell") {
            getLocalContent(Bowell, this);
            this.image = Images.module.sickness.bowellPic;
            stepsTitle = this.state.titles.bowell;
            this.titleIndex=1;
        }else if (link === "Cancer") {
            getLocalContent(Cancer, this);
            this.image = Images.module.sickness.cancerPic;
            stepsTitle = this.state.titles.cancer;
            this.titleIndex=2;
        }else if (link === "CancerTypes"){
            getLocalContent(CancerTypes, this);
            this.image = Images.module.sickness.cancerTypesPic;
            stepsTitle = this.state.titles.cancerTypes;
            this.titleIndex=3;
        }else if (link === "CardioVaskuler"){
            getLocalContent(Cardiovaskuler, this);
            this.image = Images.module.sickness.cardioVaskulerPic;
            stepsTitle = this.state.titles.cardioVaskuler;
            this.titleIndex=4;
        }else if (link === "ChronicDisease"){
            getLocalContent(ChronicDisease, this);
            this.image = Images.module.sickness.chronicPic;
            stepsTitle = this.state.titles.chronic;
            this.titleIndex=5;
        }else if (link === "Diabetics"){
            getLocalContent(Diabetics, this);
            this.image = Images.module.sickness.diabeticsPic;
            stepsTitle = this.state.titles.diabetics;
            this.titleIndex=6;
        }else if (link === "Digestive"){
            getLocalContent(Digestive, this);
            this.image = Images.module.sickness.digestivePic;
            stepsTitle = this.state.titles.digestive;
            this.titleIndex=7;
        }else if (link === "Hepatisis"){
            getLocalContent(Hepatisis, this);
            this.image = Images.module.sickness.hepatisisPic;
            stepsTitle = this.state.titles.hepatisis;
            this.titleIndex=8;
        }else if (link === "Muscular"){
            getLocalContent(Muscular, this);
            this.image = Images.module.sickness.muscularPic;
            stepsTitle = this.state.titles.muscular;
            this.titleIndex=9;
        }else if (link === "RespiratorySystem"){
            getLocalContent(RespiratorySystem, this);
            this.image = Images.module.sickness.respiratorySystemPic;
            stepsTitle = this.state.titles.respiratorySystem;
            this.titleIndex=10;
        }else if (link === "SicknessFactors"){
            getLocalContent(SicknessFactors, this);
            this.image = Images.module.sickness.sicknessFactorsPic;
            stepsTitle = this.state.titles.sicknessFactors;
            this.titleIndex=11;
        }else if (link === "STD"){
            getLocalContent(STD, this);
            this.image = Images.module.sickness.STDPic;
            stepsTitle = this.state.titles.STD;
            this.titleIndex=12;
        }else if (link === "Zootonic"){
            getLocalContent(Zootonic, this);
            this.image = Images.module.sickness.zootonicPic;
            stepsTitle = this.state.titles.zootonic;
            this.titleIndex=13;
        }

        console.log(this.state.currentStep+1);
        progress.proceed("@sickness",this.titleIndex,this.state.currentStep+1);
        this.setState({title: stepsTitle})
    }


    render() {
        if (this.state.titles == null || this.state.title==null)
            return null;
        if (this.state.content == null)
            return null;

        let pagerWidth = 0;

        if (this.state.content.length > 1)
            pagerWidth = 90 * ((this.state.currentStep + 1) / this.state.content.length);

        return (
            <ScrollView>
                <GestureRecognizer
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    style={styles.appContainer}
                >
                    <View style={styles.flexContainer}>
                        <View style={{flex: 6}}>
                            <Text style={styles.stepTitle}>{this.state.title}</Text>
                            <Image style={styles.stepPic} source={this.image}/>
                            <View style={{
                                width: pagerWidth + "%",
                                height: "1%",
                                backgroundColor: "orange",
                                alignSelf: "flex-start",
                                marginLeft: "5%",
                                marginBottom:"5%"
                            }}></View>
                            <HtmlView style={styles.stepText}
                                      value={this.state.content[this.state.currentStep]}></HtmlView>
                        </View>
                    </View>

                </GestureRecognizer>
                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </ScrollView>
        );
    }
}

export default withNavigation(HealthyLifeSteps);
