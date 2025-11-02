import { Suspense } from "react";
import EditProfile from "./(page-ui)/EditProfile";

export default function Page() {
  return (
    <Suspense>
      <EditProfile />
    </Suspense>
  );
}
