import axios, { AxiosResponse } from "axios";
import { plainToInstance, Type } from "class-transformer";

import { useQuery } from "@tanstack/react-query";

export class ApiResponse<T> {
  data: T;
  status: string;
  message: string;
}

export class OffsetPageMetaDataDto {
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalPageCount: number;
  itemCount: number;
  totalItemCount: number;
  isFirst: boolean;
  isLast: boolean;
}

export interface SearchFaqsInput {
  page: number;
  size: number;
  sort: string;
}

export class FaqDto {
  id: number;
  question: string;
  answer: string;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;
}

class FaqsDto {
  @Type(() => OffsetPageMetaDataDto)
  metaData: OffsetPageMetaDataDto;

  @Type(() => FaqDto)
  items: FaqDto[];
}

/**
 * FAQ 검색 호출
 */

export const useSearchFaqs = () => {
  const params: SearchFaqsInput = {
    page: 1,
    size: 20,
    sort: "createdAt:desc",
  };

  return useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      try {
        const { data: res }: AxiosResponse<ApiResponse<FaqsDto>> =
          await axios.get("/api/client/faqs", { params });

        return plainToInstance(FaqsDto, res.data);
      } catch (error) {
        throw error;
      }
    },
  });
};
