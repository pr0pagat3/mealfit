import React from 'react';
import { View, SectionList, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Button, ListView, Title, Subtitle, Text, Caption, Divider, Row, Image, TouchableOpacity, Tile } from '@shoutem/ui';
import restaurants from '../../recipes';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { height, width } = Dimensions.get('window');
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import Profile from './Profile';
import Community from './Community';

export default class CommunityScreen extends React.Component {
  renderTabBar = () => (
    <TabBar
      underlineColor="#fff"
      tabMargin={20}
      tabBadgeColor="red"
      tabBarTextStyle={{fontSize: 17}}
      tabBarStyle={{ backgroundColor: "#00C871", paddingTop: 40 }}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          tabBarInactiveTextColor="#fff"
          tabBarActiveTextColor="#fff"
          renderTabBar={this.renderTabBar}>
          <Profile tabLabel={{label: "Profile"}} label="Page #1"/>
          <Community tabLabel={{label: "Community", badge: 3}} label="Page #2 aka Long!"/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00C871",
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
