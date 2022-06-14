import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function BasketLayout({children}) {
  return (
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}
