import { LogOut, Menu, ShoppingCart, ChevronDown, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import track4Logo from "../../assets/SUDO/Logo.png";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import SearchBar from "./SearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import { useEffect, useState } from "react";
import UserCartWrapper from "./cart-wrapper";
import { fetchCartItems } from "@/store/shop/cart-slice";

function MenuItems({ onItemClick, isMobile }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [hoveredDropdownId, setHoveredDropdownId] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const handleNavigate = (menuItem) => {
    sessionStorage.removeItem('filters');
    const currentFilter =
      menuItem.id !== 'home' &&
        menuItem.id !== 'products' &&
        menuItem.id !== 'search' &&
        menuItem.id !== 'about' &&
        menuItem.id !== 'tutorials'
        ? { category: [menuItem.id] }
        : null;
    sessionStorage.setItem('filters', JSON.stringify(currentFilter));
    if (location.pathname.includes('listing') && currentFilter !== null) {
      setSearchParams({ category: menuItem.id });
    } else {
      navigate(menuItem.path);
    }
    if (isMobile && onItemClick) {
      onItemClick();
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <nav className={isMobile ? "flex flex-col gap-2" : "flex items-center gap-4"}>
      {shoppingViewHeaderMenuItems.map((item) => (
        <div
          key={item.id}
          onMouseEnter={
            !isMobile && item.dropdown ? () => setHoveredDropdownId(item.id) : undefined
          }
          onMouseLeave={
            !isMobile && item.dropdown ? () => setHoveredDropdownId(null) : undefined
          }
        >
          {!isMobile && item.dropdown ? (
            <DropdownMenu open={hoveredDropdownId === item.id}>
              <DropdownMenuTrigger asChild>
                <div className="block py-2 cursor-pointer">
                  <span className="transition-colors duration-200 hover:text-[#ff6900] flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </DropdownMenuTrigger>
              {/* Wrap dropdown content in AnimatePresence and motion.div for animation */}
              <AnimatePresence>
                {hoveredDropdownId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenuContent
                      onMouseEnter={() => setHoveredDropdownId(item.id)}
                      onMouseLeave={() => setHoveredDropdownId(null)}
                      style={{ pointerEvents: "auto" }}
                    >
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.id}
                          onClick={() => {
                            handleNavigate(subItem);
                            if (isMobile) {
                              setOpenDropdownId(null);
                            }
                          }}
                          className="cursor-pointer"
                        >
                          {subItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </DropdownMenu>
          ) : (
            <div
              onClick={() => {
                if (isMobile && item.dropdown) {
                  toggleDropdown(item.id);
                } else {
                  handleNavigate(item);
                }
              }}
              className="block py-2 cursor-pointer"
            >
              <span className="transition-colors duration-200 hover:text-[#ff6900]">
                {item.label}
                {isMobile && item.dropdown && (
                  <ChevronDown className="h-4 w-4 inline-block ml-1" />
                )}
              </span>
            </div>
          )}
          {isMobile && item.dropdown && openDropdownId === item.id && (
            <div className="pl-4 border-l-2 border-gray-200 max-h-48 overflow-y-auto">
              {item.dropdown.map((subItem) => (
                <div
                  key={subItem.id}
                  onClick={() => {
                    handleNavigate(subItem);
                    setOpenDropdownId(null);
                  }}
                  className="block py-1 hover:text-[#ff6900] cursor-pointer"
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

function HeaderButtons({ onItemClick, isMobile }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  let formattedBalance = "0.00";
  if (user?.bal !== undefined && user?.bal !== null) {
    const num = Number(user.bal);
    formattedBalance = isNaN(num) ? "0.00" : num.toFixed(2);
  }

  const handleClick = () => {
    navigate('/shop/topup');
    if (isMobile && onItemClick) {
      onItemClick(); // Closes the sheet on mobile
    }
  };

  return (
    <div className="flex text-black items-center gap-2">
      <button
        className="flex items-center gap-2 bg-transparent text-black font-semibold py-2 px-4 rounded transition-colors"
        onClick={handleClick}
      >
        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <span className="text-white">${formattedBalance}</span>
      </button>
    </div>
  );
}

function HeaderRightContent({ isMobile }) {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCartItems(user?.id));
    }
  }, [dispatch, user?.id]);

  return (
    <div className="flex items-center gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
      <Button
  onClick={() => setOpenCartSheet(true)}
  size="icon"
  className="relative"
>
  <ShoppingCart className="text-white w-6 h-6" />
  <span className="absolute top-[-5px] right-[2px] font-bold text-sm text-yellow-400">
    {cartItems?.items?.length || 0}
  </span>
  <span className="sr-only">User cart</span>
</Button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black">
            <AvatarFallback className="bg-white text-black font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center font-bold text-white border-b bg-black h-[80px]">
      <div className="flex h-full items-center justify-between px-4 md:px-6 w-full max-w-7xl mx-auto">
        <Link to="/shop/home">
          <img src={track4Logo} alt="Track4 Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center lg:hidden">
          <div className="flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>
          <div className="flex items-center mr-2">
            <HeaderRightContent />
          </div>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden p-1">
              <Menu className="text-black h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full max-w-xs bg-neutral-900 bg-opacity-90 text-white p-6 rounded-r-2xl shadow-2xl backdrop-blur-md border border-neutral-800"
          >
            <HeaderButtons onItemClick={() => setIsSheetOpen(false)} isMobile={true} />
            <div className="mt-4">
              <MenuItems onItemClick={() => setIsSheetOpen(false)} isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <HeaderButtons isMobile={false} />
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>
          <MenuItems isMobile={false} />
        </div>
        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
