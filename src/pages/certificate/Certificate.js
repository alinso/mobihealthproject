import React from 'react';
import {Pressable, Image, Text, TextInput, View} from 'react-native';
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
            nname: '',
            created: false
        }
        getLocalTitles(LocalTitles, this);

        this.printToFile = this.printToFile.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.downImg();
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


    // async downImg(){
    //     let fil = '';
    //     StorageAccessFramework.downloadAsync(
    //         'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    //         StorageAccessFramework.documentDirectory + 'google.png'
    //     )
    //         .then(({ uri }) => {
    //             console.log('Finished downloading to ', uri);
    //             fil = uri;
    //             this.printa(uri);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }

    async printToFile() {


        // if(!window.confirm("Certificate will print for "+this.state.nname))
        //     return;

        var date = new Date();

        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = date.getDate().toString();

        var mmChars = mm.split('');
        var ddChars = dd.split('');

        var frdate = (ddChars[1] ? dd : "0" + ddChars[0]) + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + yyyy;


        let self = this;
        let filePath = await Print.printAsync({
            html: '<h1 style="text-align: center; font-size: 50px; margin-top: 40%; left: 65% z-index: 99; ' +
                'position: absolute; font-family: Centaur"><strong>&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                + self.state.nname + '</strong></h1>' +
                '<img src="https://i.ibb.co/S3996H9/certificate.png">' +
                '<h1 style="margin-top: -13%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + frdate + '</h1>',
            width: 1124,
            height: 792,
            base64: false
        });
        this.props.navigation.push("ModuleList");
        //window.alert(self.state.titles.created);

        // // On iOS/android prints the given html. On web prints the HTML from the current page.
        // const {uri} = await Print.printToFileAsync({pdfBody});
        // console.log('File has been saved to:', uri);

        this.setState({created: true});

        // await shareAsync(uri, {UTI: '.pdf', mimeType: 'application/pdf'});
    }

    onChange(t) {
        this.setState({nname: t});
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

                        <Text style={{fontSize: 23}}>{this.state.titles.certificateTitle}</Text>
                        <Text style={{
                            width: "80%",
                            marginTop: "5%",
                            marginBottom: "10%",
                            alignSelf: "flex-start"
                        }}> {this.state.titles.certificateText}</Text>

                        <TextInput
                            name="nname"
                            style={{height: 40}}
                            placeholder={this.state.titles.nameSurname}
                            onChangeText={(t) => this.onChange(t)}
                            value={this.state.nname}
                        />
                        <Pressable style={{width: "50%"}} onPress={this.printToFile}><Text
                            style={{backgroundColor: "#06a2d9", width: "80%", padding: "3%", color: "white"}}>
                            {this.state.titles.certificateButton}</Text></Pressable>
                    </View>

                </View>
                <View style={{flex: 1}}/>

                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </View>
        );
    }
}

export default withNavigation(Certificate);
