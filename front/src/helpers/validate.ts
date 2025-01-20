import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "@/interfaces/types";


export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginErrors = {}
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El email no es válido"
    }
    else if (values.email && values.password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(values.password)){
        errors.password = "Mínimo 8 caracteres, con al menos una letra y un número"
    }
    return errors;
}

export function validateRegisterForm (values: IRegisterProps){
const errors:IRegisterErrors = {}
if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El email no es valido"
}
else if (values.email && values.password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(values.password)){
    errors.password = "Mínimo 8 caracteres, con al menos una letra y un número"
}
return errors;
} 