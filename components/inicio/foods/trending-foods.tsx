import { FoodCardHorizontal } from "@/components/inicio/foods/food-card-horizontal"
import { useQuery } from "@tanstack/react-query"
import { ActivityIndicator, FlatList, Text, View } from "react-native"

export const TrendingFood = () => {
  const { data: foods = [], isLoading, error } = useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      const response = await fetch("http://192.168.200.251:3000/foods")
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
        <Text>Error loading foods</Text>
      </View>
    )
  }

  return (
    <FlatList 
      data={foods}
      renderItem={({ item }) => <FoodCardHorizontal food={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
    />
  )
}
