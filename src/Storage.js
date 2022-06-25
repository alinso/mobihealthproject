import AsyncStorage from "@react-native-async-storage/async-storage";


class Storage {

    static save = async (key, val) => {
        try {
            await AsyncStorage.setItem(key, val)
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    static getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };


}


export default Storage;
