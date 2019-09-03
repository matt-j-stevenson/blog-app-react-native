import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      {/* An arrow function that just calls another function, instead
      We can just call the function without the parans */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
