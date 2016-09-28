import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// Local imports
import colors from '../../vars/colors'

export default class ChestAdd extends Component {
	render() {
		let chest = this.props.chest

		return (
			<View style={ styles.modal }>
				<View>
					<Text>Hello World!</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: '#333',
		margin: 20,
		padding: 12,
		elevation: 5,
		borderRadius: 3
	}
})