import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export default class DailyStatsScreen extends React.PureComponent {

    render() {
        const data = [ 50, 10, 40 ]

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        return (
          <View style={{flex: 1}}>
            <PieChart
                style={ { height: 200 } }
                data={ pieData }
            />
            <Text>asdf</Text>
          </View>
        )
    }

}
