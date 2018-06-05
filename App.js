import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native'

import TopBar from './components/TopBar'
import SubjectItem from './components/SubjectItem'

import styles from './styles'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: {
                '1': [
                    { title: 'Project Management', name: 'BIT 2215', room: 'EG-29', start: '7:30', end: '10:00', lecturer: 'Dishon Kiiru', weeks: [1]},
                    { title: 'Transaction Processing Sys', name: 'ICS 2400', room: 'EG-32', start: '10:00', end: '1:00', lecturer: 'Moses Odeo', weeks: [1]},
                    { title: 'Computer Graphics', name: 'ICS 2211', room: 'E 02', start: '2:00', end: '4:00', lecturer: 'Kinuthia Njiru', weeks: [1]}
                ],
                '2': [
                    { title: 'Business Sys Modelling', name: 'BIT 2212', room: 'EG 30', start: '8:00', end: '10:00', lecturer: 'Dishon Kiiru', weeks: [1]},
                    { title: 'Knowledge Based Sys', name: 'ICS 2405', room: 'EG 28', start: '10:00', end: '1:00', lecturer: 'Okuku', weeks: [1]},
                    { title: 'Computer Sys Project', name: 'BIT 2221', room: 'EG 30', start: '2:00', end: '4:00', lecturer: 'E. Muli', weeks: [1]}
                ],
                '3': [
                    { title: 'Computer Graphics', name: 'ICS 2311', room: 'EG 30', start: '8:00', end: '10:00', lecturer: 'Njiru', weeks: [1]}
                ],
                '4': [
                    { title: 'Prob & Stat 2', name: 'SMA 2230', room: 'EG 30', start: '8:00', end: '10:00', lecturer: 'Pending', weeks: [1]},
                    { title: 'Computer Sys Project', name: 'BIT 2221', room: 'EG 28', start: '10:00', end: '1:00', lecturer: 'E. Muli', weeks: [1]},
                    { title: 'ICT and Society', name: 'BIT 2222', room: 'EG 30', start: '2:00', end: '4:00', lecturer: 'Ngwenyi R.', weeks: [1]}
                ],
                '5': [
                    { title: 'Prob & Stat 2', name: 'SMA 2230', room: 'EG 30', start: '8:00', end: '10:00', lecturer: 'Pending', weeks: [1]},
                ]
            }
        }

        this.state.view = this.getSubjectView(1);
    }

    getSubjectView(week) {
        var subjects = [];
        for (var key in this.state.subjects) {
            var first = true;
            this.state.subjects[key].filter((subject) => {
                return (subject.weeks.indexOf(week) != -1);
            }).map((subject) => {
                if (first) subjects.push(<Text key={key} style={styles.main__title}>{this.getDayName(parseInt(key))}</Text>);
                first = false;
                subjects.push(<SubjectItem key={[subject.title, subject.room, key]} data={subject} />);
            });
        };
        return (
            <ScrollView style={styles.main__view}>
                {subjects}
            </ScrollView>
        );
    }

    getDayName(number) {
        var days = ['Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
        return days[number - 1];
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar type={this.state.viewType} />
                {this.state.view}
            </View>
        );
    }
}
