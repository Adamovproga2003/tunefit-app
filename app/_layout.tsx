import { useColorScheme } from '@/hooks/useColorScheme.web'
import { getDataFromStorage } from '@/utils/get-data-async-storage'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import 'react-native-reanimated'

export const unstable_settings = {
	initialRouteName: '(get-started)',
	'get-started': {
		initialRouteName: 'index',
	},
}

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const colorScheme = useColorScheme()
	const [loaded, error] = useFonts({
		PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
		PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
		PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
	})

	useEffect(() => {
		if (loaded || error) {
			;(async () => {
				const accessToken = await getDataFromStorage('access_token')
				// if (!accessToken) router.replace('/get-started')
			})()
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded && !error) {
		return null
	}

	return (
		<ThemeProvider value={DefaultTheme}>
			<Stack>
				<Stack.Screen name='(get-started)' options={{ headerShown: false }} />
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='+not-found' />
			</Stack>
		</ThemeProvider>
	)
}
