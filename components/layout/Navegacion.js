import React from 'react';
import Link from 'next/link';

const Navegacion = () => {
    return ( 
        <>
        <Link href='/'>Inicio</Link>
        <Link href='/'>Populares</Link>
        <Link href='/'>Nuevo Producto</Link>
        </>
     );
}
 
export default Navegacion;