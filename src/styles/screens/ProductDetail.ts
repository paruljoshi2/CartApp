import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {backgroundColor: THEME.PRIMARY.LIGHT, flex: 1},
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchBar: {
    flex: 0.9,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imgContainer: {
    height: hp(50),
    margin: wp(5),
  },
  img: {
    height: hp(50),
    margin: wp(5),
    resizeMode: 'stretch',
  },
  darkline: {
    borderBottomWidth: 3,
    marginBottom: hp(2),
    borderBottomColor: THEME.PRIMARY.DARK,
  },
  detailView: {
    padding: wp(1),
  },
  title: {
    color: THEME.INFO.DARK,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  lightline: {
    borderBottomWidth: 3,
    marginTop: hp(2),
    marginBottom: hp(2),
    borderBottomColor: THEME.INFO.LIGHT,
  },
  sizeWrapper: {
    borderWidth: 1,
    borderColor: THEME.BORDER.DARK,
    borderRadius: wp(3),
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.5),
    margin: wp(1),
  },
});

export default styles;
