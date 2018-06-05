import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image,
} from 'react-native'
import styles from '../styles'

export default class TopBar extends Component {

    render() {
        return (
            <View style={styles.topbar}>
                <View style={styles.topbar__titlecontainer}>
                    <Text style={styles.topbar__title}>T I M E T A B L E</Text>
                </View>
            </View>
        )
    }
}
