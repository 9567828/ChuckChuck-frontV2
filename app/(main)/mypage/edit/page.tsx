import { Suspense } from "react";
import EditProfile from "./(screen)/EditProfile";

export default function Page() {
  return (
    <Suspense>
      <EditProfile />
    </Suspense>
  );
}
