import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Variable = require('../../common/css/variable');

const CSS = StyleSheet.create({
  goodsWrapper: {
	flexDirection: 'row',
	borderBottomWidth: .5,
	borderColor: '#ddd',
	backgroundColor: '#ffff'
  },
  img: {
	width: 70,
	height: 70,
	margin:10,
	borderWidth: 1,
	borderColor: '#eee',
  },
  textContainer: {
	flex: 1,
	alignSelf: 'center'
  },
  brandName: {
	flexDirection: 'row',
	alignItems: 'center',
  },
  brand: {
	fontSize: 13,
	fontWeight: 'bold'
  },
  name: {
	fontSize: 12
  },
  unit: {
    marginTop: 5,
	marginBottom: 5,
	fontSize: 10,
	color: Variable.colorUnit
  },
  price: {
	fontSize: 12,
	color: Variable.colorPrice
  },
  quantity: {
    color: '#333'
  }
});

class OrderGoods extends React.Component {
	goodsInfo;
	constructor(props) {
	  super(props);
	  this.goodsInfo = props.goods;
	}

  render() {
	return (
		<View style={ CSS.goodsWrapper }>
		  <Image style={ CSS.img } source={ {uri:this.goodsInfo.url,cache: 'force-cache'}} resizeMode={'stretch'} />
		  <View style={ CSS.textContainer }>
			<View style={ CSS.brandName }>
			  <Text style={ CSS.name }>名称: {this.goodsInfo.name}</Text>
			</View>
			<Text style={ CSS.unit }>单位: {this.goodsInfo.unit} 数量:{this.goodsInfo.num}</Text>
			<Text style={ CSS.price }>优惠: {this.goodsInfo.discounts?'是':'否'}</Text>
		  </View>
		</View>
	);
  }
}

module.exports = OrderGoods;