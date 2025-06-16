import { FlatList, Text, View } from "react-native";

import { DUMMY_POSTS } from "@/consts/dummy-data";
import { PostListItem } from "@/components/post-list-item";

export default function Home() {
  return (
    <FlatList
      data={DUMMY_POSTS}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
