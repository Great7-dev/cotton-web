import { useQuery } from "@tanstack/react-query";

import { allBlog, blogCategory } from "@/utils/dummy_data";
import { QueryGetAllBlogsProps } from "@/utils/data_types";
function BlogServices() {
  const useGetAllBlog = ({
    page = 1,
    limit = 10,
    search = "",
    category_id = "all",
  }: QueryGetAllBlogsProps) => {
    const fetchData = async () => {
      if (category_id === "all") {
        return allBlog || [];
      }

      return allBlog.filter((item) => item.category.id === category_id) || [];
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["all_blog", page, limit, search, category_id],
      enabled: true,
    });
  };

  const useGetAllBlogCategory = () => {
    const fetchData = async () => {
      return blogCategory || [];
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["blog_categories"],
      enabled: true,
    });
  };

  const useGetSingleBlog = (blog_id: string) => {
    const fetchData = async () => {
      return allBlog.find((item) => item.blog_id === blog_id) || null;
    };

    return useQuery({
      queryFn: fetchData,
      queryKey: ["single_blog", blog_id],
      enabled: true,
    });
  };

  return {
    useGetAllBlog,
    useGetAllBlogCategory,
    useGetSingleBlog,
  };
}
export default BlogServices;
