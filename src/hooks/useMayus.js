export const useMayus = (texto) => {

    const mayusculas = () => {
            
        return texto.toUpperCase();     

    }

    const minusculas = () => {
                
        return texto.toLowerCase();

    }

    return {
        mayusculas,
        minusculas
    };

}