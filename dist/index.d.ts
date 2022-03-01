import { Velocidades } from './velocidades.js';
declare class Index {
    velo: Velocidades;
    /** Ex 1 */
    private txtEx1Input1;
    private txtEx1Input2;
    private txtEx1Result;
    /** Ex 2 */
    private txtEx2Input1;
    private txtEx2Input2;
    private txtEx2Result;
    constructor();
    onExercicio1(): void;
    onExercicio2(): void;
    /**
     * Sabendo que um jogador correu uma distancia de 12000 metros em 90 minutos ,
     * qual era sua velocidade escalar media em KM era de  ?
     */
    exercicio1(): void;
    /**
     * A distancia entre dois sensores é de 2 metros, eo tempo é medido por um curcuito eletronico
     * o tempo minimo em segundos que o motorista deve gastar para
     * passar pelo radar conjo o limite é de 40km/h, sem receber uma multa é de ?
     */
    exercicio2(): void;
    /**
     * Com base nas informaçoes a abaixo qual é velocidade media em KM de um nadador
     * Tempo:14 minutos 51 segundos
     * Distancia: 1500 metros
     */
    exercicio3(): void;
    /**
     * A ponte Rio-Niteroi tem uma extensao de 14KM,Considerando que um carro consiga atravessa-la
     * com uma velodidade media de 72 KM/h, gastara para isso um intervalo de dempo em minutos igual a ?
     */
    exercicio4(): void;
    /**
     * Uma familia viaja a 100km por 2hora, eles param em um posto de gasolinas por 30 minutos,
     * e continuam a viagem por mais 1:30, agora com a nova velocidade constante de 80 km,
     * qual foi a velocidade media total percorrida
     *
     */
    exercicio5(): void;
    /**
     * Uma pessoa falando ao telefone perde cerca de 4 segundos de atenção ao volante,
     * se o carro esta a 72km por hora, qual a distancia em metros percorrida durante esse tempo
     */
    exercicio6(): void;
}
export { Index };
