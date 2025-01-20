import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experimenta poder y elegancia con el iPhone 11: captura momentos impresionantes con su sistema de doble cámara, disfruta de un rendimiento excepcional y sumérgete en una brillante pantalla Liquid Retina. ¡Descubre un mundo de posibilidades en la palma de tu mano!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Adopta la eficiencia y sofisticación con el MacBook Air: su diseño liviano se combina con un rendimiento potente, la impresionante pantalla Retina da vida a tu trabajo, y la batería de larga duración te mantiene productivo dondequiera que vayas. Eleva tu experiencia informática con el MacBook Air.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_648428-MLA46516517286_062021-O.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Libera tu creatividad y productividad con el iPad Pro: su potente rendimiento, impresionante pantalla Liquid Retina y batería de larga duración hacen del iPad Pro la herramienta perfecta para trabajar y disfrutar. Transforma tus ideas en realidad con el iPad Pro.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_994384-MLU77738266205_072024-O.webp",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Mantente conectado y saludable con el Apple Watch Series 6: registra tus entrenamientos, monitorea tu salud y mantente en contacto con las personas y la información que más te importan. Experimenta el futuro de la salud y el bienestar con el Apple Watch Series 6.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_816100-MLA72067667918_102023-O.webp",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Sumérgete en el sonido con los AirPods Pro: la cancelación activa de ruido, el modo de transparencia y el ajuste personalizable hacen de los AirPods Pro el compañero perfecto para música, llamadas y todo lo demás. Eleva tu experiencia de audio con los AirPods Pro.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_779146-MLA53778959612_022023-O.webp",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Eleva la experiencia de audio en tu hogar con el HomePod mini: sonido envolvente, asistente inteligente y centro de control para tu hogar hacen del HomePod mini la adición perfecta para tu casa. Disfruta de un mundo de música, noticias y más con el HomePod mini.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
