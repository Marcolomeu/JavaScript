import historicoInflacao from "../dados/dados";

export const historicoIPCA = () => {
    return historicoInflacao;
}

export const id_IPCA_BUSCAR = (idIPCA) => {
    return historicoInflacao.find(especifico => especifico.id === idIPCA);
}