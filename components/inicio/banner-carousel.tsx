import { useQuery } from "@tanstack/react-query"
import * as React from "react"
import { View } from "react-native"
import { Carousel } from "../global/carousel"

export const BannerCarousel = () => {
  const { data: banners = [], isLoading, error } = useQuery({
    queryKey: ['banners'],
    queryFn: async () => {
      const response = await fetch("http://192.168.200.251:3000/banners")
      return response.json()
    }
  })

  const handleBannerPress = (item: { id: string, image: string }) => {
    console.log("pressionou banner", item.id)
  }

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        data={banners}
        isLoading={isLoading}
        error={error}
        onItemPress={handleBannerPress}
        paddingItem={16}
        gap={16}
        paginationConfig={{
          dotStyle: {
            width: 5,
            height: 5,
            backgroundColor: "#D1D5DB",
            borderRadius: 5,
          },
          activeDotStyle: {
            backgroundColor: "#FF0000",
          },
          containerStyle: {
            gap: 8,
            marginTop: 0,
          }
        }}
      />
    </View>
  )
}