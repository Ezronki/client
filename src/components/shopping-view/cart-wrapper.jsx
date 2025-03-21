import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";
import { motion } from "framer-motion";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SheetContent className="bg-black text-white sm:max-w-md w-full p-6 rounded-lg shadow-xl">
        <SheetHeader className="border-b border-gray-700 pb-4">
          <SheetTitle className="text-center text-4xl font-extrabold text-white">
            YOUR CART
          </SheetTitle>
        </SheetHeader>

        {/* Header row for Products and Price */}
        {cartItems && cartItems.length > 0 && (
          <div className="mt-4 flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="text-sm text-center text-gray-400 font-bold uppercase">Product(s)</span>
            <span className="text-sm text-gray-400 font-bold uppercase">Price</span>
          </div>
        )}

        <div className="mt-8 space-y-4 max-h-[50vh] overflow-y-auto">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <UserCartItemsContent key={item._id} cartItem={item} />
            ))
          ) : (
            <div className="text-center text-gray-400 text-lg font-medium">
              YOUR CART IS CURRENTLY EMPTY
            </div>
          )}
        </div>

        {cartItems && cartItems.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-8 space-y-4"
            >
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalCartAmount.toFixed(2)}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button
                onClick={() => {
                  navigate("/shop/checkout");
                  setOpenCartSheet(false);
                }}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-lg shadow-md transition-all"
              >
                Checkout
              </Button>
            </motion.div>
          </>
        )}
      </SheetContent>
    </motion.div>
  );
}

export default UserCartWrapper;
