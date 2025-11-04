import ProductGrid from '../ProductGrid';
import dressImage from '@assets/generated_images/Black_cocktail_dress_85fd198d.png';
import sweaterImage from '@assets/generated_images/Cream_cashmere_sweater_f77fd6f1.png';
import trousersImage from '@assets/generated_images/Navy_blue_trousers_028ba23d.png';
import handbagImage from '@assets/generated_images/Burgundy_leather_handbag_b5972d24.png';

export default function ProductGridExample() {
  const mockProducts = [
    {
      id: '1',
      name: 'Elegant Black Cocktail Dress',
      price: 189,
      image: dressImage,
      category: 'Dresses'
    },
    {
      id: '2',
      name: 'Cream Cashmere Sweater',
      price: 149,
      image: sweaterImage,
      category: 'Tops'
    },
    {
      id: '3',
      name: 'Navy Wide-Leg Trousers',
      price: 129,
      image: trousersImage,
      category: 'Bottoms'
    },
    {
      id: '4',
      name: 'Burgundy Leather Handbag',
      price: 299,
      image: handbagImage,
      category: 'Accessories'
    }
  ];

  return <ProductGrid products={mockProducts} onQuickView={(p) => console.log('Quick view:', p)} />;
}
