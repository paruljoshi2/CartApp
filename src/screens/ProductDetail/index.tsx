import React from 'react';
import {View, ImageBackground, Pressable, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import IData from '../Products/type';
import Button from '../../components/Button';
import THEME from '../../theme';
import styles from '../../styles/screens/ProductDetail';

const ProductDetail = ({route, navigation}: any) => {
  const {item}: {item: IData} = route.params;
  console.log('item', item);
  const sizeChat = ['XL', 'XXL', 'L'];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgContainer}
        imageStyle={styles.img}
        source={{uri: item?.image}}>
        <View style={styles.statusBar}>
          <View style={styles.searchBar}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={20} color={THEME.INFO.DARK} />
            </Pressable>
          </View>
          <Icon name="heart" size={20} color={THEME.INFO.DARK} />
          <Icon name="shopping-cart" size={20} color={THEME.INFO.DARK} />
        </View>
      </ImageBackground>
      <View style={styles.darkline} />
      <View style={styles.detailView}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text>{item?.description}</Text>
        <Text style={[styles.title, {color: THEME.PRIMARY.DARK}]}>
          Rs. {item?.price}
        </Text>
      </View>
      <View style={styles.lightline} />

      <View>
        <Text style={styles.title}>Size</Text>
        <View style={{flexDirection: 'row'}}>
          {sizeChat.map(item => {
            return (
              <View style={styles.sizeWrapper}>
                <Text>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Add to Wishlist" variant="outline" icon="heart" />
        <Button title="Add to Bag" variant="contain" icon="shopping-cart" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
