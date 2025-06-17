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
    <View className="flex-row border-b border-gray-800/70 p-4">
      <View className="mr-4">
        <Image
          source={{ uri: post.user.avatar_url }}
          className="h-10 w-10 rounded-full"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="mr-2 font-bold text-white">
            {post.user.username}
          </Text>
          <Text className="text-gray-500">
            {dayjs(post.created_at).fromNow()}
          </Text>
        </View>

        <Text className="my-2 text-base text-white">{post.content}</Text>

        <View className="mt-2 flex-row gap-5">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={16} color="#d1d5db" />
            <Text className="ml-1.5 text-gray-500">0</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="#d1d5db" />
            <Text className="ml-1.5 text-gray-500">{0}</Text>
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={16} color="#d1d5db" />
          </Pressable>
          <Pressable className="flex-row items-center">
            <Ionicons name="paper-plane-outline" size={16} color="#d1d5db" />
            <Text className="ml-1.5 text-gray-500">0</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
