import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname, origin } = request.nextUrl;

    if ((pathname === "/dashboard" || pathname === "/carritoCompra") && !request.cookies.get("userData")?.value) {
        const loginURL = new NextURL("/login", origin)
        return NextResponse.redirect(loginURL)
    } if ((pathname === "/login" || pathname === "/register") && request.cookies.get("userData")?.value) {
        const userURL = new NextURL("/", origin)
        return NextResponse.redirect(userURL)
    } 
    if ((pathname === "/oneComponent") && !request.cookies.get("userData")?.value) {
        const userURL = new NextURL("/", origin)
        return NextResponse.redirect(userURL)
   
     } else {
        return NextResponse.next(); //DEJO PASAR LA PETICION Y ACCEDO A LA RUTA 
    }
}