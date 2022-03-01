export declare class Utils {
    /**
     * Constande de aceleração em metros por segundo da gravidade
     */
    static readonly constanteAceleracaoGravitacional = 9.8;
    /**
     * Converte metros por segundos em kilometros por hora
     * @param velocidade velocidade em metros por segundo
     * @returns retorna valores em kilometros por hora
     */
    static msToKm(velocidade: number): number;
    /**
      * Converte kilometros por hora em metros por segundos
      * @param velocidade velocidade em kilometros por hora
      * @returns retorna valores em metros por segundos
      */
    static kmToMs(velocidade: number): number;
    /**
     * Converter metro em kilometros
     * @param distancia distancia a ser convertida
     */
    static ConverterMetrosParaKilometros(distanciaEmMetros: number): number;
    /**
    * Converter kilometros em metro
    * @param distancia distancia a ser convertida
    */
    static ConverterKilometrosParaMetros(distanciaEmKM: number): number;
}
