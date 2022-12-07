import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import Images from "../../Images";


class BodyMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
        }
        getLocalTitles(LocalTitles, this);
    }

    onSwipeRight(state) {
        this.props.navigation.push('ModuleList');
    }

    onSwipeLeft(state) {
        this.props.navigation.push('ModuleList');
    }

    render() {
        if (this.state.titles == null)
            return null;


        return (
            <ScrollView>
                <GestureRecognizer
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    style={styles.appContainer}>

                    <View style={styles.flexContainer}>
                        <View style={{flex: 1}}/>

                        <View style={{flexDirection: "column", flex: 4}}>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.medicine.info}
                                                title={this.state.titles.info}
                                                href={"BodySteps"}
                                                navParam={"BodyInfo"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={0}
                                />
                                <ModuleSubtitle imgSource={Images.module.body.fundamentals}
                                                title={this.state.titles.fundamentals}
                                                href={"BodySteps"}
                                                navParam={"Fundamentals"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={1}
                                />

                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.fundamentals}
                                                title={this.state.titles.structure}
                                                href={"BodySteps"}
                                                navParam={"Structure"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={2}
                                />

                                <ModuleSubtitle imgSource={Images.module.body.bodyParts}
                                                title={this.state.titles.bodyParts}
                                                href={"BodySteps"}
                                                navParam={"BodyParts"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={3}
                                />




                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.organs}
                                                title={this.state.titles.organs}
                                                href={"BodySteps"}
                                                navParam={"Organs"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={4}
                                />

                                <ModuleSubtitle imgSource={Images.module.body.systems}
                                                title={this.state.titles.systems}
                                                href={"BodySteps"}
                                                navParam={"Systems"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={5}
                                />

                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.circular}
                                                title={this.state.titles.circular}
                                                href={"BodySteps"}
                                                navParam={"Circular"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={6}
                                />
                                <ModuleSubtitle imgSource={Images.module.body.respi}
                                                title={this.state.titles.respi}
                                                href={"BodySteps"}
                                                navParam={"Respi"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={7}
                                />
                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.digest}
                                                title={this.state.titles.digest}
                                                href={"BodySteps"}
                                                navParam={"Digest"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={8}
                                />
                                <ModuleSubtitle imgSource={Images.module.body.digest}
                                                title={this.state.titles.digest2}
                                                href={"BodySteps"}
                                                navParam={"Digest2"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={9}
                                />


                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.motion}
                                                title={this.state.titles.motion}
                                                href={"BodySteps"}
                                                navParam={"Motion"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={10}
                                />

                                <ModuleSubtitle imgSource={Images.module.body.urinary}
                                                title={this.state.titles.uriner}
                                                href={"BodySteps"}
                                                navParam={"Urinary"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={11}
                                />

                            </View>

                            <View style={{flexDirection: "row"}}>
                                <ModuleSubtitle imgSource={Images.module.body.urology}
                                                title={this.state.titles.urology}
                                                href={"BodySteps"}
                                                navParam={"Urology"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={12}
                                />

                                <ModuleSubtitle imgSource={Images.module.body.senses}
                                                title={this.state.titles.senses}
                                                href={"BodySteps"}
                                                navParam={"Senses"}
                                                lockWarning={this.state.titles.lockWarning}
                                                moduleName={"@body"}
                                                titleIndex={13}
                                />

                            </View>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                </GestureRecognizer>
                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </ScrollView>
        );
    }
}

export default withNavigation(BodyMenu);
