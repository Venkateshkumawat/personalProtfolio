import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideMenuItem from "../components/QRGenerator/Menu";

export default function SideMenuLayout({ children }) {
    return (
        <>
            <Header />
            
            {children}
           
            <Footer />
        </>
    );
}