import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdeDePortas, setqtdeDePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Mounty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
          value={qtdeDePortas} 
          onChange={(novaQuantidade => setqtdeDePortas(novaQuantidade))} 
          text={'Qtde Portas?'}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica 
        value={comPresente} 
        onChange={(novaQuantidade => setComPresente(novaQuantidade))} 
        text={'Porta com presente?'}
        />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdeDePortas}/${comPresente}`}>
            <h2 className={styles.link}>
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
