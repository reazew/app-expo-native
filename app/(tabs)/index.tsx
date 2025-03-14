import { Search } from "@/components/global/search"
import { Section } from "@/components/global/section"
import { Banner } from "@/components/inicio/banner"
import { Restaurants } from "@/components/inicio/restaurants"
import { TrendingFood } from "@/components/inicio/trending-foods"
import { TrendingRestaurant } from "@/components/inicio/trending-restaurants"
import { Header } from "@/components/layout/header"
import Constants from "expo-constants"
import { ScrollView, View } from "react-native"
const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1}}
      className="bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Banner />
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
