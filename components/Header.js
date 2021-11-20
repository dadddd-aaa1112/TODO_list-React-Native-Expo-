import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
	return (
		<View>
			<Text style={styles.title}>List todo</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		color: 'aquamarine',
		textAlign: 'center',
		marginHorizontal: 20,
		marginVertical: 20,
		fontWeight: 'bold',
	},
})

export default Header
