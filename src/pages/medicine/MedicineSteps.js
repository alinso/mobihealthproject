import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import MedicineInfo from "./content/MedicineInfo";
import getLocalTitles from "../../getLocalTitles";
import getLocalContent from "../../getLocalContent";
import Images from "../../Images";
import FundaMentals1 from "./content/FundaMentals1";
import Fundamentals2 from "./content/Fundamentals2";
import Sources from "./content/Sources";
import Taxonomy from "./content/Taxonomy";
import HtmlView from "react-native-htmlview";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            localContents: null,
            title: null,
            content: [],
            currentStep: 0,
        }
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
            this.props.navigation.navigate('MedicineMenu');
            return;
        }
        let newCurrentStep = this.state.currentStep - 1;
        this.setState({currentStep: newCurrentStep});
    }

    setContent(link) {
        let stepsTitle;
        if(link==="MedicineInfo") {
            getLocalContent(MedicineInfo, this);
            this.image = Images.module.medicine.infoPic;
            stepsTitle = this.state.titles.info;
        }else if(link==="Fundamentals1") {
            getLocalContent(FundaMentals1, this);
            this.image = Images.module.medicine.infoPic
            stepsTitle = this.state.titles.fundamentals1
        }else if(link==="Fundamentals2") {
            getLocalContent(Fundamentals2, this);
            this.image = Images.module.medicine.infoPic
            stepsTitle = this.state.titles.fundamentals2
        }else if(link==="Sources") {
            getLocalContent(Sources, this);
            this.image = Images.module.medicine.infoPic
            stepsTitle = this.state.titles.sources
        }else if(link==="Taxonomy") {
            getLocalContent(Taxonomy, this);
            this.image = Images.module.medicine.infoPic
            stepsTitle = this.state.titles.taxonomy
        }
        this.setState({title: stepsTitle})
    }


    render() {
        if (this.state.titles == null)
            return null;
        if(this.state.content==null)
            return  null;

        let pagerWidth=0;

        if(this.state.content.length>1)
             pagerWidth=90*((this.state.currentStep + 1) / this.state.content.length);

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
                            <Image style={styles.stepPic}  source={this.image}/>
                            <View style={{width:pagerWidth+"%", height:"1%",backgroundColor:"orange",alignSelf: "flex-start",marginLeft:"5%"}}></View>
                            <HtmlView style={styles.stepText} value={this.state.content[this.state.currentStep]}></HtmlView>
                        </View>
                    </View>

                </GestureRecognizer>
                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </ScrollView>
        );
    }
}
export default withNavigation(Welcome);
