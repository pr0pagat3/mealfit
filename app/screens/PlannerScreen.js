import React from 'react';
import { View, SectionList, StyleSheet } from 'react-native';
import { Button, ListView, Title, Subtitle, Text, Caption, Divider, Row, Image, TouchableOpacity, Tile } from '@shoutem/ui';
import restaurants from '../recipes';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PlannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Planner',
    headerStyle: {
      backgroundColor: '#232b2b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button styleName="clear">
        <Icon color='#fff' size={25} name="playlist-edit" />
      </Button>
    ),
  };

  render() {
    const nutrition = {
      calories: 530,
    }

    return (
      <View style={{ flex: 1 }}>
        <SectionList
          sections={[
            { title: 'Monday', data: restaurants.slice(0,2) },
            { title: 'Tuesday', data: restaurants.slice(2,5) },
            { title: 'Wednesday', data: restaurants },
            { title: 'Thursday', data: restaurants },
            { title: 'Friday', data: restaurants },
            { title: 'Saturday', data: restaurants },
            { title: 'Sunday', data: restaurants },
          ]}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => this.props.navigation.push('Recipe')}>
              <Row>
                <Image style={{width:70, height:50}} source={{ uri: item.image && item.image.url }} />
                <Tile styleName="vertical">
                  <Caption>{item.name}</Caption>
                  <View style={{flexDirection: 'row'}}>
                    <Badge value={`cals ${item.calories}`}/>
                    <Badge value={`p ${item.protein}`} containerStyle={{ backgroundColor: '#fbc3ca'}}/>
                    <Badge value={`f ${item.fat}`} containerStyle={{ backgroundColor: '#fbf4c3'}}/>
                    <Badge value={`c ${item.carbs}`} containerStyle={{ backgroundColor: '#89c4fa'}}/>
                  </View>
                </Tile>
              </Row>
              <Divider styleName='line'/>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section}) => (
            <TouchableOpacity onPress={() => this.props.navigation.push('Stats')}>
              <Row>
                <View style={{flex: 1}}styleName="vertical">
                  <Title>{section.title}</Title>
                  <Caption numberOfLines={1}>Calories: 2343, Protein: 156, Fat: 56, Carbs: 180</Caption>
                </View>
                <Button styleName="right-icon"><Icon size={25} name="plus-circle-outline" /></Button>
                <Divider styleName='line' style={{backgroundColor: 'tomato'}}/>
              </Row>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
