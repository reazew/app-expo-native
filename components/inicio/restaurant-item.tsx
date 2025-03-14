import { Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export type RestaurantItemProps = {
  id: string;
  name: string;
  image: string;
}

export const RestaurantItem = ({ item }: { item: RestaurantItemProps }) => {
  return (
    <Pressable 
      className="flex flex-row items-center justify-start gap-2"
      onPress={() => console.log("pressable restaurant:" + item.name)}
    >
      <Image 
        source={{ uri: item.image }} 
        className="w-20 h-20 rounded-full" 
      />
      <View className="flex gap-2">
        <Text 
          className="text-black text-base font-bold text-center truncate leading-4"
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <View className="flex flex-row items-center gap-2">
          <Star fill="yellow" color="yellow" size={16} />
          <Text className="text-black text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  )
}
