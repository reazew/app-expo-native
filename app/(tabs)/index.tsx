
import { Search } from "@/components/global/search"
import { Section } from "@/components/global/section"
import { BannerCarousel } from "@/components/inicio/banner-carousel"
import { TrendingFood } from "@/components/inicio/foods/trending-foods"
import { Restaurants } from "@/components/inicio/restaurants/restaurants"
import { TrendingRestaurant } from "@/components/inicio/restaurants/trending-restaurants"
import { ScrollView, View } from "react-native"

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1}}
      className="bg-white"
      showsVerticalScrollIndicator={false}
    >
      <BannerCarousel />
      <View className="w-full px-4 pt-4">
        <Search />
      </View>
      <Section 
        title="Mais pedidos" 
        label="Ver todos" 
        size="text-2xl" 
        action={() => console.log("pressable see all foods")}>
        <TrendingFood />
      </Section>
      <Section 
        title="Frete grátis" 
        label="Ver todos" 
        size="text-2xl" 
        action={() => console.log("pressable see all foods with free shipping")}>
        <TrendingFood />
      </Section>
      <Section
        title="Famosos no iFood" 
        label="Ver todos" 
        size="text-2xl" 
        action={() => console.log("pressable see all restaurants")}
      >
        <TrendingRestaurant />
      </Section>
      <Section
        title="Restaurantes" 
        label="Ver todos" 
        size="text-2xl" 
        action={() => console.log("pressable see all restaurants")}
      >
        <Restaurants />
      </Section>
    </ScrollView>
  )
}
