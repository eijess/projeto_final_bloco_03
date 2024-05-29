import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear() // atualiza o ano automaticamente

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia da Vila | Copyright &copy; {data}</p>
            <p className='text-lg'>Acesse as nossas redes sociais</p>
            <div className='flex gap-2'>

            <GithubLogo size={32} color="#f9ecec" />
            <LinkedinLogo size={32} color="#f9ecec" />

            </div>
          </div>
        </div>
      </>
  )
}

export default Footer