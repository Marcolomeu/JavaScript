import historicoInflacao from "../dados/dados";

export const historicoIPCA = () => {
    return historicoInflacao;
}

export const id_IPCA_BUSCAR = (id) => {
    const idIPCA = parseInt(id);
    return historicoInflacao.find(especifico => especifico.id === idIPCA)
}