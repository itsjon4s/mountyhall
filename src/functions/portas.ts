import PortaModel from "../models/porta";

export function criarPortas(qtde: number, comPresente: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const num = i + 1;
        const temPresente = num == comPresente
        return new PortaModel(num, temPresente)
    })
}

export function atualizarPortas (portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero;
        
        if(igualAModificada) {
            return portaModificada
        } else { 
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}