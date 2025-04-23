export interface BlogCategory {
  name: string;
  id: string;
}

export interface ProviderDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  fullName: string;
  serviceCategory: string | string[];
  termsAndConditions: boolean;
}

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message?: string;
}

export interface SubscriberPayload {
  email: string;
}

export interface AllBlogs {
  blog_id: string;
  title: string;
  category: BlogCategory;
  created_at: string;
  cover_image: string;
  blog_content: string;
  keywords: string;
  description: string;
}

//   FOR REACT QUERY
export interface QueryGetAllBlogsProps {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: string;
}
