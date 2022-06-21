import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from "../../Styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import {withNavigation} from 'react-navigation';
import ModuleSubtitle from "../../components/ModuleSubtitle";
import Images from "../../Images";

class MedicineMenu extends React.Component {
    state = {
        myState: 'Lang Selection'
    }

    onSwipeRight(state) {
        this.props.navigation.navigate('ModuleList');
    }

    goToStep(module) {
        this.props.navigation.navigate(module);
    }

    render() {
        return (
            <ScrollView>
            <GestureRecognizer
                onSwipeRight={(state) => this.onSwipeRight(state)}
                style={styles.appContainer}>

                <View style={styles.flexContainer}>
                    <View style={{flex: 1}}/>

                    <View style={{flexDirection: "column", flex: 4}}>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.info}
                                            title={"Modül Bilgisi"} href={"MedicineInfo1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.basics}
                                            title={"Temel Kavramlar-1"} href={"MedicineInfo1"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.basics}
                                            title={"Temel Kavramlar-2"} href={"MedicineInfo2"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.sources}
                                            title={"İlaçların Kaynakları"} href={"MedicineSources"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.taxonomy}
                                            title={"İlaçların Sınıflandırılması"} href={"Taxonomy"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.naming}
                                            title={"İlaçların Adlandırılması"} href={"Naming"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={"İlaçların Şekilleri-1"} href={"Shapes1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.shapes}
                                            title={"İlaçların Şekilleri-2"} href={"Shapes2"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={"İlaçların Veriliş Yolları-1"} href={"Giving1"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.giving}
                                            title={"İlaçların Veriliş Yolları-2"} href={"Giving2"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.farma}
                                            title={"Farmakokinetik"} href={"Farma"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.engagement}
                                            title={"İlaçların Etkileşimleri"} href={"Engagement"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.recipes}
                                            title={"Reçeteler"} href={"Recipes"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.criterias}
                                            title={"Uygulama Kriterleri"} href={"Engagement"}/>
                        </View>


                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.antibiotics}
                                            title={"Antibiyotikler"} href={"Antibiotics"}/>
                            <ModuleSubtitle imgSource={Images.module.medicine.usage}
                                            title={"Akılcı İlaç Kullanımı"} href={"Usage"}/>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <ModuleSubtitle imgSource={Images.module.medicine.terms}
                                            title={"İlaç Terimleri"} href={"Terms"}/>
                            <View style={{flex:2}}/>
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

export default withNavigation(MedicineMenu);
