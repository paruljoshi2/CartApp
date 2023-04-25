import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  lightButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: hp(2),
    margin: wp(2),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: THEME.BORDER.DARK,
  },
  lightText: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: THEME.BORDER.DARK,
  },
  darkButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: hp(2),
    margin: wp(2),
    borderRadius: 4,
    backgroundColor: THEME.PRIMARY.DARK,
  },
  darkText: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: THEME.PRIMARY.LIGHT,
  },
});

export default styles;
