import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Platform } from 'react-native'
import "../styles/global.css"
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'

const queryClient = new QueryClient()

export default function RootLayout() {
  useReactQueryDevTools(queryClient)

  return (
    <ThemeProvider value={DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "#fff",
            },
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#FF0000",
              fontSize: 20,
            },
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar
          animated
          translucent
          style={Platform.OS === "ios" ? "dark" : "light"}
        />
      </QueryClientProvider>
    </ThemeProvider>
  )
}