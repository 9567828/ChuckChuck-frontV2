import { IUser } from "@/utils/tempUser";
import { useQuery } from "@tanstack/react-query";

export const useLoginUserQuery = () => {
  return useQuery({
    queryKey: ["loggedIn"],
    queryFn: async () => {
      const req = await fetch("/api/getLoginUser", { method: "GET", headers: { "Content-Type": "application/json" } });
      const body: { message: IUser } = await req.json();

      return body.message;
    },
  });
};
