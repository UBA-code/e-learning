export interface courseApi {
  id: number;
  name: string;
  description: string;
  price: number;
  curriculm: curriculmApi[];
  images: string[];
  tags: tagsApi[];
  author: authorApi;
}

export interface curriculmApi {
  name: string;
  index: string;
  videos: null | videoApi[];
}

export interface videoApi {
  id: number;
  title: string;
  path: string;
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

export interface courseLessons {
  title: string;
  description: string;
  lessonsSections: lessonSectionApi[];
}

export interface lessonSectionApi {
  title: string;
  lessons: lessonApi[];
}

export interface lessonApi {
  title: string;
  lessonNumber: string;
  time: string;
  isActive: boolean;
}
