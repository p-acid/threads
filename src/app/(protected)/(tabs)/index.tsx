import { FlatList } from "react-native";

import { PostListItem } from "@/components/post-list-item";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Post } from "@/types/data";
import { supabase } from "@/libs/supabase";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, user:profiles(*)");

      if (error) {
        console.error(error);
      }

      setPosts(data as Post[]);
    };

    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="p-4 text-center text-xl text-blue-500">
          New Post
        </Link>
      )}
    />
  );
}
