import { cn } from "@/lib/utils"
import { Pressable, Text, View } from "react-native"

interface Props {
  title: string
  label: string
  size: "text-lg" | "text-xl" | "text-2xl"
  children: React.ReactNode
  action: () => void
  className?: string
}

export const Section = ({ title, label, size, children, action, className }: Props) => {
  return (
    <View className={cn("w-full flex gap-2 flex-col items-center", className)}>
      <View className="w-full flex flex-row items-center justify-between px-4">
        <Text className={cn("font-semibold my-4 self-start", size)}>{title}</Text>
        <Pressable onPress={action}>
          <Text>{label}</Text>
        </Pressable>
      </View>
      {children}
    </View>
  )
} 