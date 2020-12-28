import { Resolvers } from "@/types/resolvers";
import privateResolver from "@/utils/privateResolver";
import User from "@/entities/User";
import { DeletePlaceMutationArgs, DeletePlaceResponse } from "@/types/graphql";
import Place from "@/entities/Place";

const resolvers: Resolvers = {
  Mutation: {
    DeletePlace: privateResolver(
      async (_, args: DeletePlaceMutationArgs, { req }): Promise<DeletePlaceResponse> => {
        const user: User = req.user;

        try {
          const place = await Place.findOne({ id: req.placeId });

          if (place) {
            if (place.userId === user.id) {
              await place.remove();

              return {
                ok: true,
                error: null,
              };
            } else {
              return {
                ok: false,
                error: "Not Authorized",
              };
            }
          } else {
            return {
              ok: false,
              error: "Place not found",
            };
          }
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
