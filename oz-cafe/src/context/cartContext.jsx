import { createContext, useContext, useState } from "react";

const cartContext = createContext();
//cartContext라는 이름의 전역 저장소 생성

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity, options, id) => {
    setCart([...cart, { quantity, options, id }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
    // cart, setCart, addToCart, removeFromCart라는 데이터를 담았음
    // 이 Provider로 감싼 컴포넌트는 useContext(cartContext)로 데이터를 꺼내서 사용할 수 있음
    // 사용 예) const {cart, addToCart} = useContext(cartContext)
    /* 사용 예) 
    
    import { useCart } from "../context/cartContext";
function CartList() {
  const { cart, removeFromCart } = useCart(); // 💡 useContext로 전역 상태 가져오기

  return (
    <ul>
      {cart.map((item, idx) => (
        <li key={idx}>
          {item.id} - 수량: {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
} */
  );
}

export function useCart() {
  return useContext(cartContext);
}
//cartContext에 저장된 값을 사용할 수 있는 커스텀 훅
