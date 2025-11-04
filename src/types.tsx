export type Gender = 'male' | 'female';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  age: number;
  position: string;
  photo: string;     // URL
  hobbies: string[];
}