import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useAuth} from "../hooks/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "@react-native-material/core";

const Settings = () => {
    const [user, setUser] = useAuth();
    const logout = async () => {
        await AsyncStorage.setItem('User', '');
        setUser(null);
    }

    return (
        <View style={styles.container}>
            <Text>USER: {user.email}</Text>
            <Button style={styles.button} title='Logout' onPress={logout}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    button: {
        margin: 10,
    }
});

export default Settings;