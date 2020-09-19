import { Resolvers } from "src/types/resolvers";
import { FacebookConnectMuationArgs, FacebookConnectResponse } from "src/types/graphql"
import User from "src/entities/User";

const resolvers: Resolvers = {
  Mutations: {
    FacebookConnect: async (_, args: FacebookConnectMuationArgs): Promise<FacebookConnectResponse => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne({ fbId })

        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: "Comming soon"
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        }
      }

      try {

      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        }
      }
    }
  }
}

export default resolvers;
