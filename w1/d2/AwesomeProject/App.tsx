import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  Alert,
  StyleSheet,
} from 'react-native';

export default function TouchHandlingDemo() {
  const [pressCount, setPressCount] = useState(0);

  const handlePress = (label: string) => {
    setPressCount(prev => prev + 1);
    Alert.alert(`${label} pressed!`, `Total presses: ${pressCount + 1}`);
  };

  const handleLongPress = () => {
    Alert.alert('Long Press', 'You held it long enough!');
  };

  const androidRipple =
    Platform.OS === 'android'
      ? TouchableNativeFeedback.Ripple('#2196F3', false)
      : undefined;

  return (
    <View style={styles.container}>
      {/* 1. Button */}
      <Button
        title="Default Button"
        onPress={() => handlePress('Button')}
        color={Platform.OS === 'ios' ? '#007AFF' : '#2196F3'}
        disabled={false}
        accessibilityLabel="Simple platform button"
        touchSoundDisabled={false}
        hasTVPreferredFocus={false}
      />

      {/* 2. Pressable */}
      <Pressable
        onPress={() => handlePress('Pressable')}
        onLongPress={handleLongPress}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => console.log('Press Out')}
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        pressRetentionOffset={{ top: 20, bottom: 20, left: 20, right: 20 }}
        disabled={false}
        android_ripple={androidRipple ? undefined : undefined}
        android_disableSound={false}
      >
        <Text style={styles.text}>Pressable Modern</Text>
      </Pressable>

      {/* 3. TouchableOpacity */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => handlePress('TouchableOpacity')}
        disabled={false}
        hasTVPreferredFocus={false}
        style={styles.touchable}
      >
        <Text style={styles.text}>Opacity Feedback</Text>
      </TouchableOpacity>

      {/* 4. TouchableHighlight */}
      <TouchableHighlight
        activeOpacity={0.85}
        underlayColor="#DDDDDD"
        onPress={() => handlePress('TouchableHighlight')}
        onShowUnderlay={() => console.log('Underlay shown')}
        onHideUnderlay={() => console.log('Underlay hidden')}
        style={styles.touchable}
      >
        <Text style={styles.text}>Highlight Underlay</Text>
      </TouchableHighlight>

      {/* 5. TouchableWithoutFeedback */}
      <TouchableWithoutFeedback
        onPress={() => handlePress('TouchableWithoutFeedback')}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => console.log('Press Out')}
        onLongPress={handleLongPress}
        disabled={false}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        touchSoundDisabled={false}
      >
        <View style={[styles.touchable, styles.noFeedbackColor]}>
          <Text style={styles.text}>No Visual Feedback</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* 6. TouchableNativeFeedback (Android only) */}
      {Platform.OS === 'android' && (
        <TouchableNativeFeedback
          background={androidRipple!}
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          onPress={() => handlePress('TouchableNativeFeedback')}
        >
          <View style={[styles.touchable, styles.androidColor]}>
            <Text style={[styles.text, styles.androidText]}>
              Android Native Ripple
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  pressable: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
  },
  touchable: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  androidText: {
    color: 'black',
  },
  androidColor: {
    backgroundColor: 'white',
  },
  noFeedbackColor: {
    backgroundColor: 'gray'
  },
});
