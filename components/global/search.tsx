import { Search as SearchIcon } from "lucide-react-native"
import { TextInput, View } from "react-native"

export function Search() {
  return (
    <View className="w-full flex-row items-center gap-2 border border-slate-500 h-14 px-4 rounded-full bg-transparent">
      <SearchIcon color="black" size={20} />
      <TextInput
        placeholder="Busque por sua refeição ..."
        className="flex-1 size-full bg-transparent"
      />
    </View>
  )
}
