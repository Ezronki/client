import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/products-slice";
import ShoppingProductTile from "../../components/shopping-view/product-tile";
import ProductDetailsDialog from "../../components/shopping-view/product-details";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: { featured: true },
        sortParams: "-createdAt",
      })
    )
      .unwrap()
      .then((result) => {
        console.log("Fetched products:", result);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (productDetails !== null) {
      setOpenDetailsDialog(true);
    }
  }, [productDetails]);

  function handleAddToCart(getCurrentProductId, getTotalStock) {
    // Add logging to see what we're sending to the backend
    console.log("Adding to cart with payload:", {
      userId: user?._id,
      productId: getCurrentProductId,
      quantity: 1,
    });

    let getCartItemsArray = cartItems.items || [];

    if (getCartItemsArray.length) {
      const indexOfCurrentItem = getCartItemsArray.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItemsArray[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id, // Ensure user._id is defined
        productId: getCurrentProductId, // Should be productItem._id from your productList
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

  return (
    <div className="relative py-2 mt-3 bg-black z-10 pb-16">
      <h2 className="text-3xl font-bold text-center text-white"></h2>

      {(!productList || productList.length === 0) ? (
        <div className="text-center text-gray-400">
          No featured products available.
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 2500, pauseOnMouseEnter: true, disableOnInteraction: false }}
          navigation
          pagination={false} // Removed pagination dots
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }}
          className="!pb-12 relative z-10"
        >
          {productList.map((productItem) => (
            <SwiperSlide key={productItem._id}>
              <div className="px-2 py-4">
                <ShoppingProductTile
                  key={productItem._id}
                  product={productItem}
                  disableSwing={true}
                  handleAddtoCart={() =>
                    handleAddToCart(productItem._id, productItem.totalStock)
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <ProductDetailsDialog
        open={openDetailsDialog && !!productDetails}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
};

export default ProductCarousel;
