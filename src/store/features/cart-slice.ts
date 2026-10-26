import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../types/get-products.types"

export type CartItem = Product & {
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

const calculateTotal = (items: CartItem[]) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0)

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      const existingItem = state.items.find(i => i.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      state.total = calculateTotal(state.items)
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload

      state.items = state.items.filter(i => i.id !== id)

      state.total = calculateTotal(state.items)
    },

    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer