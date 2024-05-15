import { ref } from 'vue'
import { useCart, useNotification } from "@/stores";
import { useGtm } from '@gtm-support/vue-gtm';

export function addToCart(tProduct, quantity = 1, productPrices = '') {
    const cart           = useCart();
    const notify         = useNotification();
    const sizeMrp        = ref(productPrices.mrp);
    const sizeOfferPrice = ref(productPrices.offer_price);
    const sizeId         = ref(productPrices.size_id);
    const gtm            = useGtm();

    if(productPrices){
      cart.addToCart({
        item_id      : tProduct.id,
        name         : tProduct.name,
        slug         : tProduct.slug,
        mrp          : sizeMrp,
        offer_price  : sizeOfferPrice,
        image        : tProduct.image,
        size_id      : sizeId.value,
        quantity     : quantity,
        free_shipping: tProduct.free_shipping,
      });
      
    }else{
      cart.addToCart({
        item_id      : tProduct.id,
        name         : tProduct.name,
        slug         : tProduct.slug,
        mrp          : tProduct.mrp,
        offer_price  : tProduct.offer_price,
        image        : tProduct.image,
        size_id      : '',
        quantity     : quantity,
        free_shipping: tProduct.free_shipping,
      });
  
    }
  
    gtm.trackEvent({
      event: 'add_to_cart', // Custom event name
      category: 'Ecommerce', // Event category (adjust as needed)
      action: 'Add to Cart', // Action (adjust as needed)
      label: tProduct, // Product name as event label
      value: quantity, // Quantity added (optional)
      // Add other relevant product details as event properties (optional)
    });
  
     notify.Success(`${tProduct.name} Successfully Added Your Cart Item`);
  }