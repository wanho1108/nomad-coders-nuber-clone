export const typeDefs = ["type User {\n  id: Int!\n  password: String\n  email: String\n  verifieddEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  age: Int\n  phoneNumber: String\n  verifieddPhoneNumber: Boolean!\n  profilePhoto: String\n  createdAt: String\n  updatedAt: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float!\n  lastLat: Float!\n  lastOrientation: Float!\n}\n\ntype Query {\n  user: User\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  password: string | null;
  email: string | null;
  verifieddEmail: boolean;
  firstName: string;
  lastName: string;
  fullName: string | null;
  age: number | null;
  phoneNumber: string | null;
  verifieddPhoneNumber: boolean;
  profilePhoto: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number;
  lastLat: number;
  lastOrientation: number;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
