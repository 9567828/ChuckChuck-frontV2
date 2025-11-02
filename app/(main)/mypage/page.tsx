import { getServerCookies } from "@/utils/cookieUtilsServer";
import MyProfile from "./(profile)/MyProfile";

export default async function Page() {
  const { getCookie } = await getServerCookies();
  const userId = getCookie("userId");

  return <MyProfile userId={userId!} />;
}
