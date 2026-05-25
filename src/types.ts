export interface Course {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  overview: string;
  syllabus: string[];
  features: string[];
  targetExams: string[];
}

export interface Achiever {
  name: string;
  exam: string;
  year: string;
  status: 'SELECTED' | 'WRITTEN_CLEARED';
  details?: string;
  school?: string;
  image?: string;
}

export interface Faculty {
  name: string;
  title: string;
  role: string;
  bio: string;
  experience: string;
  achievementsCount: string;
  qualifications: string[];
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Admission' | 'Hostel' | 'SSB' | 'General';
}

export interface TrainingActivity {
  time: string;
  activity: string;
  description: string;
  focus: 'Physical' | 'Academic' | 'Leadership' | 'Discipline';
}

export interface OlqItem {
  number: string;
  title: string;
  description: string;
  coreAspect: string;
}
