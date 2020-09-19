import { Resolvers } from "src/types/resolvers";
import { FacebookConnectMuationArgs, FacebookConnectResponse } from "src/types/graphql"
import User from "src/entities/User";

const resolvers: Resolvers = {
  Mutations: {
    FacebookConnect: async (_, args: FacebookConnectMuationArgs): Promise<FacebookConnectResponse> => {
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
        await User.create({ ...args, profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square` }).save();

        return {
          ok: true,
          error: null,
          token: "Comming soon"
        }
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
