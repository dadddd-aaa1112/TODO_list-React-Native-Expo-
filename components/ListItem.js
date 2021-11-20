import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Remove = ({ deleteItem2, el }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => deleteItem2(el.key)}>
				<Text> {el.text} </Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	rem: {},
})

export default Remove
