import { ILoginProps, IRegisterProps } from "@/interfaces/types";
import Swal from "sweetalert2";


const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const register = async (userData: IRegisterProps) => {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            return response.json()
        } else {
            Swal.fire({
                icon: "error",
                title: 'Falló al registrarse',
                width: 400,
                padding: "3em"
            })
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const login = async (userData: ILoginProps) => {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            return await response.json()
        } else {
            Swal.fire({
                icon: "error",
                title: 'Error al loguearte',
                width: 400,
                padding: "3em"
            })
            return null;
        }
    } catch (error: any) {
        console.error("Error en la solicitud de login:", error);
        Swal.fire({
            icon: "error",
            title: 'Error en el servidor',
            text: 'Intenta de nuevo más tarde.',
            width: 400,
            padding: "3em"
    })
    return null;
}
}