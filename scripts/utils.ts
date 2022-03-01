export class Utils {

    /**
     * Constande de aceleração em metros por segundo da gravidade
     */
    public static readonly constanteAceleracaoGravitacional = 9.8;


    /**
     * Converte metros por segundos em kilometros por hora
     * @param velocidade velocidade em metros por segundo
     * @returns retorna valores em kilometros por hora
     */
    public static msToKm(velocidade: number): number {
        return velocidade * 3.6;
    }

    /**
      * Converte kilometros por hora em metros por segundos
      * @param velocidade velocidade em kilometros por hora
      * @returns retorna valores em metros por segundos
      */
    public static kmToMs(velocidade: number): number {
        return velocidade / 3.6;
    }

    /**
     * Converter metro em kilometros
     * @param distancia distancia a ser convertida
     */
    public static ConverterMetrosParaKilometros(distanciaEmMetros: number): number {
        return distanciaEmMetros / 1000;
    }

    /**
    * Converter kilometros em metro
    * @param distancia distancia a ser convertida
    */
    public static ConverterKilometrosParaMetros(distanciaEmKM: number): number {
        return distanciaEmKM * 1000;
    }

}