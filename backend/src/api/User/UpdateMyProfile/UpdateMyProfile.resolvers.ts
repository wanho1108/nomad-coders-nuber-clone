import { Resolvers } from "@/types/resolvers";
import privateResolver from "@/utils/privateResolver";
import { UpdateMyProfileMutationArgs } from "@/types/graphql";
import User from "@/entities/User";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(async (_, ages: UpdateMyProfileMutationArgs, { req }) => {
      const user: User = req.user;
      await User.update({ id: user.id }, { ...args });
    }),
  },
};

export default resolvers;
