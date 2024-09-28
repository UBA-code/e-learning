export interface courseApi {
  id: number;
  name: string;
  description: string;
  price: number;
  curriculm: string[];
  images: string[];
  tags: tagsApi[];
  author: authorApi;
}

export interface tagsApi {
  id: number;
  name: string;
}

export interface authorApi {
  id: number;
  name: string;
  total_courses: number;
  rating: number;
}
