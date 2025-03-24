import { Button } from "@/components/ui/button";

import dumpsImage from "../../assets/img/dp.jpg"; // Replace with your actual image paths
import skimmerImage from "../../assets/img/sk.jpg";
import cardedItemsImage from "../../assets/img/ci.jpg";
import tutorialsImage from "../../assets/img/tut.jpg";
import bankLoginsImage from "../../assets/img/bank.jpg";
import { useSearchParams } from "react-router-dom";
import ProductCarousel from "../../components/shopping-view/ProductCarousel";
import HeaderImage from '../../assets/SUDO/QQ.gif';
import SudoImage from '../../assets/SUDO/sudo-2.jpg';
import MyImage from '../../assets/SUDO/banklog.jpg';



import softwaresImage from "../../assets/img/sw.jpg";
import {
  Airplay,
  BabyIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Link, useNavigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";


const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );


  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();


  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }
  function CardSection() {
    const navigate = useNavigate();

    // Array of card data
    const cards = [
      {
        id: 1,
        title: "Dumps + Pins",
        image: dumpsImage,
        path: "/shop/listing?category=dumps",
      },
      {
        id: 2,
        title: "Skimmer",
        image: skimmerImage,
        path: "/shop/listing?category=skimmers",
      },
      {
        id: 3,
        title: "Carded Items",
        image: cardedItemsImage,
        path: "/shop/listing?category=carded_productss",
      },
      {
        id: 4,
        title: "Tutorials",
        image: tutorialsImage,
        path: "/shop/home",
      },
      {
        id: 5,
        title: "Bank Logins",
        image: bankLoginsImage,
        path: "/shop/listing?category=usa_banks",
      },

      {
        id: 7,
        title: "Softwares",
        image: softwaresImage,
        path: "/shop/listing?category=tools",
      },
    ];
    return (
      <section className="bg-black py-8  mx-4 lg:mx-20 rounded-2xl">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl mt-1 mb-2 text-white font-extrabold text-center" >Select what suits you best</h1>
          <div className="flex flex-row justify-between items-stretch flex-wrap">
            {cards.map((card) => (
              <div
                key={card.id}

                className="flex-1 mx-2 rounded-lg shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] max-w-[220px]"
              >
                <a className="block">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-24 object-cover rounded-t-lg transition-all duration-300"
                  />
                </a>
                <div className="p-2">
                  <p className="text-center text-sm font-semibold text-white">
                    <a href={card.path}>{card.title}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>






    )
  }



  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);



  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");




  return (
    <div className="mt-14 flex flex-col min-h-screen">




      <section className="bg-black py-12 mt-3 mx-4 lg:mx-20 rounded-2xl">
        <div className="container mx-auto px-4 lg:px-20">

          <section className="bg-black py-8">
            <div className="container mx-auto p-6 bg-black rounded-2xl shadow-lg border border-gray-700 overflow-hidden flex flex-wrap">
              {/* Left Column - 66% width on medium screens and up */}
              <div className="w-full md:w-2/3 pr-4 mb-6 md:mb-0">
                <img
                  src={HeaderImage}
                  alt="Header"
                  className="w-full h-auto rounded-2xl shadow-2xl ring-2 ring-gray-600"
                  loading="eager"
                />
              </div>
              {/* Right Column - 33% width on medium screens and up */}
              <div className="w-full md:w-1/3 pl-4 flex items-center justify-center">
                <img
                  src={SudoImage}
                  alt="Sudo"
                  className="w-full h-auto rounded-2xl shadow-2xl ring-2 ring-gray-600"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
        <div

          className="mt-2 mb-4 px-4 border-l-[0px] border-r-[0px] p-2 border-2 border-gray-800 bg-[#FFA500] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mx-5 md:mx-20"
        >
          <h2 className="text-lg mb sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center whitespace-nowrap">
            Best Online Hacking Tools Shop
          </h2>
        </div> 
        <div

          className="mt-6 px-4 border-l-[0px] border-r-[0px] p-2 border-2 border-gray-800 bg-[#FFA500] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer mx-5 md:mx-20"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center whitespace-nowrap">
            Bank Wire Transfer Hacking
          </h2>
        </div>
        <div className="w-full p-4">
      <img
        src={MyImage}
        alt="sudohackers bank logins for sale vendor available"
        className="w-full h-auto rounded-lg shadow-lg"
        decoding="async"
        loading="lazy"
      />
    </div>
        <ProductCarousel />
      </section>










      <section className="bg-black text-gray-300 py-12 mt-8 mx-4 lg:mx-20 rounded-2xl">
        <div className="container mx-auto px-4 lg:px-20">
          
          
        <p className="text-2xl text-[#ff9900] font-bold mb-4">
        DARK WEB Hacker’s Dictionary
      </p>
      <h1 className="text-2xl  font-bold mb-4">
        Are you new to the realm of hacking?
      </h1>
      <p className="mb-4">
        Do you feel dumb when you don’t know the meaning of a certain term? Well, then this will certainly help you out! If you are ever unsure about anything, simply scroll down and find that specific word, then read the definition.
      </p>
      <p className="mb-6">
        Anything includes: Abbreviations, Phrases, Words, and Techniques. “The list is in alphabetical order for convenience!”
      </p>

      <h2 className="text-xl font-semibold mb-2">Abbreviations</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          🥇 <strong>DDoS</strong> = Distributed Denial of Service
        </li>
        <li>
          🥇 <strong>DDoS</strong> = Distributed Reflected Denial of Service Attack; uses reflection servers (or methods like DNS spoofing) to make an attack appear to originate from multiple IPs. Amplification of power in the attack <em>COULD</em> occur.
        </li>
        <li>
          🥇 <strong>FTP</strong> = File Transfer Protocol. Used for transferring files over an FTP server.
        </li>
        <li>
          🥇 <strong>FUD</strong> = Fully Undetectable.
        </li>
        <li>
          🥇 <strong>Hex</strong> = In computer science, hexadecimal refers to base‑16 numbers using digits 0–9 and A–F. In C (as well as Java, JavaScript, C++, etc.), hex numbers are prefixed with <code>0x</code>, so <code>0x80</code> is equivalent to 128 decimal.
        </li>
        <li>
          🥇 <strong>HTTP</strong> = Hyper Text Transfer Protocol. The foundation of data communication on the World Wide Web.
          <br />
          <strong>MIRC</strong> = Internet Relay Chat. Transmits text messages in real time between online users.
        </li>
        <li>
          🥇 <strong>JDB</strong> = Java drive‑by; a common web‑based exploit allowing an attacker to download and execute malicious code locally on a victim’s machine through a known Java vulnerability.
        </li>
        <li>
          🥇 <strong>Malware</strong> = Malicious Software.
        </li>
        <li>
          🥇 <strong>Nix</strong> = Unix‑based operating system, typically referenced when discussing DoS attacks.
        </li>
        <li>
          🥇 <strong>POP3</strong> = The most popular protocol for retrieving email from a server.
        </li>
        <li>
          🥇 <strong>RAT</strong> = Remote Administration Tool.
        </li>
        <li>
          🥇 <strong>SDB</strong> = Silent drive‑by; using a zero‑day exploit to covertly download and execute malicious code on a victim’s system (similar to JDB, but without notifying the user).
        </li>
        <li>
          🥇 <strong>SE</strong> = Social Engineering.
        </li>
        <li>
          🥇 <strong>SKID</strong> = Script Kid/Script Kiddie.
        </li>
        <li>
          🥇 <strong>SMTP</strong> = A TCP/IP protocol used in sending and receiving email.
        </li>
        <li>
          🥇 <strong>SQL</strong> = Structured Query Language. A language used to communicate with databases and DBMS; often seen in terms like “SQL Injection.”
        </li>
        <li>
          🥇 <strong>SSH</strong> = Secure Shell, used to connect to Virtual Private Servers.
        </li>
        <li>
          🥇 <strong>TCP</strong> = Transmission Control Protocol, which creates connections and exchanges packets of data.
        </li>
        <li>
          🥇 <strong>UDP</strong> = User Datagram Protocol, an alternative to TCP used for DNS, VoIP, and file sharing.
        </li>
        <li>
          🥇 <strong>VPN</strong> = Virtual Private Network.
        </li>
        <li>
          🥇 <strong>VPS</strong> = Virtual Private Server.
        </li>
        <li>
          🥇 <strong>XSS (CSS)</strong> = Cross Site Scripting.
        </li>
        <li>
          🥇 <strong>Algorithm</strong> = A series of steps specifying which actions to take in which order.
        </li>
        <li>
          🥇 <strong>ANSI Bomb</strong> = ANSISYS key‑remapping commands using ANSI numeric codes to redefine keys.
        </li>
        <li>
          🥇 <strong>Back Door</strong> = A method a hacker leaves on a system to regain access later.
        </li>
        <li>
          🥇 <strong>Binary</strong> = A numbering system with only two possible values per digit: 0 and 1.
        </li>
        <li>
          🥇 <strong>Black Hat</strong> = A hacker who performs illegal activities online.
          <br />
          <strong>Blue Hat</strong> = A hacker outside of traditional security consulting who tests systems before launch for vulnerabilities; Microsoft also uses “BlueHat” for a series of security events.
        </li>
        <li>
          🥇 <strong>Bot</strong> = A piece of malware that connects a computer to an attacker, typically using HTTP or IRC to await instructions.
        </li>
        <li>
          🥇 <strong>Botnet</strong> = A network of computers infected by worms or Trojans and controlled by hackers to send spam, viruses, or launch DoS attacks.
        </li>
        <li>
          🥇 <strong>Buffer Overflow</strong> = An exploit that sends more data than a system can handle, taking advantage of common programming errors.
        </li>
        <li>
          🥇 <strong>Cracker</strong> = A hacker who decrypts passwords.
        </li>
      </ul>
         
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Left Section: Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Sudohackers. All rights reserved.
            </p>
          </div>
        </div>
      </section>


      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;