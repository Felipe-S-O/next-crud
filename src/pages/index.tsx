import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Felipe', 25, '1'),
    new Cliente('Luci', 29, '2'),
    new Cliente('Fabiana', 14, '3')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
    console.log(cliente.nome)
  }

  function clienteExcluid(cliente: Cliente) {
    console.log('Excluir... ' + cliente.nome)
  }

  function novoCliente() {
    console.log(cliente)
    setCliente(Cliente.vazio)
    setVisivel('form')
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }
 
 
  return (
    <div className={` flex h-screen justify-center items-center 
    bg-gradient-to-r from-purple-500  to-blue-500 `}>

      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} className=" mb-4">
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluid}
            />
          </>
        ) : <Formulario 
        cliente={cliente}
        clienteMudo={salvarCliente}
        cancelado={() => setVisivel('tabela')} />}

      </Layout>
    </div>
  )
}
