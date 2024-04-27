import {Button, HStack} from "@react-native-material/core";
import {useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";

const Profile = () => {

    const navigation = useNavigation();
    const handleSettings = () => {
        navigation.navigate('Settings');
    };
    const handleActions = () => {
        navigation.navigate('Actions');
    };

    return (
            <HStack justify='between' style={styles.container}>
                <Button
                    onPress={handleActions}
                    style={styles.button}
                    title='Actions'
                />
                <Button
                    onPress={handleSettings}
                    style={styles.button}

                    title='Settings'
                />
            </HStack>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        margin: 5,
    }
});

export default Profile;