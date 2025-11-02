import { IUser } from "@/utils/tempUser";
import { useMutation } from "@tanstack/react-query";

export const useCreateMutation = () => {
  return useMutation<IUser, Error, { data: IUser }>({
    // <TData, TError, TVariables>
    mutationFn: async ({ data }) => {
      // DB 연결 시에는 실제 API 요청으로 교체 예정
      // const res = await fetch("/api/users", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // return res.json() as Promise<IUser>;

      return data;
    },
  });
};
