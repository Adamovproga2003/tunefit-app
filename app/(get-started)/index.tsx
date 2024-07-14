import { Ionicons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import {
	ImageBackground,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import image from './../../assets/images/get-started.jpg'
type Props = {}

const GetStarted = (props: Props) => {
	return (
		<>
			<Stack.Screen options={{ title: 'Get Started', headerShown: false }} />

			<View style={styles.container}>
				<ImageBackground source={image} resizeMode='cover' style={styles.image}>
					<View style={styles.inner}>
						<SafeAreaView
							style={{
								flex: 1,
								justifyContent: 'space-between',
								margin: StatusBar.currentHeight,
							}}
						>
							<View style={styles.logoContainer}>
								<Ionicons
									name='fitness'
									color='white'
									size={24}
									style={{ alignSelf: 'center' }}
								/>
								<Text style={styles.logoText}>Tunefit</Text>
							</View>
							<View style={styles.startedContainer}>
								<Text style={styles.welcomeText}>Welcome to Tunefit!</Text>
								<Text style={styles.pText}>
									Monitor and Master Your Fitness Journey
								</Text>
								<Link href={'/auth'} asChild>
									<Pressable>
										{({ pressed }) => (
											<View
												style={[
													styles.button,
													{
														backgroundColor: pressed ? '#2342BD' : '#284BDB',
													},
												]}
											>
												<Text style={styles.buttonText}>Get started</Text>
											</View>
										)}
									</Pressable>
								</Link>
								<Text style={styles.pText}>
									Already have an account?{' '}
									<Link href='/login'>
										<Text>Log in</Text>
									</Link>
								</Text>
							</View>
						</SafeAreaView>
					</View>
				</ImageBackground>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
	},
	inner: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	logoContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 5,
	},
	logoText: {
		color: 'white',
		fontSize: 24,
		fontWeight: '600',
		fontFamily: 'PoppinsBold',
	},
	welcomeText: {
		color: 'white',
		fontSize: 24,
		fontWeight: '600',
		fontFamily: 'PoppinsBold',
		textAlign: 'center',
	},
	pText: {
		color: 'white',
		fontSize: 12,
		fontWeight: '400',
		fontFamily: 'PoppinsRegular',
		textAlign: 'center',
	},
	button: {
		backgroundColor: '#284BDB',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		marginVertical: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontFamily: 'PoppinsSemiBold',
		color: '#fff',
		lineHeight: 21,
		letterSpacing: 0.25,
	},
})

export default GetStarted
