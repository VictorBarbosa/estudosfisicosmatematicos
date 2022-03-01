export class Velocidades {
    /**
     * Velocidade escalar media, mede a velocidade entre origem e destino
     * não se preocupa com direção e sentido,se preocupa apenas com a distancia percorrida,
     *
     * @param distacia Distancia percorrida
     * @param tempo Delta T(ΔT) tempo de percurso
     * @returns Velocidade escalar media
     */
    velocidadeEscalarMedia(distacia, tempo) {
        return distacia / tempo;
    }
    /**
     * Pega o tempo gasto ,distancia divido por velocidade é igual a tempo
     * @param distacia
     * @param velocidade
     * @returns
     */
    tempoGasto(distacia, velocidade) {
        return distacia / velocidade;
    }
    /**
     * Distancia percorrida em intervalo de tempo
     * @param velocidade velocidade
     * @param tempo tempo
     * @returns retona distancia percorrida em intervalo de tempo
     */
    distanciaPercorrida(velocidade, tempo) {
        return velocidade * tempo;
    }
    /**
     * Velocidade vetorial media, mede a velocidade entre origem e destino
     * porem se origem e destino forem os mesmo a velocidade sera igual a 0
     *
     * @param origem ponto de origem
     * @param destino ponto de destino
     * @param tempo tempo que de percurso
     * @returns retorna velocidade vetoria media
     */
    velocidadeVetorialMedia(origem, destino, tempo) {
        return (destino - origem) / tempo;
    }
    velocidadeInstantanea(si, s) {
        return 0;
    }
}
