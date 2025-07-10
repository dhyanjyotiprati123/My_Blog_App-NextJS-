import { AiOutlineProduct } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { SiGnuicecat } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <div className="home">
      <div className="home-highlight">
         <h1>Welcome to our blogpost</h1>
         <h2>Where you can create your own blog and post it online</h2>
         <h3>Get paid on your views</h3>
         <button>Learn More</button>
      </div>
      <div className="home-cards">
         <div className="home-card1">
            <div className="home-card1-icon">
              <AiOutlineProduct fill="#8884d8" size={34} />
            </div>
            <div className="home-card1-icon">
               <GrMoney fill="#8884d8" size={34} />
            </div>
            <div className="home-card1-icon">
              <SiGnuicecat size={34} />
            </div>
         </div>

         <div className="home-card2">
            <div className="home-card2-box">
              <div className="home-card2-icon">
                 <AiFillYoutube size={34} />
              </div>
              <div className="home-card2-icon">
                 <FaFacebook size={34} />
              </div>
            </div>
            <div className="home-card2-box">
              <div className="home-card2-icon">
                 <FaWhatsapp size={34} />
              </div>
              <div className="home-card2-icon">
                  <CiMail size={34} />
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
