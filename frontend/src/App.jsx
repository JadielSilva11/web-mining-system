import {useState} from "react"
import Equipamento from "./pages/equipamento/Equipamento"
import Menu from "./components/Menu"

function App(){
const [pagina, setPagina] = useState("inicio")
const [nome,setNome] = useState("")
const [setor,setSetor] = useState("")
const [equipamentos,setEquipamentos] = useState([])

function cadastrar(){
    const novoEquipamento = {
        nome: nome, 
        setor:setor
    }
    setEquipamentos([...equipamentos,novoEquipamento])
    setNome("")
    setSetor("")

    window.alert("Item cadastrado com sucesso!")
}

return (
    <div>

        <Menu mudarPagina={setPagina}/>
        <hr/>

        {
            pagina === "inicio" && (
                <div>
                    <h1>Sistema de Controle de Equipamentos</h1>
                </div>
            )
        }

        {
            pagina === "cadastro" && (
                <div>
                    <h1>Cadastro de Equipamentos</h1>
                    <input
                    type="text"
                    placeholder="Nome do Equipamento"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />

                    <br/> <br/>

                    <input
                    type="text"
                    placeholder="Setor do equipamento"
                    value={setor}
                    onChange={(e) => setSetor(e.target.value)}
                    />

                    <br /><br />
                    <button onClick={cadastrar}> Cadastrar </button>
                </div>
            )
        }

        {
            pagina === "relatorio" && (
                <div>
                    <h2>Relatório de equipamentos</h2>
                    <p>Total de equipamentos cadastrados:
                        {equipamentos.length}
                    </p>

                    {
                        equipamentos.map((equipamento,index) => (
                        <Equipamento
                        key={index}
                        nome={equipamento.nome}
                        setor={equipamento.setor}
                        />
                        ))
                    }
                </div>
            )
        }

    </div>
)

}
export default App