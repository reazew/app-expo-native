import { Header } from '@/components/layout/header'
import { Tabs } from 'expo-router'
import { ClipboardList, House } from 'lucide-react-native'
import { Platform } from 'react-native'
import Constants from 'expo-constants'
const statusBarHeight = Constants.statusBarHeight

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={(props) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: "#FF0000",
          tabBarInactiveTintColor: "#525252",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            height: Platform.OS === "ios" ? 85 : 75,
          },
          tabBarHideOnKeyboard: Platform.OS === "ios" ? false : true,
        }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <House color={color} size={18}/>,
          header: () => <Header style={{ 
              paddingTop: Platform.OS === "ios" ? 8 + statusBarHeight : 0 + statusBarHeight,
              paddingLeft: Platform.OS === "ios" ? 16 : 16,
              paddingRight: Platform.OS === "ios" ? 16 : 16,
              paddingBottom: Platform.OS === "ios" ? 16 : 16,
            }} 
          />,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="pedidos"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => <ClipboardList color={color} size={18}/>,
        }}
      />
    </Tabs>
  )
}
