import Verification from "@/entities/Verification";
import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse,
} from "@/types/graphql";
import { Resolvers } from "@/types/resolvers";
import { sendVerficationSMS } from "@/utils/sendSMS";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;

      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber,
        });

        if (existingVerification) {
          existingVerification.remove();
        }

        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: "PHONE",
        }).save();

        await sendVerficationSMS(newVerification.payload, newVerification.key);

        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.messgae,
        };
      }
    },
  },
};

export default resolvers;
