import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                Authorization: token
            },
            body: JSON.stringify({ products })
        })
        return response.json();
    }
    catch (error: any) {
        Swal.fire({
            icon: "error",
            title: 'Falló al crear una orden',
            width: 400,
            padding: "3em"
        })
        throw new Error(error)
    }
}



export const getOrders = async (token: string) => {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: 'GET',
            cache:'no-store',
            headers: {
                'Content-type': "application/json",
                Authorization: token
            }
        })
        return response.json();
    }
    catch (error: any) {
        Swal.fire({
            icon: "error",
            title: 'Falló al obtener las órdenes de compra',
            width: 400,
            padding: "3em"
        })
        throw new Error(error)
    }
}