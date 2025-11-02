import Footer from "@/components/layout/footer/footer";
import { Suspense } from "react";
import Loading from "../loading";
import BackBtn from "../../components/ui/BackBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="account-container">
          {children}
          <BackBtn />
        </div>
        <Footer />
      </Suspense>
    </>
  );
}
