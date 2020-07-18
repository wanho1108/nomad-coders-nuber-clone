import { Gretting } from "src/types/graphql";

const resolvers = {
  Query: {
    sayHello: (): Gretting => {
      return {
        "text": "love you",
        "error": false
      }
    }
  }
};

export default resolvers;