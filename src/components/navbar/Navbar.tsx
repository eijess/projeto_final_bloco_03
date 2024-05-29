import { ShoppingCart, User } from "@phosphor-icons/react";

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className="flex gap-3 items-center">

                <img src="https://ik.imagekit.io/eijess/mini-logo.png?updatedAt=1716989543621" className='h-12'></img>
                <p>FARMÁCIA</p>
                
            </div>

            <div className='flex items-center gap-4'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <User size={32} color="#f9ecec" />
              <ShoppingCart size={32} color="#f9ecec" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;