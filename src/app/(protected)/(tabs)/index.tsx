import { ActivityIndicator, FlatList, Text } from "react-native";
import { Link } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { PostListItem } from "@/components/post-list-item";
import { Post } from "@/types/data";
import { supabase } from "@/libs/supabase";

const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, user:profiles(*)")
    .throwOnError();

  if (error) {
    console.error(error);
  }

  return data as Post[];
};

export default function Home() {
  const { data, error, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text className="text-white">{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="p-4 text-center text-xl text-blue-500">
          New Post
        </Link>
      )}
    />
  );
}
