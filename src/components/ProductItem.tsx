import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import styles from '../styles/compoennts/ProductItem';
import IData from '../screens/Products/type';
interface IProps {
  item: IData;
  onPress: () => void;
}
const ProductItem = ({item, onPress}: IProps) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Image style={styles.img} source={{uri: item?.image}} />
      <Text numberOfLines={1} style={styles.title}>
        {item?.title}
      </Text>
      <Text numberOfLines={1} style={styles.price}>
        Rs. {item?.price}
      </Text>
    </Pressable>
  );
};

export default ProductItem;
