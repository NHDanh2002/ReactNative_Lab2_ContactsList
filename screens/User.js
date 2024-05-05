import React, {useState, useEffect} from "react";
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import ContactThumbnail from "../components/ContactThumbnail";
import colors from "../utility/colors";
import { fetchUserContact } from "../utility/api";

const User = () => {
    const [User, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetchUserContact()
        .then(
            users => {
                setUser(users);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e => {
                setLoading(false);
                setError(true);
            }
        )
    });
    const {avatar, name, phone} = User;

    return(
        <View style = {styles.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text>Error...</Text>}
            <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
    )
}
export default User;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
});
