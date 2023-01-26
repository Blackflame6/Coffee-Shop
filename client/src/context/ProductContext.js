import { createContext, useState } from "react";

const ProductContext = createContext()

export const ProductProvider = ({children}) => {
 const [theProducts, setTheProducts] = useState(null)

  return (
    <ProductContext.Provider
    value={{theProducts, setTheProducts}}>
      {children}
    </ProductContext.Provider>
  )
}


export default ProductContext