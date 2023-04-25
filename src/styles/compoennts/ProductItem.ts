import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: wp(1),
    padding: wp(1.5),
    backgroundColor: THEME.PRIMARY.LIGHT,
    borderColor: THEME.INFO.LIGHT,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    height: hp(25),
    width: wp(30),
    flexDirection: 'column',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(15),
    width: wp(25),
    resizeMode: 'stretch',
  },
  title: {
    padding: wp(1),
    color: THEME.INFO.DARK,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  price: {
    padding: wp(1),
    color: THEME.PRIMARY.DARK,
    fontSize: wp(3.5),
    fontWeight: 'normal',
  },
});

export default styles;
