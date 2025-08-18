import axios from "axios";

export interface CreateCounselInput {
  username: string;
  phone: string;
  question: string;
  availableCallTime: string;
}

export const useCreateCounsel = () => {
  const createCounsel = async (counsel: CreateCounselInput) => {
    try {
      const res = await axios.post(
        `https://admin-mu-rosy.vercel.app/api/client/inquiries`,
        counsel,
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  };

  return { createCounsel };
};
