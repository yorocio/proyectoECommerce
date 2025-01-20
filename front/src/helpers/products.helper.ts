import { IProduct } from "@/interfaces/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getProductsDB = async (): Promise<IProduct[]> => {
    try {
        const response = await fetch(`${APIURL}/products`, {
            next: { revalidate: 1200 }
        })
        const products = await response.json()
        return products;
    }
    catch (error: any) {
        throw new Error(error)
    }
}

export const getProductsDBById = async (id: string): Promise<IProduct> => {
    try {
        const products: IProduct[] = await getProductsDB(); //TOMO EL ARREGLO DE PRODUCTOS DE LA BASE DE DATOS
        const productFiltered = products.find( // FILTRO CON EL METODO FIND() REVISANDO C/U DE LOS PRODUCTOS DE ESE ARRAY 
            (product) => product.id.toString() === id) //Y SE FIJA SI EL PRODUCT ID ES = AL ID QUE PASAMOS EN LA FUNCION - PASA A STING PARA PODER COMPARARLO CON EL QUE RECIBO

        if (!productFiltered) throw new Error('El producto no fue encontrado')

        return productFiltered; //SI ENCUENTRA EL PRODUCTO, LO RETORNA.
    }
    catch (error: any) {
        throw new Error(error)
    }
}

export const getProductsByCategoryOrName = async (categoryIdOrName: string): Promise<IProduct[]> => {
    try {
        const products: IProduct[] = await getProductsDB();

        let productFiltered = products.filter((product) => product.categoryId.toString() === categoryIdOrName)

        if (!productFiltered.length) {
            productFiltered = products.filter((product) => product.name.toLowerCase().includes(categoryIdOrName.toLowerCase()))

            if (!productFiltered.length) {
                console.error("Producto no encontrado")
            }
        }
        return productFiltered;
    }
    catch (error: any) {
        throw new Error(error)
    }
}
