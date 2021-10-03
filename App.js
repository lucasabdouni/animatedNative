import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

export default function App() {
  // utilizado para alterar o valor das animações de forma performatica
  let animation = useSharedValue(0);

  // Stylizar animações
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // controla o movimento da animação no eixo x
          translateX: withTiming(animation.value, {
            // controla a duração
            duration: 500,
            // gera efeitos, pode utilizar os da biblioca ou criar no cubic-bezier.com
            easing: Easing.bezier(0.12, 2.02, 0, 2.02),
          }),
        },
      ],
    };
  });

  function handleAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 200);
  }

  return (
    <View style={styles.container}>
      {/* Passar o animatedStyles junto a stylização do componente */}
      <Animated.View style={[styles.box, animatedStyles]} />
      <TouchableOpacity style={styles.button} onPress={handleAnimationPosition}>
        <Text>Pressione</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  button: {
    marginTop: 10,
    padding: 5,

    alignItems: 'center',

    backgroundColor: '#F0FFFF',

    borderRadius: 5,
  },
});
