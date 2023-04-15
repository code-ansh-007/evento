import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <RecoilRoot>
          <main className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow">
              <Component {...pageProps} />
            </div>
            <Footer />
          </main>
        </RecoilRoot>
      </AuthContextProvider>
    </>
  );
}
