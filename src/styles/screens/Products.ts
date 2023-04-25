import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {flex: 1},
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchBar: {
    flex: 0.9,
    backgroundColor: THEME.INFO.LIGHT,
    height: hp(5),
    margin: hp(1),
    padding: wp(2),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  line: {
    borderBottomColor: THEME.INFO.LIGHT,
    borderBottomWidth: 3,
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  list: {
    paddingBottom: hp(40),
  },
});

export default styles;
