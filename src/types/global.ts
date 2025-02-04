export type TCar = {
    data: { _id: any; brand: any; category: any; model: any; price: any; year: any; image: any; };
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
    description: string;
    quantity: number;
    inStock: boolean;
    image: string;
}