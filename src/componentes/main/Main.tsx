import Filme from "../filme/Filme";
import './Main.css'
export default function Main(){
    let texto = "Guilherme"
    function mudaTexto(){
        console.log("tere")
        texto = "terenciani"
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
                <Filme titulo="Barbie" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/barbie.png"
                        />
                <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/transformes.jpeg"
                        />
                <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/transformes.jpeg"
                        />
                <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/transformes.jpeg"
                        />
                <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/transformes.jpeg"
                        />
                <Filme titulo="Transformers" sinopse="Depois de ser expulsa da 
                        Barbieland por ser uma boneca 
                        de aparência menos do que 
                        perfeita, Barbie parte para o 
                        mundo humano em busca da 
                        verdadeira felicidade."
                        imagem="/transformes.jpeg"
                        />

            </main>
        </>
    )
}