import { create } from "zustand";

type stats = {
  selectedLessonPath: string;
  seletedLessonId: number;
};

type actions = {
  setSelectedLessonPath: (path: string) => void;
  setSelectedLessonId: (lesson: number) => void;
};

export const useCourseStore = create<stats & actions>((set) => ({
  selectedLessonPath: "",
  seletedLessonId: 0,
  setSelectedLessonPath: (path) => {
    set({ selectedLessonPath: path });
  },
  setSelectedLessonId: (lesson) => {
    set({ seletedLessonId: lesson });
  },
}));
