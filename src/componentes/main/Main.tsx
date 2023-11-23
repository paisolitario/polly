import { useEffect, useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
import axios from 'axios'
type FilmesType = {
    id: number,
    titulo:string,
    descricao:string,
    imagem:string
};
const URL_API = 'http://localhost:3000/filmes'
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")
    const [filmes, setFilmes] = useState<FilmesType[]>([]);


    useEffect(() =>{
        const buscaFilme = async() => {
            try{
                const resposta = await axios.get<FilmesType[]>(URL_API);
                setFilmes(resposta.data);
            }catch(error){
                console.log('erro')
            }
        };
        buscaFilme();
    },[]);


    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
               
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {filmes
                .filter((filme)=>filme.titulo.toLowerCase().includes(texto.toLowerCase()))
                .map((filme:FilmesType)=>
                    <Filme key={filme.id}
                           titulo={filme.titulo}
                           descricao={filme.descricao}
                           imagem={filme.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}

