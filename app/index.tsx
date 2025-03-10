import { Search } from "@/components/global/search"
import { Section } from "@/components/global/section"
import { Banner } from "@/components/inicio/banner"
import { Header } from "@/components/layout/header"
import Constants from "expo-constants"
import { FlatList, ScrollView, Text, View } from "react-native"
const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section title="Deliveries em alta" label="Ver todos" size="text-2xl" action={() => console.log("pressable Ver todos")}>
        Item
      </Section>
    </ScrollView>
  )
}
