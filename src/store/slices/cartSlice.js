import { createSlice } from "@reduxjs/toolkit";
import toastNotify from "../../toast/toastNotify";
//! Local storage de kaydedilmiş veri varsa o verileri kullan yoksa default...
//! değerleri kullan.
const initialState = {
  myCart: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData")).myCart
    : [],
  price: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData")).price
    : 0,
};

//! Fiyat hesaplamalarında daha doğru hesaplama için 100 ile çarpılıp işlem yapılıp...
//! Sonra o değer tekrar 100 e bölünmüş ve . dan sonra 2 basamak alınmıştır.
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //! Sepete ürün ekleme işlemleri
    addProduct(state, action) {
      const selectedProduct = { quantity: 1, ...action.payload.product };
      state.myCart.push(selectedProduct);
      const newPrice = (
        (state.price * 100 + action.payload.product.price * 100) /
        100
      ).toFixed(2);
      state.price = newPrice;
      toastNotify("success", `${action.payload.product.title} added to cart`);
    },
    //! Sepetten ürün silme işlemleri
    removeProduct(state, action) {
      state.myCart = state.myCart.filter(
        (item) => item.id !== action.payload.product.id
      );
      const newPrice = (
        (state.price * 100 -
          action.payload.product.price *
            100 *
            action.payload.product.quantity) /
        100
      ).toFixed(2);
      state.price = newPrice;
      toastNotify("success", `${action.payload.product.title} removed to cart`);
    },
    //! Sepeti temizleme
    clearCart(state) {
      state.myCart = [];
      state.price = 0;
      toastNotify("success", ` Cleared  cart`);
    },
    //! Ürün miktar artırma işlemleri
    increaseQuantity(state, action) {
      state.myCart.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.quantity++;
        }
      });
      const newPrice = (
        (state.price * 100 + action.payload.product.price * 100) /
        100
      ).toFixed(2);
      state.price = newPrice;
      toastNotify(
        "success",
        `${action.payload.product.title} increase the quantity`
      );
    },
    //! Ürün miktar azaltma işlemleri
    decreaseQuantity(state, action) {
      if (action.payload.product.quantity === 1) {
        state.myCart = state.myCart.filter(
          (item) => item.id !== action.payload.product.id
        );
        toastNotify(
          "success",
          `${action.payload.product.title} removed the cart`
        );
      } else {
        state.myCart.forEach((item) => {
          if (item.id === action.payload.product.id) {
            item.quantity--;
          }
        });
        toastNotify(
          "success",
          `${action.payload.product.title} decrease the quantity`
        );
      }
      const newPrice = (
        (state.price * 100 - action.payload.product.price * 100) /
        100
      ).toFixed(2);
      state.price = newPrice;
    },
  },
});

export const cartActions = cartSlice.actions;
