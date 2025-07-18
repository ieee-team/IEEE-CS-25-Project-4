export interface Product {
  id: number;
  save?: string,
  amountSave?: number,
  new?: string;
  availablePieces?: number;
  title: string;
  priceBefore?: number;
  priceAfter?: number;
  price?: number;
  priceSec?: number;
 shipping: string[] | number;
  inStock: string;
  image: string[];
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    save: "save",
    amountSave: 199.00,
    availablePieces: 10,
    title: "SROK Smart Phone 128GB,",
    priceBefore:579 ,
    priceAfter: 850,
    shipping: ["FREE SHIPPING"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod26.png.svg",
      
    ]
  },
   {
    id: 2,
    new:"New",
    title: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch,512GB",
    price: 850,
    priceSec:677.889 ,
    shipping: 2.98,
    inStock: "inStock",
   
    image: [
      "./src/assets/prod27.png.svg",
    ]
  },
   {
    id: 3,
     new:"New",
    availablePieces: 5,
    title: "Samsung Galaxy X6 Ultra",
    price: 850,
    shipping: ["free shipping", "free gift"],
    inStock: "inStock",
    image: ["./src/assets/prod65.png.svg"],
    images: [
      "./src/assets/prod65.png.svg",
      "./src/assets/prod24.png.svg"
    ]
  },

   {
    id: 4,
    save: "save",
    amountSave: 199.00,
    availablePieces: 5,
    title: "Xiamoi Redmi Note 5, 64GB",
    priceBefore:579 ,
    priceAfter: 850,
    shipping: ["free shipping"],
    inStock: "contact",
    image: ["./src/assets/prod29.png.svg"],
  },
  {
    id: 5,
    availablePieces: 8,
    title: "Microsute Alpha Ultra S5 Surface 128GB 2022, Sliver",
    price: 850,
    shipping: ["free shipping"],
    inStock: "contact",
    image: ["./src/assets/prod30.png.svg"],
    images: [
      "./src/assets/prod30.png.svg",
      "./src/assets/prod10.png.svg"
    ]
  },
    {
    id: 6,
    save: "save",
    amountSave: 199.00,
    availablePieces: 108,
    title: "OPod Pro 12.9 Inch M12023, 64GB + Wifi, GPS",
    priceBefore:579 ,
    priceAfter: 850,
    shipping: ["FREE SHIPPING"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod26.png.svg",
      
    ]
  },
    {
    id: 7,
    availablePieces: 7,
    title: "Xioma Redmi Note 11 Pro256GB 2023, Black Smartphone",
    price: 850,
    priceSec:677.889 ,
    shipping: ["FREE SHIPPING"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod5.png.svg",
    ]
  },
   {
    id: 8,
   
    title: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular",
    price: 350,
  
    shipping: 2.98,
    inStock: "inStock",
   
    image: [
      "./src/assets/prod66.png.svg",
    ]
  },
   {
    id:9 ,
   
    title: "Lenovo Redmi Note 5,64GB",
    price: 850,
  
     shipping: ["FREE SHIPPING"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod67.png.svg",
    ]
  },
    {
    id: 10,
    new:"New",
    availablePieces: 7,
    title: "LG Pro Tablet 2023 LTE +Wifi, GPS Cellular",
    price: 850,
    priceSec:677.889 ,
    shipping: 2.66,
    inStock: "PRE-ORDER",
   
    image: [
      "./src/assets/prod68.png.svg",
    ]
  },
    {
    id: 11,
     new:"OUT OF STOCK",
    availablePieces: 5,
    title: "Samsung Galaxy X6 UltraLTE 4G/128 Gb, Black Smartphone",
    price: 850,
    shipping: ["free shipping", "free gift"],
    inStock: "inStock",
    image: ["./src/assets/prod69.png.svg"],
  },
    {
    id: 12,
    save: "save",
    amountSave: 199.00,
    title: "SROK Smart Phone 128GB, Oled Retina",
    priceBefore:579 ,
    priceAfter: 850,
   shipping: ["free shipping"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod26.png.svg",
    ]
  },

   {
    id: 13,
    save: "save",
    amountSave: 199.00,
    availablePieces: 150,
    title: "SROK Smart Phone 128GB,",
    priceBefore:579 ,
    priceAfter: 850,
    shipping: ["FREE SHIPPING"],
    inStock: "inStock",
   
    image: [
      "./src/assets/prod70.png.svg",
      
    ]
  },
   {
    id: 14,
     new:"New",
    title: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch,512GB",
    price: 850,
    priceSec:677.889 ,
    shipping: 2.98,
    inStock: "inStock",
   
    image: [
      "./src/assets/prod27.png.svg",
    ]
  },
   {
    id: 15,
     new:"New",
    availablePieces: 5,
    title: "Samsung Galaxy X6 Ultra",
    price: 850,
    shipping: ["free shipping", "free gift"],
    inStock: "inStock",
    image: ["./src/assets/prod65.png.svg"],
   
  },
   {
    id: 16,
    save: "save",
    amountSave: 199.00,
    availablePieces: 9,
    title: "Xiamoi Redmi Note 5, 64GB",
    priceBefore:579 ,
    priceAfter: 850,
    shipping: ["free shipping"],
    inStock: "contact",
    image: ["./src/assets/prod29.png.svg"],
  },
];
