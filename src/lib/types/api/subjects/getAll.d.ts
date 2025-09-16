export declare type Subjects = {
  createdAt: string;
  icon: string;
  name: string;
  _id: string;
};

export declare type GetAllSubjects = {
  message: string;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  subjects: Subjects[];
};
