import { Resolvers } from "@/types/resolvers";
import privateResolver from "@/utils/privateResolver";
import { UpdateMyProfileMutationArgs, UpdateMyProfileResponse } from "@/types/graphql";
import User from "@/entities/User";
import cleanNullArg from "@/utils/cleanNullArg";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (_, args: UpdateMyProfileMutationArgs, { req }): Promise<UpdateMyProfileResponse> => {
        const user: User = req.user;
        const notNull = cleanNullArg(args);

        try {
          if (args.password !== null) {
            user.password = args.password;
            user.save();
          }

          await User.update({ id: user.id }, { ...notNull });

          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
