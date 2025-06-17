import { FlatList, Text, View } from "react-native";

import { DUMMY_POSTS } from "@/consts/dummy-data";
import { PostListItem } from "@/components/post-list-item";
import { Link } from "expo-router";

export default function Home() {
  return (
    <FlatList
      data={DUMMY_POSTS}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="p-4 text-center text-xl text-blue-500">
          New Post
        </Link>
      )}
    />
  );
}
