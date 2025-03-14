import { Bell, ChevronDown, MapPin, Menu } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"
import type { ViewProps } from "react-native"

export const Header = ({ style }: ViewProps) => {
  return (
    <View style={style} className="w-full flex flex-row justify-between items-center bg-white">
      <Pressable className="size-12 flex items-center justify-center bg-slate-100 rounded-full">
        <Menu size={24} color="black" />
      </Pressable>
      <View className="flex gap-2 flex-row items-center justify-center">
        <View className="flex flex-col items-center justify-center gap-1">
          <Text className="text-center text-sm text-slate-800">Localização</Text>
          <View className="flex flex-row items-center gap-1">
            <MapPin size={16} color="#FF0000" />
            <Text className="text-lg font-bold">Caratinga - MG</Text>
          </View>
        </View>
        <ChevronDown size={14} color="black" />
      </View>
      <Pressable className="size-12 flex items-center justify-center bg-slate-100 rounded-full relative">
        <Bell size={24} color="black" />
        <View className="w-3 h-3 bg-[#FF0000] rounded-full absolute top-[-2px] right-[-2px]" />
      </Pressable>
    </View>
  )
}
