import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "@/types/data";

dayjs.extend(relativeTime);

interface PostListItemProps {
  post: Post;
}

export function PostListItem({ post }: PostListItemProps) {
  return (
    <View className="flex-row p-4 border-b border-gray-800/70">
      <View className="mr-4">
        <Image
          source={{ uri: post.user.image }}
          className="w-10 h-10 rounded-full"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-white font-bold mr-2">{post.user.name}</Text>
          <Text className="text-gray-500">
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>

        <Text className="text-white text-base my-2">{post.content}</Text>

        <View className="flex-row mt-2 gap-5">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={16} color="#d1d5db" />
            <Text className="text-gray-500 ml-1.5">0</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="#d1d5db" />
            <Text className="text-gray-500 ml-1.5">{post.replies.length}</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={16} color="#d1d5db" />
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={16} color="#d1d5db" />
            <Text className="text-gray-500 ml-1.5">0</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
