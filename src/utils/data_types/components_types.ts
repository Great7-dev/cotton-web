import { AllBlogs } from "@/utils/data_types";

export interface BlogCardProps {
  data: AllBlogs;
}

export interface ContactCardProps {
  data: {
    icon: string;
    title: string;
    description: string;
    link: {
      href: string;
      label: string;
      target?: string;
    };
  };
}

export interface ViewImageProps {
  img: string;
  className?: string;
}
