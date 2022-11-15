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
import Fundamentals from "./content/Fundamentals";
import Nutrition from "./content/Nutrition";
import FoodTypes from "./content/FoodTypes";
import PhysicalActivity from "./content/PhysicalActivity";
import Obesity from "./content/Obesity";
import BodyTypes from "./content/BodyTypes";
import Pregnancy from "./content/Pregnancy";
import Biberon from "./content/Biberon";
import OldPeople from "./content/OldPeople";
import Workers from "./content/Workers";
import Sportsmen from "./content/Sportsmen";
import Vegetarian from "./content/Vegetarian";
import Chronicles from "./content/Chronicles";
import Diets from "./content/Diets";
import FoodSafety from "./content/FoodSafety";
import ModuleProgressTracker from "../../ModuleProgressTracker";

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
        progress.proceed("@firstAid",this.titleIndex,newCurrentStep+1);
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
        if (link === "Fundamentals") {
            getLocalContent(Fundamentals, this);
            this.image = Images.module.healthylife.fundamentalsPic;
            stepsTitle = this.state.titles.fundamentals;
            this.titleIndex=0;
        }else if (link === "Nutrition") {
            getLocalContent(Nutrition, this);
            this.image = Images.module.healthylife.nutritionPic;
            stepsTitle = this.state.titles.nutrition;
            this.titleIndex=1;
        }else if (link === "FoodTypes") {
            getLocalContent(FoodTypes, this);
            this.image = Images.module.healthylife.foodTypesPic;
            stepsTitle = this.state.titles.foodTypes;
            this.titleIndex=2;
        }else if (link === "PhysicalActivity") {
            getLocalContent(PhysicalActivity, this);
            this.image = Images.module.healthylife.physicalActivityPic;
            stepsTitle = this.state.titles.physicalActivity;
            this.titleIndex=2;
        }else if (link === "Obesity") {
            getLocalContent(Obesity, this);
            this.image = Images.module.healthylife.obesityPic;
            stepsTitle = this.state.titles.obesity;
            this.titleIndex=2;
        }else if (link === "BodyTypes") {
            getLocalContent(BodyTypes, this);
            this.image = Images.module.healthylife.bodyTypesPic;
            stepsTitle = this.state.titles.bodyTypes;
            this.titleIndex=2;
        }else if (link === "Pregnancy") {
            getLocalContent(Pregnancy, this);
            this.image = Images.module.healthylife.biberonPic;
            stepsTitle = this.state.titles.pregnancy;
            this.titleIndex=2;
        }
        else if (link === "Biberon") {
            getLocalContent(Biberon, this);
            this.image = Images.module.healthylife.biberonPic;
            stepsTitle = this.state.titles.biberon;
            this.titleIndex=2;
        }else if (link === "OldPeople") {
            getLocalContent(OldPeople, this);
            this.image = Images.module.healthylife.oldPeoplePic;
            stepsTitle = this.state.titles.biberon;
            this.titleIndex=2;
        }else if (link === "Workers") {
            getLocalContent(Workers, this);
            this.image = Images.module.healthylife.workersPic;
            stepsTitle = this.state.titles.workers;
            this.titleIndex=2;
        }else if (link === "Sportsmen") {
            getLocalContent(Sportsmen, this);
            this.image = Images.module.healthylife.sportsmenPic;
            stepsTitle = this.state.titles.sportsmen;
            this.titleIndex=2;
        }else if (link === "Vegetarian") {
            getLocalContent(Vegetarian, this);
            this.image = Images.module.healthylife.vegetarianPic;
            stepsTitle = this.state.titles.vegetarian;
            this.titleIndex=2;
        }else if (link === "Chronicles") {
            getLocalContent(Chronicles, this);
            this.image = Images.module.healthylife.chroniclesPic;
            stepsTitle = this.state.titles.chronicles;
            this.titleIndex=2;
        }else if (link === "Diets") {
            getLocalContent(Diets, this);
            this.image = Images.module.healthylife.dietsPic;
            stepsTitle = this.state.titles.diets;
            this.titleIndex=2;
        }else if (link === "FoodSafety") {
            getLocalContent(FoodSafety, this);
            this.image = Images.module.healthylife.foodSafetyPic;
            stepsTitle = this.state.titles.foodSafety;
            this.titleIndex=2;
        }

        console.log(this.state.currentStep+1);
        progress.proceed("@firstAid",this.titleIndex,this.state.currentStep+1);
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
