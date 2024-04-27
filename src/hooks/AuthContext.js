import {createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const savedUser = await AsyncStorage.getItem('User');
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    const saveLoggedInUser = async (user) => {
        const savedUser = user ? JSON.stringify(user) : '';
        await AsyncStorage.setItem('User', savedUser);
    };

    const setAndSaveUser = async (newValue) => {
        await saveLoggedInUser(newValue);
        setUser(newValue);
    };

    return (
        <AuthContext.Provider value={[user, setAndSaveUser]}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
}