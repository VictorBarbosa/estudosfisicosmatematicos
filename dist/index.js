import { Utils } from './utils.js';
import { Velocidades } from './velocidades.js';
class Index {
    constructor() {
        this.velo = new Velocidades();
        /** Ex 1 */
        this.txtEx1Input1 = document.getElementById('txtEx1Input1');
        this.txtEx1Input2 = document.getElementById('txtEx1Input2');
        this.txtEx1Result = document.getElementById('txtEx1Result');
        /** Ex 2 */
        this.txtEx2Input1 = document.getElementById('txtEx2Input1');
        this.txtEx2Input2 = document.getElementById('txtEx2Input2');
        this.txtEx2Result = document.getElementById('txtEx2Result');
        this.onExercicio1();
        this.onExercicio2();
    }
    onExercicio1() {
        this.txtEx1Input1.addEventListener('change', this.exercicio1.bind(this));
        this.txtEx1Input2.addEventListener('change', this.exercicio1.bind(this));
        this.exercicio1();
    }
    onExercicio2() {
        this.txtEx2Input1.addEventListener('change', this.exercicio2.bind(this));
        this.txtEx2Input2.addEventListener('change', this.exercicio2.bind(this));
        this.exercicio2();
    }
    /**
     * Sabendo que um jogador correu uma distancia de 12000 metros em 90 minutos ,
     * qual era sua velocidade escalar media em KM era de  ?
     */
    exercicio1() {
        if (this.txtEx1Input1 && this.txtEx1Input2) {
            const km = 1000;
            const horas = 60;
            const distanciaEmMetros = Number(this.txtEx1Input1.value) / km;
            const tempoEmMinutos = Number(this.txtEx1Input2.value) / horas;
            const velocidadeMedia = this.velo.velocidadeEscalarMedia(distanciaEmMetros, tempoEmMinutos);
            this.txtEx1Result.value = String(velocidadeMedia);
        }
    }
    /**
     * A distancia entre dois sensores é de 2 metros, eo tempo é medido por um curcuito eletronico
     * o tempo minimo em segundos que o motorista deve gastar para
     * passar pelo radar conjo o limite é de 40km/h, sem receber uma multa é de ?
     */
    exercicio2() {
        //Distancia em metros
        const distancia = Number(this.txtEx2Input1.value);
        // Velocidade em km
        let velocidade = Number(this.txtEx2Input2.value);
        //converte velocidade em metros por segundo
        velocidade = Utils.kmToMs(velocidade);
        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distancia, velocidade);
        this.txtEx2Result.value = String(velocidadeMedia);
    }
    /**
     * Com base nas informaçoes a abaixo qual é velocidade media em KM de um nadador
     * Tempo:14 minutos 51 segundos
     * Distancia: 1500 metros
     */
    exercicio3() {
        /**
         * Convertendo metros para km
         */
        const distancia = Utils.ConverterMetrosParaKilometros(1500);
        // arredondando o tempo e depois dividindo por 60 minutos , teremos um quarto de hora (0,25)
        const tempo = Math.round(14.51) / 60;
        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distancia, tempo);
        alert(`A velocidade do nadador era de   :${velocidadeMedia}km`);
    }
    /**
     * A ponte Rio-Niteroi tem uma extensao de 14KM,Considerando que um carro consiga atravessa-la
     * com uma velodidade media de 72 KM/h, gastara para isso um intervalo de dempo em minutos igual a ?
     */
    exercicio4() {
        const compimentoPonte = 14;
        const velocidade = 72;
        const tempoGasto = this.velo.velocidadeEscalarMedia(compimentoPonte, velocidade);
        alert(`O tempo é de  :${Math.round(tempoGasto * 60)}ms`);
    }
    /**
     * Uma familia viaja a 100km por 2hora, eles param em um posto de gasolinas por 30 minutos,
     * e continuam a viagem por mais 1:30, agora com a nova velocidade constante de 80 km,
     * qual foi a velocidade media total percorrida
     *
     */
    exercicio5() {
        //Primeira velocidade durante 2 horas
        const velocinadeSaida = 100;
        // tempo ate a primeira parada
        const tempoTrecho1Viagem = 2;
        // distancia percorrida ate a primeira parada 
        const primeiraDistancia = velocinadeSaida * tempoTrecho1Viagem;
        //tempo parado
        const tempoParado = (30 / 60);
        const distanciaPercorridoParado = 0;
        // tempo final da corrida, 1 hora mais a metade de uma hora
        const tempoFinalViagem = 1 + (30 / 60);
        // Velocidade do outro trecho da viagem
        const velocidadeFinalViagem = 80;
        //Distancia Percorrida na segunda metade da viagem
        const segundaDistancia = tempoFinalViagem * velocidadeFinalViagem;
        const distaniaTotalPercorrido = primeiraDistancia + distanciaPercorridoParado + segundaDistancia;
        const tempoTotalViagem = tempoTrecho1Viagem + tempoParado + tempoFinalViagem;
        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distaniaTotalPercorrido, tempoTotalViagem);
        alert(`A velocidade media do carro foi de :${velocidadeMedia}km`);
    }
    /**
     * Uma pessoa falando ao telefone perde cerca de 4 segundos de atenção ao volante,
     * se o carro esta a 72km por hora, qual a distancia em metros percorrida durante esse tempo
     */
    exercicio6() {
        /**
         * Tempo em segundos
         */
        const tempo = 4;
        //Converte 72km para 20ms
        const velocidadeMS = Utils.kmToMs(72);
        const distancia = this.velo.distanciaPercorrida(velocidadeMS, tempo);
        alert(`O distancia é de  :${distancia}m`);
    }
}
export { Index };
