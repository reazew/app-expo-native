import { Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native"

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export const FoodCardHorizontal = ({ food }: { food: FoodCardProps }) => {
  return (
    <Pressable className="flex flex-col rounded-lg relative">
      <Image 
        source={{ uri: food.image }} 
        className="w-44 h-36 rounded-xl" 
      />
      <View className="bg-neutral-900/90 flex gap-1 flex-row items-center rounded-full absolute top-2 right-3 px-2 py-1">
        <Star color="yellow"  size={14} />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>
      <Text className="text-green-700 font-medium text-lg">R$ {food.price}</Text>
      <Text className="text-black font-medium text-lg">{food.name}</Text>
      <Text className="text-neutral-600">{food.time} - R$ {food.delivery}</Text>
    </Pressable>
  )
}