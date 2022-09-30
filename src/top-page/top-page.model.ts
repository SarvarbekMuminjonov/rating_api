export enum TopLavelCategory {
  Courses,
  Services,
  Books,
  Products,
}
export class TopPageModel {
  firstCategory: TopLavelCategory;
  secondCatrgory: string;
  title: string;
  category: string;
  hh: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  TagsTitle: string;
  tags: string[];
}
