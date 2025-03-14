import { RestaurantItem, type RestaurantItemProps } from "@/components/inicio/restaurant-item"
import { useQuery } from "@tanstack/react-query"
import { ActivityIndicator, Text, View } from "react-native"

export const Restaurants = () => {
  const { data: restaurants = [], isLoading, error } = useQuery({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const response = await fetch("http://192.168.200.251:3000/restaurants")
      return response.json()
    }
  })

  if (isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text>Error loading restaurants</Text>
      </View>
    )
  }

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item: RestaurantItemProps) => (
        <RestaurantItem key={item.id} item={item} />
      ))}
    </View>
  )
}
