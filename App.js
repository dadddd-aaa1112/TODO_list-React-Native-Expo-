import React, { useState } from 'react'
import { View, Button, StyleSheet, Text, FlatList } from 'react-native'
import Form from './components/form'
import Header from './components/header'
import Remove from './components/listItem'

const App = () => {
	const [ListOfItems, setListOfI] = useState([
		{
			text: 'by milk',
			key: '1',
		},
		{
			text: 'by chocolate',
			key: '2',
		},
		{
			text: 'by solt',
			key: '3',
		},
	])

	const addHandler = (text) => {
		setListOfI((list) => {
			return [
				{
					text: text,
					key: Math.random().toString(36).substring(7),
				},
				...list,
			]
		})
	}

	const deleteItem = (key) => {
		setListOfI((list) => {
			return list.filter((ListOfItems) => ListOfItems.key !== key)
		})
	}

	return (
		<View>
			<Header />
			<Form addHandler={addHandler} />

			<FlatList
				data={ListOfItems}
				renderItem={({ item }) => <Remove el={item} deleteItem2={deleteItem} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default App
