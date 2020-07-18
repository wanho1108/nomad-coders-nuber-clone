export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello: Gretting!\n}\n\ntype Gretting {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: Gretting;
}

export interface Gretting {
  text: string;
  error: boolean;
}
