export class Utils {
    /**
     * Converte metros por segundos em kilometros por hora
     * @param velocidade velocidade em metros por segundo
     * @returns retorna valores em kilometros por hora
     */
    static msToKm(velocidade) {
        return velocidade * 3.6;
    }
    /**
      * Converte kilometros por hora em metros por segundos
      * @param velocidade velocidade em kilometros por hora
      * @returns retorna valores em metros por segundos
      */
    static kmToMs(velocidade) {
        return velocidade / 3.6;
    }
    /**
     * Converter metro em kilometros
     * @param distancia distancia a ser convertida
     */
    static ConverterMetrosParaKilometros(distanciaEmMetros) {
        return distanciaEmMetros / 1000;
    }
    /**
    * Converter kilometros em metro
    * @param distancia distancia a ser convertida
    */
    static ConverterKilometrosParaMetros(distanciaEmKM) {
        return distanciaEmKM * 1000;
    }
}
/**
 * Constande de aceleração em metros por segundo da gravidade
 */
Utils.constanteAceleracaoGravitacional = 9.8;
