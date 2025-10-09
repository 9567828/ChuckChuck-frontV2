import Footer from "@/components/layout/footer/footer";
import PageHead from "../../components/layout/PageHead";
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
