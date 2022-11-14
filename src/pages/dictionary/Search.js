import React from "react";
import setLocalDictionary from "./setLocalDictionary";
import {Image, View} from "react-native";
import styles from "../../Styles";
import {withNavigation} from "react-navigation";
import {ReactSearchAutocomplete} from 'react-search-autocomplete'


class Search extends React.Component {

    constructor(props) {
        super(props)    ;
        this.state = {
            keyz: [],
            valuez: [],
            currentLng: ""
        }

        setLocalDictionary(this);
    }


     handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

     handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

     handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

     handleOnFocus = () => {
        console.log('Focused')
    }

     formatResult = (item) => {
        return (
            <View>
                <span style={{ display: 'block', textAlign: 'left' }}>{this.state.valuez[item.id]}</span>
            </View>
        )
    }

    render() {
        if(this.state.keyz===[] || this.state.valuez===[] || this.state.currentLng==="")
            return null;

        else return(
        <View style={styles.appContainer}>
            <View style={styles.flexContainer}>
                <ReactSearchAutocomplete
                    items={this.state.keyz}
                    onSearch={this.handleOnSearch}
                    onHover={this.handleOnHover}
                    onSelect={this.handleOnSelect}
                    onFocus={this.handleOnFocus}
                    autoFocus
                    formatResult={this.formatResult}
                />
            </View>
            <Image source={require("../../../assets/icon.png")} style={styles.footer}/>
        </View>
        )
    }
}

export default withNavigation(Search);


