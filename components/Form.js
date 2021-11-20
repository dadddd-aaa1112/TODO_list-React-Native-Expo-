import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

const Form = ({ addHandler }) => {
	const [text, setValue] = useState('')

	const onChangeValue = (text) => {
		setValue(text)
	}

	return (
		<View>
			<TextInput
				onChangeText={onChangeValue}
				style={styles.input}
				placeholder="input your task"
			/>
			<Button title="add task" onPress={() => addHandler(text)} />
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		marginVertical: 30,
		marginHorizontal: '20%',
		width: '60%',
		borderColor: 'aquamarine',
		borderWidth: 3,
		padding: 10,
	},
})

export default Form
