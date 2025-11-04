import { useState } from 'react';
import ShoppingCart, { type CartItem } from '../ShoppingCart';
import { Button } from '@/components/ui/button';
import dressImage from '@assets/generated_images/Black_cocktail_dress_85fd198d.png';

export default function ShoppingCartExample() {
  const [isOpen, setIsOpen] = useState(true);
  
  const mockItems: CartItem[] = [
    {
      id: '1',
      name: 'Elegant Black Cocktail Dress',
      price: 189,
      image: dressImage,
      size: 'M',
      quantity: 2
    }
  ];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      <ShoppingCart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={mockItems}
        onUpdateQuantity={(id, qty) => console.log('Update quantity:', id, qty)}
        onRemove={(id) => console.log('Remove:', id)}
      />
    </div>
  );
}
