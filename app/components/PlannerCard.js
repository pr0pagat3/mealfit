import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class PlannerCard extends React.Component {
//   renderItems = (items) => {
//       return items.map(() => {

//       })
      
//   }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.box}>
          <View style={styles.foodItem}>
            <Text style={{color: '#707070'}}>Breakfast</Text>
            <Text style={{fontWeight: 'bold'}}>324 kcal</Text>
          </View>

          <View style={styles.foodItem}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10, backgroundColor: "#00C871"}}>
                <Icon name="check" size={15} color='#fff' />
              </View>
              <Text>2x Boiled Eggs</Text>
            </View>
            <Text>160 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Oatmeal</Text>
            </View>
            <Text>224 kcal</Text>
          </View>
        </View> 

        <View style={styles.box}>
          <View style={styles.foodItem}>
            <Text style={{color: '#707070'}}>Lunch</Text>
            <Text style={{fontWeight: 'bold'}}>324 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Tuna Sandwich</Text>
            </View>
            <Text>160 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Orange Juice</Text>
            </View>
            <Text>224 kcal</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.foodItem}>
            <Text style={{color: '#707070'}}>Dinner</Text>
            <Text style={{fontWeight: 'bold'}}>465 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Chicken Burrito Bowl</Text>
            </View>
            <Text>160 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Sweet Potatoes</Text>
            </View>
            <Text>224 kcal</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.foodItem}>
            <Text style={{color: '#707070'}}>Snacks</Text>
            <Text style={{fontWeight: 'bold'}}>363 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Protein Shake</Text>
            </View>
            <Text>160 kcal</Text>
          </View>

          <View style={styles.foodItem}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 10, marginRight: 10}}></View>
              <Text>1x Protein Bar</Text>
            </View>
            <Text>224 kcal</Text>
          </View>
        </View>
 
      </View>
    );
  }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9'
    },
    boldText: {
      fontWeight: 'bold'
    },
    foodItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginVertical: 10
    },
    box: {
      marginHorizontal: 15,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.1,
      shadowRadius: 15.00,
      elevation: 24,
    },
  });
