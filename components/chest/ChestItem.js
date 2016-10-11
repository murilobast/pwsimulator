import React, { Component } from 'react'
import { StyleSheet, TouchableNativeFeedback, View, Image, Text } from 'react-native'
// Local imports
import colors from '../../vars/colors'

export default class ChestItem extends Component {
	constructor(props) {
		super(props)

		this._goToChest = this._goToChest.bind(this)
	}

	render() {
		let chest = this.props.chest

		return (
			<TouchableNativeFeedback
				onPress={ this._goToChest }
			>
				<View style={ styles.container }>
					<Image
						style={ styles.icon }
						source={{ uri: 'http://static.pwsimulator.com/' + chest.id + '.png' }}
					/>
					<Text style={ styles.name }>{ chest.name }</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}

	_goToChest() {
		this.props.setLoader(true)

		return fetch('http://api.pwsimulator.com?q=' + this.props.chest.id)
			.then((response) => response.json())
			.then((responseJson) => {
				this.props.setLoader(false)

				this.props.navigator.push({ name: 'chest', data: responseJson[0] })

				return
			})
			.catch((error) => {
				console.error(error)
			})
	}
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 12,
		marginVertical: 6,
		padding: 8,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: colors.backgroundLight,
		borderRadius: 2,
		elevation: 2
	},

	icon: {
		width: 38,
		height: 38
	},

	name: {
		color: '#fff',
		fontSize: 18,
		marginLeft: 8
	}
})