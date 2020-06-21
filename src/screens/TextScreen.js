import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

function TextScreen() {
	const [password, setPassword] = useState('');
	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={newValue => setPassword(newValue)}
			/>

			{password.length < 4 ? <Text>Password must be longer than 5 characters</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;
