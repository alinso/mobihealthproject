import React from "react";
import setLocalDictionary from "./setLocalDictionary";
import {Image, Text, TextInput, View} from "react-native";
import styles from "../../Styles";
import {withNavigation} from "react-navigation";
import getLocalTitles from "../../getLocalTitles";
import Lang from "../LocalTitles";


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyz: [],
            valuez: [],
            result:[],
            resultTitle:"",
            titles: null,
            currentLng: "",
            query: ""
        }

        getLocalTitles(Lang, this);
        setLocalDictionary(this);
        this.lookup=this.lookup.bind(this);

    }



    lookup(e) {
        if (e.nativeEvent.key === "Enter") {
            console.log(this.state.query.toLowerCase())
            console.log(this.state.keyz[0].name.toLowerCase())
            for(let i=0 ; i < this.state.keyz.length; i++){

                if(this.state.keyz[i].name.toLowerCase().includes(this.state.query.toLowerCase())){
                    this.setState({result:this.state.valuez[i]});
                    this.setState({resultTitle:this.state.keyz[i].name+":"});
                    this.setState({query:""})
                    return;
                }
            }
        }
    }


    render() {

        if(this.state.titles==null)
            return null;

         return (
            <View style={styles.appContainer}>
                <View style={styles.flexContainer}>
                    <View style={{flex: 4}}>
                    <TextInput
                        multiline={true}
                        style={styles.searchInput}
                        onChangeText={(q)=>this.setState({query: q.trimEnd()})}
                        value={this.state.query}
                        placeholder={" "+this.state.titles.placeholder}
                        onKeyPress={(e) => this.lookup(e)}
                    />

                        <Text style={styles.searchTitle}>{this.state.resultTitle}</Text>
                        <Text style={styles.searchRes}>{this.state.result}</Text>
                </View>
            </View>


                <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
            </View>
        )
    }
}

export default withNavigation(Search);


