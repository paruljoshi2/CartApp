import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ProductItem from '../../components/ProductItem';
import APP_SCREENS from '../../constants/navigators';
import IData from './type';
import styles from '../../styles/screens/Products';
import THEME from '../../theme';
const Products = ({navigation}: any) => {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const [data, setData] = useState([]);

  return (
    <SafeAreaView>
      <View style={styles.statusBar}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
          <Icon name="search" size={20} color={THEME.INFO.DARK} />
        </View>
        <Icon name="heart" size={20} color={THEME.INFO.DARK} />
        <Icon name="shopping-cart" size={20} color={THEME.INFO.DARK} />
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}: {item: IData}) => {
            return (
              <ProductItem
                item={item}
                onPress={() =>
                  navigation.navigate(APP_SCREENS.PRODUCT_DETAIL_SCREEN, {item})
                }
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.line} />

      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={index => index.toString()}
        renderItem={({item}: {item: IData}) => (
          <ProductItem
            item={item}
            onPress={() =>
              navigation.navigate(APP_SCREENS.PRODUCT_DETAIL_SCREEN, {item})
            }
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Products;
