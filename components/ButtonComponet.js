// ButtonComponent.js
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const ButtonComponent = ({ onPressLearnMore, title, color, accessibilityLabel }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={onPressLearnMore}
        title={title}
        color={color}
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default ButtonComponent;
