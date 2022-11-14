import React from 'react';
import {ScrollView, Text} from "react-native";
import styles from "../Styles";
import {withNavigation} from 'react-navigation';
import HtmlView from "react-native-htmlview";

class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScrollView style={styles.welcomeContainer}>

                <HtmlView style={styles.stepText}
       value={"<br/><br/><br/><b>Hakkında</b> " +
           "MobiHealth uygulaması toplumun sağlık okuryazarlığı seviyesini yükseltmek amacıyla " +
           " kişilere sürekli sağlık eğitimi fırsatı yaratan dijital bir eğitim platformudur. Türkçe, İngilizce, " +
           " Almanca ve Portekizce dillerinde yayın yapmakta olan bu uygulama herkes için güvenilir ve " +
           " evrensel sağlık bilgilerini içermektedir. MobiHealth uygulaması sağlık bilgilerinin öğrenicilere " +
           " ulaştırılmasında kolaylaştırıcı, sağlık bilgilerini kolay anlaşılır hale getiren, hayatın doğal " +
           " akışına entegre edilerek zaman tasarrufu sağlayan, yetişkin eğitimine uygun ve eğitimde " +
           " sürekliliği sağlayan yenilikçi bir yetişkin sağlık eğitimi platformudur. " +
           " <br/> " +
           " MobiHealth uygulaması Avrupa Birliği ve Türkiye Cumhuriyeti tarafından AB " +
           " Erasmus+ Yetişkin Eğitiminde Stratejik Ortaklıklar Programı kapsamında desteklenen “ Sağlık " +
           " Eğitimi Açısından Yenilikçi Yetişkin Eğitimi Modelleri “ projesi kapsamında hazırlanmıştır. " +
           " Ancak burada yer alan görüşlerden Avrupa Birliği ve Türkiye Cumhuriyeti sorumlu tutulamaz. " +
           " Bununla birlikte burada yer alan bilgiler tanı ve tedavi yerine geçmez. Tanı ve tedavi süreçleri " +
           " için en yakın sağlık kuruluşuna başvurmalı ve sağlık profesyonellerinden destek almalısınız."+
                "<br/><br/>" +
           "<b>About</b>   " +
           "MobiHealth application aims to increase the health literacy level of the society. " +
           " It is a digital education platform that creates continuous health education opportunities for people. Turkish English, " +
           " Broadcasting in German and Portuguese, this application is reliable and convenient for everyone. " +
           " Contains universal health information. MobiHealth app provides learners of health information " +
           " facilitating the delivery of health information, making health information easy to understand, natural life " +
           " time-saving, suitable for adult education and " +
           " is an innovative adult health education platform that provides continuity. " +
           " <br/> " +
           " MobiHealth application by the European Union and the Republic of Turkey EU " +
           " “Healthcare” supported under the Erasmus+ Strategic Partnerships in Adult Education Program " +
           " It has been prepared within the scope of the Innovative Adult Education Models in Terms of Education” project. " +
           " However, the European Union and the Republic of Turkey cannot be held responsible for the views expressed here. " +
           " However, the information contained herein does not replace diagnosis and treatment. Diagnosis and treatment processes " +
           " You should apply to the nearest health institution and get support from health professionals." +
           "<br/><br/>"
                }>

                </HtmlView>



                <Text>

                </Text>
            </ScrollView>
        );
    }
}

export default withNavigation(About);
