import { Bell, MapPin, Menu } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"

export const Header = () => {
  return (
    <View className="w-full flex-row justify-between items-center">
      <Pressable className="size-10 flex items-center justify-center bg-white rounded-full">
        <Menu size={24} color="black" />
      </Pressable>
      <View className="flex-col items-center justify-center gap-1">
        <Text className="text-center text-sm text-slate-800">Localização</Text>
        <View className="flex-row items-center gap-1">
          <MapPin size={16} color="red" />
          <Text className="text-lg font-bold">Caratinga - MG</Text>
        </View>
      </View>
      <Pressable className="size-10 flex items-center justify-center bg-white rounded-full relative">
        <Bell size={24} color="black" />
        <View className="w-3 h-3 bg-red-500 rounded-full absolute top-[-2px] right-[-2px]" />
      </Pressable>
    </View>
  )
}
