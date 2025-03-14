import * as React from "react"
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native"
import { useSharedValue } from "react-native-reanimated"
import BaseCarousel, {
  ICarouselInstance,
  Pagination
} from "react-native-reanimated-carousel"

interface CarouselItem {
  id: string
  image: string
}

interface CarouselProps {
  data: CarouselItem[]
  width?: number
  height?: number
  autoPlayInterval?: number
  loop?: boolean
  showPagination?: boolean
  isLoading?: boolean
  error?: any
  onItemPress?: (item: CarouselItem) => void
  paginationConfig?: {
    dotStyle?: object
    activeDotStyle?: object
    containerStyle?: object
  }
  paddingItem?: number
  gap?: number
}

export const Carousel = ({
  data = [],
  width = 330,
  height = 160,
  autoPlayInterval = 2000,
  loop = false,
  showPagination = true,
  isLoading = false,
  error = null,
  onItemPress,
  paginationConfig = {
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
  },
  paddingItem = 0,
  gap = 0,
}: CarouselProps) => {
  const ref = React.useRef<ICarouselInstance>(null)
  const progress = useSharedValue<number>(0)

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
        <Text>Error loading data</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <BaseCarousel
        ref={ref}
        data={data}
        loop={loop}
        width={width}
        height={height}
        snapEnabled={false}
        pagingEnabled={false}
        autoPlayInterval={autoPlayInterval}
        onProgressChange={progress}
        mode="parallax"
        style={{ overflow: "visible" }}
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 0,
        }}
        renderItem={({ item, index }: { item: CarouselItem; index: number }) => (
          <Pressable 
            key={item.id}
            className="w-full h-40 rounded-2xl flex items-center"
            style={{
              paddingLeft: index === 0 ? paddingItem : gap / 2,
              paddingRight: index === data.length - 1 ? paddingItem : gap / 2,
            }}
            onPress={() => onItemPress?.(item)}
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-full rounded-2xl"
            />
          </Pressable>  
        )}
      />
      {showPagination && (
        <Pagination.Custom 
          data={data}
          progress={progress}
          dotStyle={paginationConfig.dotStyle}
          activeDotStyle={paginationConfig.activeDotStyle}
          containerStyle={paginationConfig.containerStyle}
        />
      )}
    </View> 
  )
}