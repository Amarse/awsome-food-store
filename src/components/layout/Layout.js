import Footer from "./Footer.js";
import Top from "./Top.js";

export default function Layout({ children }) {
  return (
    <>
      <Top />
      <main>{children}</main>
      <Footer/>
    </>
  );
}