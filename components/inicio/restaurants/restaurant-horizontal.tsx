import { Image, Pressable, Text } from "react-native";

interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export const RestaurantHorizontal = ({ item }: { item: RestaurantProps }) => {
  return (
    <Pressable 
      className="flex flex-col items-center"
      onPress={() => console.log("pressable restaurant:" + item.name)}
    >
      <Image 
        source={{ uri: item.image }} 
        className="w-20 h-20 rounded-full" 
      />
      <Text 
        className="text-black text-sm mt-2 w-20 text-center truncate leading-4"
        numberOfLines={2}
      >{item.name}</Text>
    </Pressable>
  )
}
