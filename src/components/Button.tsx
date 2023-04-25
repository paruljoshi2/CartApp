import React from 'react';
import {Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/compoennts/Button';

interface IProps {
  title: string;
  variant: 'outline' | 'contain';
  icon: string;
}
const Button = ({title, variant, icon}: IProps) => {
  return (
    <Pressable
      style={variant === 'contain' ? styles.darkButton : styles.lightButton}>
      <Icon name={icon} size={20} color={variant === 'contain' && '#fff'} />
      <Text style={variant === 'contain' ? styles.darkText : styles.lightText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
