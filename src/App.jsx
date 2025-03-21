import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";

import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminBalanceEditor from "./pages/admin-view/AdminBalanceEditor";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import Checkout from "./pages/shopping-view/cart";
import PaymentPage from "./components/shopping-view/paymentPage.jsx";
import TopUp from "./components/shopping-view/topUp.jsx";
import CartPage from "./pages/shopping-view/Orders";
import About from "./pages/shopping-view/about";
import TutorialsPage from "./pages/shopping-view/tutorials";
import TutorialDetail from "./pages/shopping-view/tuts1";
import TutorialDetail2 from "./pages/shopping-view/tut2";
import TutorialDetail3 from "./pages/shopping-view/tut3";
import CoinbaseTutorialDetail from "./pages/shopping-view/tut4";
import CashAppDirectDepositDetail from "./pages/shopping-view/tut5";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import NotFound from "./pages/not-found";
import Footer from "./components/shopping-view/Footer";
import TawkTo from "./components/tawk/tawk.jsx";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#040c1b]">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} />} />
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="update-balance" element={<AdminBalanceEditor />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="cart" element={<Checkout />} />
          <Route path="orders" element={<CartPage />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<PaymentPage />} />
          <Route path="topup" element={<TopUp />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="what-is-a-cash-app-linkable-and-how-to-use-it" element={<TutorialDetail />} />
          <Route path="carding-friendly-e-commerce-sites" element={<TutorialDetail2 />} />
          <Route path="how-to-link-paypal-with-a-bank-log" element={<TutorialDetail3 />} />
          <Route path="coinbase-method" element={<CoinbaseTutorialDetail />} />
          <Route path="direct-deposit-using-woodforest" element={<CashAppDirectDepositDetail />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <TawkTo />
    </div>
  );
}

export default App;