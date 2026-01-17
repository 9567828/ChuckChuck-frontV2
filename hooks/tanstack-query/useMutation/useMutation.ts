import { IUser, tempUser } from "@/utils/tempUser";
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

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const existed = tempUser.find((u) => u.email === email);

      if (existed === undefined || existed.password !== password.trim()) {
        throw new Error("not avaliable account", { cause: "validate" });
      }

      if (existed.email === email.trim() || existed.password === password.trim()) {
        return existed.token;
      }
    },
  });
};
