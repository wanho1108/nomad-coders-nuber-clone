import { Resolvers } from "@/types/resolvers";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "@/types/graphql";
import User from "@/entities/User";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      try {
        const { email } = args;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "You should log in instead",
            token: null,
          };
        } else {
          await User.create({ ...args }).save();
          return {
            ok: true,
            error: null,
            token: "Comming soon!",
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.messgae,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
