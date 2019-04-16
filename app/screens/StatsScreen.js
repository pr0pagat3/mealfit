import React from 'react';
import { ListView, Row, View, Icon, Text, Divider } from '@shoutem/ui';
import { Dimensions } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../recipes';
import { Badge } from 'react-native-elements';
const { height, width } = Dimensions.get('window');

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#00C871',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants
    }
  }


  render() {
    return (
      <View style={{ alignItems: 'flex-start', backgroundColor: '' }}>
        <Row styleName="small">
          <Icon name="user-profile" />
          <Text>Personal Info</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Row styleName="small">
          <Icon name="equalizer" />
          <Text>Body Stats</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Row styleName="small">
          <Icon name="add-to-favorites-off" />
          <Text>Favourites</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Row styleName="small">
          <Icon name="settings" />
          <Text>Settings</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>

        <View style={{borderTopWidth: 1, width: width-20, marginHorizontal: 20, alignSelf: 'center'}} />
        <Row styleName="small">
          <Icon name="checkbox-on" style={{color: "#00C871"}}/>
          <Text style={{color: "#00C871"}}>Set a New Goal</Text>
          <Icon style={{color: "#00C871"}} styleName="disclosure" name="right-arrow" />
        </Row>
      </View>
    );
  }
}
