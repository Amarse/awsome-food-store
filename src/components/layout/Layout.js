import Top from "./Top.js";
import Footer from "./Footer.js";

export default function Layout({children}) {
  return (
    <>
      <Top />
      <main>{children}</main>
      <Footer/>
    </>
  );
}