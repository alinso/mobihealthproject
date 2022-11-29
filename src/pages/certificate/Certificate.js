import React, {createRef} from 'react';
import {Image, Text, View} from 'react-native';
import styles from "../../Styles";
import {withNavigation} from 'react-navigation';
import LocalTitles from "../LocalTitles";
import getLocalTitles from "../../getLocalTitles";
import * as Print from 'expo-print';
import {shareAsync} from 'expo-sharing';
import {StorageAccessFramework} from 'expo-file-system';

//
// const data = await FileSystem.readAsStringAsync('../../../assets/eu.png', {
//     encoding: FileSystem.EncodingType.Base64,
// });
//
// const imageData = 'data:image/png;base64,' + data;
//
// let pdfBody ='<div class="wrapper"><img src="${imageData}" width="100%"/></div>';
//
//


class Certificate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titles: null,
            progress: null,
        }
        getLocalTitles(LocalTitles, this);

       // this.downImg();
        this.printToFile();
    }

    // async fetchImageData(){ // fetch Base64 string of image data
    //     const data = await FileSystem.readAsStringAsync('file://' + uri, {
    //         encoding: FileSystem.EncodingType.Base64,
    //     });
    //     let imageData = 'data:image/png;base64,' + data;
    //     return imageData;
    // };
    //
    //  this.html = "<html><body><div class='title-container'>"+
    //     "<img source=${fetchImageData('asset/omnix.png')} />"+
    //     "</div></body></html>";



    onSwipeRight(state) {
        this.props.navigation.push('ModuleList');
    }

    onSwipeLeft(state) {
        this.props.navigation.push('ModuleList');
    }


    async downImg(){
        let fil = '';
        StorageAccessFramework.downloadAsync(
            'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            StorageAccessFramework.documentDirectory + 'google.png'
        )
            .then(({ uri }) => {
                console.log('Finished downloading to ', uri);
                fil = uri;
                this.printa(uri);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async printToFile() {

        var date = new Date();

            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth()+1).toString();
            var dd  = date.getDate().toString();

            var mmChars = mm.split('');
            var ddChars = dd.split('');

            var frdate=  (ddChars[1]?dd:"0"+ddChars[0])+ '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' +yyyy ;


        let filePath = await Print.printAsync({
            html:  '<h1 style="text-align: center; font-size: 50px; margin-top: 40%; left: 65% z-index: 99; ' +
                'position: absolute; font-family: Centaur"><strong>&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ali Insan Soyaslan</strong></h1>' +
                '<img src="https://i.ibb.co/S3996H9/certificate.png">' +
                '<h1 style="margin-top: -13%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +frdate+'</h1>',
            width : 1124,
            height : 792,
            base64 : false
        });
        console.log('File has been saved to:', filePath);

        // // On iOS/android prints the given html. On web prints the HTML from the current page.
        // const {uri} = await Print.printToFileAsync({pdfBody});
        // console.log('File has been saved to:', uri);


        await shareAsync(uri, {UTI: '.pdf', mimeType: 'application/pdf'});
    }

    render() {
        if (this.state.titles == null)
            return null;
        return (
            <View
                onSwipeRight={(state) => this.onSwipeRight(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                style={styles.appContainer}>

                <View style={styles.flexContainer}>
                    <View style={{flex: 1}}/>

                    <View style={{flexDirection: "column", flex: 4}}>
                        <View style={{flex: 2}}/>
                        <Text>pdf down</Text>
                    </View>

                </View>
                <View style={{flex: 1}}/>

                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </View>
        );
    }
}

export default withNavigation(Certificate);
