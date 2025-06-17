import { ActivityIndicator, FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { PostListItem } from "@/components/post-list-item";
import { supabase } from "@/libs/supabase";

const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, user:profiles(*)")
    .throwOnError();

  if (error) {
    console.error(error);
  }

  return data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
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
    />
  );
}
