import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import getLocalContent from "../../getLocalContent";
import Images from "../../Images";
import FirstaidInfo from "./content/FirstaidInfo";
import HtmlView from "react-native-htmlview";
import Fundamentals from "./content/Fundamentals";
import BasicApplications from "./content/BasicApplications";
import BasicIndikators from "./content/BasicIndicators";
import LifeKiss from "./content/LifeKiss";
import BasicLifeSupport from "./content/BasicLifeSupport";
import Bleed from "./content/Bleed";
import Amputation from "./content/Amputation";
import ForeignBodySting from "./content/ForeignBodySting";
import Choking from "./content/Choking";
import HeadInjury from "./content/HeadInjury";
import ChestInjury from "./content/ChestInjury";
import StomaInjury from "./content/StomaInjury";
import CrushInjury from "./content/CrushInjury";
import Drowning from "./content/Drowning";
import Poisoning from "./content/Poisoning";
import BrokenBone from "./content/BrokenBone";
import DetectionMethod from "./content/DetectionMethod";
import BugSting from "./content/BugSting";
import Bites from "./content/Bites";
import Burn from "./content/Burn";
import Freeze from "./content/Freeze";
import ForeignBody from "./content/ForeignBody";
import ChestPain from "./content/ChestPain";
import ModuleProgressTracker from "../../ModuleProgressTracker";

let progress =new ModuleProgressTracker();

class FirstaidSteps extends React.Component {
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
    }

    onSwipeRight() {
        if (this.state.currentStep == 0) {
            this.props.navigation.push('Firstaid');
            return;
        }
        let newCurrentStep = this.state.currentStep - 1;
        this.setState({currentStep: newCurrentStep});
    }

    setContent(link) {
        let stepsTitle;
        if (link === "FirstaidInfo") {
            getLocalContent(FirstaidInfo, this);
            this.image = Images.module.firstaid.infoPic;
            stepsTitle = this.state.titles.info;
        }else if (link === "Fundamentals") {
            getLocalContent(Fundamentals, this);
            this.image = Images.module.firstaid.fundamentalsPic;
            stepsTitle = this.state.titles.fundamentals;
        }else if (link === "BasicApplications") {
            getLocalContent(BasicApplications, this);
            this.image = Images.module.firstaid.basicapplicationsPic;
            stepsTitle = this.state.titles.basicApplications;
        }else if (link === "BasicIndicators") {
            getLocalContent(BasicIndikators, this);
            this.image = Images.module.firstaid.basicindicatorsPic;
            stepsTitle = this.state.titles.basicIndicators;
        }else if (link === "BasicLifeSupport") {
            getLocalContent(BasicLifeSupport, this);
            this.image = Images.module.firstaid.basiclifesupportPic;
            stepsTitle = this.state.titles.basicLifeSupport;
        }else if (link === "LifeKiss") {
            getLocalContent(LifeKiss, this);
            this.image = Images.module.firstaid.lifekissPic;
            stepsTitle = this.state.titles.lifeKiss;
        }else if (link === "Bleed") {
            getLocalContent(Bleed, this);
            this.image = Images.module.firstaid.bleedPic;
            stepsTitle = this.state.titles.bleed;
        }else if (link === "Amputation") {
            getLocalContent(Amputation, this);
            this.image = Images.module.firstaid.amputationPic;
            stepsTitle = this.state.titles.amputation;
        }else if (link === "ForeignBodySting") {
            getLocalContent(ForeignBodySting, this);
            this.image = Images.module.firstaid.foreignBodyStingPic;
            stepsTitle = this.state.titles.foreignBodySting;
        }else if (link === "Choking") {
            getLocalContent(Choking, this);
            this.image = Images.module.firstaid.chokingPic;
            stepsTitle = this.state.titles.choking;
        }
        else if (link === "HeadInjury") {
            getLocalContent(HeadInjury, this);
            this.image = Images.module.firstaid.headInjuryPic;
            stepsTitle = this.state.titles.headInjury;
        }else if (link === "ChestInjury") {
            getLocalContent(ChestInjury, this);
            this.image = Images.module.firstaid.chestInjuryPic;
            stepsTitle = this.state.titles.chestInjury;
        }
        else if (link === "StomaInjury") {
            getLocalContent(StomaInjury, this);
            this.image = Images.module.firstaid.stomaInjuryPic;
            stepsTitle = this.state.titles.stomaInjury;
        } else if (link === "CrushInjury") {
            getLocalContent(CrushInjury ,this);
            this.image = Images.module.firstaid.crushInjuryPic;
            stepsTitle = this.state.titles.crushIjnhury;
        }else if (link === "Drowning") {
            getLocalContent(Drowning ,this);
            this.image = Images.module.firstaid.drowningPic;
            stepsTitle = this.state.titles.drowning;
        }else if (link === "Poisoning") {
            getLocalContent(Poisoning ,this);
            this.image = Images.module.firstaid.poisoningPic;
            stepsTitle = this.state.titles.poisoning;
        }else if (link === "BrokenBone") {
            getLocalContent(BrokenBone ,this);
            this.image = Images.module.firstaid.brokenBonePic;
            stepsTitle = this.state.titles.brokenBone;
        }else if (link === "DetectionMethod") {
            getLocalContent(DetectionMethod ,this);
            this.image = Images.module.firstaid.detectionMethodPic;
            stepsTitle = this.state.titles.detectionMethod;
        }else if (link === "BugSting") {
            getLocalContent(BugSting ,this);
            this.image = Images.module.firstaid.bugStingPic;
            stepsTitle = this.state.titles.bugSting;
        }else if (link === "Bites") {
            getLocalContent(Bites ,this);
            this.image = Images.module.firstaid.bitesPic;
            stepsTitle = this.state.titles.bites;
        }else if (link === "Burn") {
            getLocalContent(Burn ,this);
            this.image = Images.module.firstaid.burnPic;
            stepsTitle = this.state.titles.burn;
        }else if (link === "Freeze") {
            getLocalContent(Freeze ,this);
            this.image = Images.module.firstaid.freezePic;
            stepsTitle = this.state.titles.freeze;
        }else if (link === "ForeignBody") {
            getLocalContent(ForeignBody ,this);
            this.image = Images.module.firstaid.foreignBodyPic;
            stepsTitle = this.state.titles.foreignBody;
        }else if (link === "ChestPain") {
            getLocalContent(ChestPain ,this);
            this.image = Images.module.firstaid.chestPainPic;
            stepsTitle = this.state.titles.chestPain;
        }

        console.log(this.state.currentStep+1);
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

export default withNavigation(FirstaidSteps);
