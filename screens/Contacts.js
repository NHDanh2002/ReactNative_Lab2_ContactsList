import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import {fetchContacts} from '../utility/api'
import ContactListItem from '../components/ContactListItem'
//const keyExtractor = ({phone}) => phone;
const Contacts = ({navigation}) =>{
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() =>{
        fetchContacts()
        .then(data => {
                //console.log(data);
                setContacts(data);
                setLoading(false);
                setError(false);
            })
        .catch(e => {
                console.log(e);
                setLoading(false);
                setError(true);
            })
    }, [])
    const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
    //console.log(contactsSorted);
    const renderContact = ({item}) => {
        //const {name, avatar, phone} = item;
        return <ContactListItem
            name={item.name}
            avatar={item.avatar}
            phone={item.phone}
            onPress={()=> navigation.navigate("Profile",{contact: item})}
        />;
    };
    return (
        <View style = {styles.container}>
            {loading && <ActivityIndicator color='blue' size={40}/>}
            {error && <Text>Error...</Text>}
            <FlatList
                    data={contactsSorted}
                    keyExtractor={item => item.id}
                    renderItem={renderContact}
            />
        </View>
    );
}
export default Contacts;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
});