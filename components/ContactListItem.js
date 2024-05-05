import React from 'react';
import PropTypes from 'prop-types';
import colors from '../utility/colors';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Avatar, Divider} from 'react-native-paper'
const ContactListItem = ({
    name, avatar, phone, onPress,
}) => {
    return (
        <TouchableOpacity
            underlayColor={colors.grey}
            style = {styles.container}
            onPress={onPress}
        >
            <View style = {styles.contactInfo}>
                <Avatar.Image
                    style={styles.avatar}
                    source={{uri:avatar}}
                    size={40}
                />
                <View style = {styles.details}>
                    <Text style = {styles.title}>{name}</Text>
                    <Text style = {styles.subtitle}>{phone}</Text>
                </View>
            </View>
            <Divider/>
        </TouchableOpacity>
    )
}
export default ContactListItem;
ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};
const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar: {
        borderRadius: 22,
        width: 40,
        height: 40,
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20,
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,
    },
});