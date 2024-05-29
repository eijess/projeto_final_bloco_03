
function Home() {
    return (
        <>
        <div className='h-screen bg-cyan-200 flex justify-center'>
          <div className='container grid grid-cols-2 text-black'>
            <div className='flex flex-col gap-4 items-center justify-center py-4'>
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-lg'>Aqui você encontra Medicamentos e Cosméticos.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
                <img src="https://ik.imagekit.io/eijess/img.png?updatedAt=1716989544128" 
                alt="Imagem da Página Home" 
                className="h-3/3"
                />
            </div>
        </div>
      
      </>
    );
}

export default Home;