// import { IUser } from "@/utils/tempUser";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useLoginMutation = () => {
//       queryClient.setQueryData(["user"], data);

//   return useMutation({
//     // 🔹 로그인 요청 (POST)
//     mutationFn: async (loginData: IUser) => {
//       // DB 저장할 때 이걸로
//       // const res = await fetch("/api/login", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(loginData),
//       // });
//       // if (!res.ok) throw new Error("로그인 실패");
//       // return res.json(); // 예: { id, name, email, token }

//       return loginData;
//     },

//     // 🔹 성공 시 user 캐시 저장
//     onSuccess: (data) => {
//       queryClient.setQueryData(["user"], data);
//       document.cookie = `isLogin=true; path=/; max-age=${60 * 60 * 24}`;
//       document.cookie = `userId=${data.email}; path=/; max-age=${60 * 60 * 24}`;
//     },
//   });
// };

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
