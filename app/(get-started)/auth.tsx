import { Ionicons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const auth = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Stack.Screen options={{ title: 'Auth', headerShown: false }} />
			<View style={{ flex: 1 }}>
				<View style={styles.panel}>
					<Link href={'/'}>
						<Ionicons name='chevron-back-outline' size={24} color='black' />
					</Link>
					<View
						style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
					>
						<Text style={styles.pText}>
							Already have an account?{' '}
							<Link href='/login'>
								<Text>Log in</Text>
							</Link>
						</Text>
					</View>
				</View>
				<View></View>
			</View>
		</SafeAreaView>
	)
}

export default auth

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	pText: {
		color: '#000',
		fontSize: 12,
		fontWeight: '400',
		fontFamily: 'PoppinsRegular',
		textAlign: 'center',
		verticalAlign: 'middle',
	},
	panel: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		alignContent: 'center',
		justifyContent: 'space-between',
		margin: StatusBar.currentHeight,
	},
})
