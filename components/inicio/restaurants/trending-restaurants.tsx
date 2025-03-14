import { RestaurantHorizontal } from "@/components/inicio/restaurants/restaurant-horizontal"
import { useQuery } from "@tanstack/react-query"
import { ActivityIndicator, FlatList, Text, View } from "react-native"

export const TrendingRestaurant = () => {
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
    <FlatList 
      data={restaurants}
      renderItem={({ item }) => <RestaurantHorizontal item={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
    />
  )
}
