import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import MedicineInfo from "./content/MedicineInfo";
import getLocalTitles from "../../getLocalTitles";
import getLocalContent from "../../getLocalContent";
import Images from "../../Images";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            localContents: null,
            title: null,
            content: null,
            currentStep: 0,
        }
        this.image = null;
        let self = this;
        this.setContent = this.setContent.bind(this);

        getLocalTitles(LocalTitles, this).then(function () {
            setTimeout(function () {
                self.setContent(self.props.navigation.state.params.item);
            }, 1000)
        });
    }


    setContent(link) {
        console.log(this.state);
        let stepsTitle;
        switch (link) {
            case "MedicineInfo":
                getLocalContent(MedicineInfo, this);
                this.image = Images.module.medicine.infoPic;
                stepsTitle = this.state.titles.info;
        }
        this.setState({title: stepsTitle})
    }


    render() {
        if (this.state.titles == null)
            return null;

        return (
            <View style={[styles.appContainer, styles.flexContainer]}>
                <View style={{flex: 6}}>
                    <GestureRecognizer
                        onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    >

                        <Text>{this.state.title}</Text>
                        <Image source={this.image}/>
                        <Text>{this.state.content}</Text>

                    </GestureRecognizer>
                </View>
            </View>
        );
    }
}

export default withNavigation(Welcome);
