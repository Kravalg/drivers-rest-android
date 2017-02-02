import {
  AsyncStorage
} from 'react-native';

export default class LocalStorage {
    static async get (key) {
        try {
            const value = await AsyncStorage.getItem(key);
            console.log(value);
            return value;
        } catch (error) {
            alert('AsyncStorage error: ' + error.message);
        }
    };

    static async set (key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            alert('AsyncStorage error: ' + error.message);
        }
    };

}