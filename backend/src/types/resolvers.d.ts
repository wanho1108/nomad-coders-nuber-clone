export type Resolver = (parent: any, arguments: any, context: any, info: any) => any;

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver
  }
}
