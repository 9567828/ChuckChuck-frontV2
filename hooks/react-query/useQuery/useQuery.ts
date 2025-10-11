import { useQuery } from "@tanstack/react-query";

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const cookies = Object.fromEntries(document.cookie.split("; ").map((c) => c.split("=")));
      const userId = cookies.userId;
      if (!userId) throw new Error("로그인 정보 없음");

      // DB로 조회시
      // const res = await fetch(`/api/user/${userId}`);
      // return res.json();
      return userId;
    },
  });
};
