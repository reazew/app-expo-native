import { Stack } from "expo-router"

export default function Orders() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#004038",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pedidos" }} />
    </Stack>
  )
}