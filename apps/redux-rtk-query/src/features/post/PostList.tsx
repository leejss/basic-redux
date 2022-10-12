import { useGetPostsQuery } from "../api/apiSlice";

const PostList = () => {
  const { data } = useGetPostsQuery();
  console.log(data);

  return <div></div>;
};

export default PostList;
