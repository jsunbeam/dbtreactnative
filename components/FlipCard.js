import React, { useRef, useState } from "react";
import { Animated, TouchableWithoutFeedback, View } from "react-native";

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const cardStyle = {
    position: "absolute",
    backfaceVisibility: "hidden",
  };
  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  const flipCard = () => {
    if (flipped) {
      setFlipped(false);
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      setFlipped(true);
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableWithoutFeedback onPress={flipCard}>
        <Animated.View style={[cardStyle, frontAnimatedStyle]}>
          {front}
        </Animated.View>
      </TouchableWithoutFeedback>
      {flipped && (
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View style={[cardStyle, backAnimatedStyle]}>
            {back}
          </Animated.View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default FlipCard;
