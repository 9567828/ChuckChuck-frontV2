"use client";

import { useLoginUserQuery } from "@/hooks/tanstack-query/useQuerys/useQuery";
import Commute from "./(attendance)/Attendance";
import CheckAttendance from "./(check-attendance)/CheckAttendance";
import Electric from "./(electric)/Electric";
import Notice from "./(notice)/Notice";
import Schedule from "./(schedule)/Schedule";
import Vacation from "./(vacation)/Vacation";
import Loading from "@/app/loading";

export default function Home() {
  const { data: user, isLoading } = useLoginUserQuery();

  const isAdmin = user?.admin;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home-grid">
      <Electric />
      <Schedule />
      <div className="column-wrap">
        <Notice isAdmin={isAdmin!} />
        {isAdmin && <CheckAttendance />}
      </div>
      <div className="vacation-wrap">
        <Commute />
        <Vacation />
      </div>
    </div>
  );
}
