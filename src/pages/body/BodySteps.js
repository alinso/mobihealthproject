import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import getLocalContent from "../../getLocalContent";
import Images from "../../Images";
import BodyInfo from "./content/BodyInfo";
import Fundamentals from "./content/Fundamentals";
import ModuleProgressTracker from "../../ModuleProgressTracker";
import Systems from "./content/Systems";
import BodyParts from "./content/BodyParts";
import Digest from "./content/Digest";
import Digest2 from "./content/Digest2";
import Circular from "./content/Circular";
import Motion from "./content/Motion";
import Organs from "./content/Organs";
import Respi from "./content/Respi";
import Structure from "./content/Structure";
import Urinary from "./content/Urinary";
import Urology from "./content/Urology";
import HtmlView from "react-native-htmlview";
import Senses from "./content/Senses";
let progress =new ModuleProgressTracker();


class BodySteps extends React.Component {
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
            this.props.navigation.push('BodyMenu');
            return;
        }
        let newCurrentStep = this.state.currentStep - 1;
        this.setState({currentStep: newCurrentStep});
    }

    setContent(link) {
        let stepsTitle;
        if (link === "BodyInfo") {
            getLocalContent(BodyInfo, this);
            this.image = Images.module.body.infoPic;
            stepsTitle = this.state.titles.info;
        }
        else if (link === "Fundamentals") {
            getLocalContent(Fundamentals, this);
            this.image = Images.module.body.fundamentalsPic;
            stepsTitle = this.state.titles.fundamentals;
        }else if (link === "Structure") {
            getLocalContent(Structure, this);
            this.image = Images.module.body.fundamentalsPic;
            stepsTitle = this.state.titles.structure;
        }else if (link === "BodyParts") {
            getLocalContent(BodyParts, this);
            this.image = Images.module.body.bodyPartsPic;
            stepsTitle = this.state.titles.bodyParts;
        }else if (link === "Organs") {
            getLocalContent(Organs, this);
            this.image = Images.module.body.organsPic;
            stepsTitle = this.state.titles.organs;
        } else if (link === "Systems") {
            getLocalContent(Systems, this);
            this.image = Images.module.body.systemsPic;
            stepsTitle = this.state.titles.systems;

        }else if (link === "Circular") {
            getLocalContent(Circular, this);
            this.image = Images.module.body.circularPic;
            stepsTitle = this.state.titles.circular;
        }else if (link === "Respi") {
            getLocalContent(Respi, this);
            this.image = Images.module.body.respiPic;
            stepsTitle = this.state.titles.respi;
        }else if (link === "Digest") {
            getLocalContent(Digest, this);
            this.image = Images.module.body.digestPic;
            stepsTitle = this.state.titles.digest;
        }else if (link === "Digest2") {
            getLocalContent(Digest2, this);
            this.image = Images.module.body.digestPic;
            stepsTitle = this.state.titles.digest;
        }else if (link === "Motion") {
            getLocalContent(Motion, this);
            this.image = Images.module.body.motionPic;
            stepsTitle = this.state.titles.motion;
        } else if (link === "Urinary") {
            getLocalContent(Urinary, this);
            this.image = Images.module.body.urinaryPic;
            stepsTitle = this.state.titles.uriner;
        }else if (link === "Urology") {
            getLocalContent(Urology, this);
            this.image = Images.module.body.urologyPic;
            stepsTitle = this.state.titles.urology;
        }else if (link === "Senses") {
            getLocalContent(Senses, this);
            this.image = Images.module.body.sensesPic;
            stepsTitle = this.state.titles.senses;
        }


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
                                height: 6,
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

export default withNavigation(BodySteps);
