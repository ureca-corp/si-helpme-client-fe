import axios from "axios";

export interface CreateCounselInput {
  username: string;
  phone: string;
  question: string;
  availablecallTime: string;
}

// Using relative API path to go through Next.js rewrite in dev/prod

export const useCreateCounsel = () => {
  const createCounsel = async (counsel: CreateCounselInput) => {
    try {
      const res = await axios.post(`/api/client/inquiries`, counsel);

      return res.data;
    } catch (error) {
      throw error;
    }
  };

  return { createCounsel };
};
