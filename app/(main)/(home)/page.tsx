import Commute from "./(attendance)/Attendance";
import CheckAttendance from "./(check-attendance)/CheckAttendance";
import Electric from "./(electric)/Electric";
import Notice from "./(notice)/Notice";
import Schedule from "./(schedule)/Schedule";
import Vacation from "./(vacation)/Vacation";
import { getServerCookies } from "@/utils/cookieUtilsServer";

export default async function Home() {
  const { getCookie } = await getServerCookies();
  const isAdmin = getCookie("role");

  return (
    <div className="home-grid">
      <Electric />
      <Schedule />
      <div className="column-wrap">
        <Notice userRole={isAdmin!} />
        {isAdmin === "true" && <CheckAttendance />}
      </div>
      <div className="vacation-wrap">
        <Commute />
        <Vacation />
      </div>
    </div>
  );
}
