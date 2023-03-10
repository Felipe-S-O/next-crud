import Cliente from "../core/Cliente"
import { iconeIdit, iconeLixo } from "./icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteExcluido?: (cliente: Cliente) => void
    clienteSelecionado?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado


    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>

        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-400'}`}>
                    <th className="text-left p-4">{cliente.id}</th>
                    <th className="text-left p-4">{cliente.nome}</th>
                    <th className="text-left p-4">{cliente.idade}</th>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">

                {props.clienteSelecionado ? (
                    <button onClick={()=> props.clienteSelecionado?.(cliente)}
                     className="flex justify-center items-center
                         text-green-600 rounded-full p-2 m-1
                         hover:bg-purple-50 "
                    >{iconeIdit}
                    </button>) : false}

                {props.clienteExcluido ? (
                    <button onClick={()=> props.clienteExcluido?.(cliente)}
                     className="flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50 " >
                        {iconeLixo}
                    </button>) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className=" text-yellow-100 bg-gradient-to-r from-purple-500 to-purple-800">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}