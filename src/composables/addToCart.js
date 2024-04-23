import { ref } from 'vue'
import { useCart, useNotification } from "@/stores";


export function addToCart(tProduct, quantity = 1) {
  
    const cart           = useCart();
    const notify         = useNotification();
    const sizeMrp        = ref();
    const sizeOfferPrice = ref();


    if(sizeMrp.value || sizeOfferPrice.value){
  
      cart.addToCart({
        item_id      : tProduct.id,
        name         : tProduct.name,
        mrp          : sizeMrp.value,
        offer_price  : sizeOfferPrice.value,
        image        : tProduct.image,
        size_id      : sizeId.value,
        quantity     : 1,
        free_shipping: tProduct.free_shipping,
      });
      
    }else{
      
      cart.addToCart({
        item_id      : tProduct.id,
        name         : tProduct.name,
        mrp          : tProduct.mrp,
        offer_price  : tProduct.offer_price,
        image        : tProduct.image,
        size_id      : '',
        quantity     : quantity,
        free_shipping: tProduct.free_shipping,
      });
  
    }
  
  
     notify.Success(`${tProduct.name} Successfully Added Your Cart Item`);
  }