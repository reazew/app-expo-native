import { Image, Pressable, Text, View } from "react-native"
import PagerView from "react-native-pager-view"

export const Banner = () => {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable 
          key={1}
          className="w-full h-36 md:h-60 rounded-2xl"
          onPress={() => {console.log("pressionou banner 1")}}
        >
          <Image
            source={require("@/assets/images/banner1.png")}
            className="w-full h-full rounded-2xl"
          />
        </Pressable>
        <Pressable 
          key={2}
          className="w-full h-36 md:h-60 rounded-2xl"
          onPress={() => {console.log("pressionou banner 2")}}
        >
          <Image
            source={require("@/assets/images/banner2.png")}
            className="w-full h-full rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  )
}
  