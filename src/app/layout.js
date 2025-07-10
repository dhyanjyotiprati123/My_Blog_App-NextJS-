import "../style/main.css";
import {Inter} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
      <div className="container">
         <Navbar />
           <main>
            {children}
           </main> 
         <Footer />
      </div>   
      </body>
    </html>
  );
}
