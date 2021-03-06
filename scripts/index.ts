import { Utils } from './utils.js';
import { Velocidades } from './velocidades.js';


class Index {
    velo: Velocidades = new Velocidades();
    /** Ex 1 */
    private txtEx1Input1: HTMLInputElement = document.getElementById('txtEx1Input1') as HTMLInputElement;
    private txtEx1Input2: HTMLInputElement = document.getElementById('txtEx1Input2') as HTMLInputElement;
    private txtEx1Result: HTMLInputElement = document.getElementById('txtEx1Result') as HTMLInputElement;
    /** Ex 2 */
    private txtEx2Input1: HTMLInputElement = document.getElementById('txtEx2Input1') as HTMLInputElement;
    private txtEx2Input2: HTMLInputElement = document.getElementById('txtEx2Input2') as HTMLInputElement;
    private txtEx2Result: HTMLInputElement = document.getElementById('txtEx2Result') as HTMLInputElement;
    /** Ex3  */
    private txtEx3Input1: HTMLInputElement = document.getElementById('txtEx3Input1') as HTMLInputElement;
    private txtEx3Input2: HTMLInputElement = document.getElementById('txtEx3Input2') as HTMLInputElement;
    private txtEx3Input3: HTMLInputElement = document.getElementById('txtEx3Input3') as HTMLInputElement;
    private txtEx3Result: HTMLInputElement = document.getElementById('txtEx3Result') as HTMLInputElement;
    /** Ex 4 */
    private txtEx4Input1: HTMLInputElement = document.getElementById('txtEx4Input1') as HTMLInputElement;
    private txtEx4Input2: HTMLInputElement = document.getElementById('txtEx4Input2') as HTMLInputElement;
    private txtEx4Result: HTMLInputElement = document.getElementById('txtEx4Result') as HTMLInputElement;
    constructor() {
        this.onExercicio1();
        this.onExercicio2();
        this.onExercicio3();
        this.onExercicio4();
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
    
    onExercicio3() {
        this.txtEx3Input1.addEventListener('change', this.exercicio3.bind(this));
        this.txtEx3Input2.addEventListener('change', this.exercicio3.bind(this));
        this.txtEx3Input3.addEventListener('change', this.exercicio3.bind(this));
        this.exercicio3();
    }

    onExercicio4() {
         
        this.txtEx4Input1.addEventListener('change', this.exercicio4.bind(this));
        this.txtEx4Input2.addEventListener('change', this.exercicio4.bind(this));
        this.exercicio4();
    }

    /**
     * Sabendo que um jogador correu uma distancia de 12000 metros em 90 minutos , 
     * qual era sua velocidade escalar media em KM era de  ?
     */
    exercicio1() {
        if (this.txtEx1Input1 && this.txtEx1Input2) {
            const km = 1000
            const horas = 60;
            const distanciaEmMetros = Number(this.txtEx1Input1.value) / km;
            const tempoEmMinutos = Number(this.txtEx1Input2.value) / horas;
            const velocidadeMedia = this.velo.velocidadeEscalarMedia(distanciaEmMetros, tempoEmMinutos)
            this.txtEx1Result.value = String(velocidadeMedia);
        }

    }

    /**
     * A distancia entre dois sensores ?? de 2 metros, eo tempo ?? medido por um curcuito eletronico
     * o tempo minimo em segundos que o motorista deve gastar para 
     * passar pelo radar conjo o limite ?? de 40km/h, sem receber uma multa ?? de ?
     */
    exercicio2() {

        //Distancia em metros
        const distancia =  Number(this.txtEx2Input1.value);
        // Velocidade em km
        let velocidade =  Number(this.txtEx2Input2.value)
        //converte velocidade em metros por segundo
        velocidade = Utils.kmToMs(velocidade)

        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distancia, velocidade)
        this.txtEx2Result.value = String(velocidadeMedia);
     
    }

    /**
     * Com base nas informa??oes a abaixo qual ?? velocidade media em KM de um nadador
     * Tempo:14 minutos 51 segundos
     * Distancia: 1500 metros
     */
    exercicio3() {
        /**
         * Convertendo metros para km 
         */
        const distancia = Utils.ConverterMetrosParaKilometros(Number(this.txtEx3Input3.value));
        // arredondando o tempo e depois dividindo por 60 minutos , teremos um quarto de hora (0,25)
        const tempo = Math.round(Number(`${this.txtEx3Input1.value}.${this.txtEx3Input2.value}`)) / 60;

        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distancia, tempo)
        this.txtEx3Result.value = String(velocidadeMedia);
         
    }

    /**
     * A ponte Rio-Niteroi tem uma extensao de 14KM,Considerando que um carro consiga atravessa-la 
     * com uma velodidade media de 72 KM/h, gastara para isso um intervalo de dempo em minutos igual a ?
     */
    exercicio4() {
         
        const compimentoPonte = Number(this.txtEx4Input1.value);
        const velocidade =   Number(this.txtEx4Input2.value);

        const tempoGasto = this.velo.velocidadeEscalarMedia(compimentoPonte, velocidade) * 60;
        this.txtEx4Result.value = String(tempoGasto);
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
        const tempoTrecho1Viagem = 2
        // distancia percorrida ate a primeira parada 
        const primeiraDistancia = velocinadeSaida * tempoTrecho1Viagem;

        //tempo parado
        const tempoParado = (30 / 60)
        const distanciaPercorridoParado = 0;
        // tempo final da corrida, 1 hora mais a metade de uma hora
        const tempoFinalViagem = 1 + (30 / 60);
        // Velocidade do outro trecho da viagem
        const velocidadeFinalViagem = 80;
        //Distancia Percorrida na segunda metade da viagem
        const segundaDistancia = tempoFinalViagem * velocidadeFinalViagem;

        const distaniaTotalPercorrido = primeiraDistancia + distanciaPercorridoParado + segundaDistancia;

        const tempoTotalViagem = tempoTrecho1Viagem + tempoParado + tempoFinalViagem


        const velocidadeMedia = this.velo.velocidadeEscalarMedia(distaniaTotalPercorrido, tempoTotalViagem)
        alert(`A velocidade media do carro foi de :${velocidadeMedia}km`)

    }

    /**
     * Uma pessoa falando ao telefone perde cerca de 4 segundos de aten????o ao volante,
     * se o carro esta a 72km por hora, qual a distancia em metros percorrida durante esse tempo
     */
    exercicio6() {

        /**
         * Tempo em segundos
         */
        const tempo = 4;
        //Converte 72km para 20ms
        const velocidadeMS = Utils.kmToMs(72);

        const distancia = this.velo.distanciaPercorrida(velocidadeMS, tempo)
        alert(`O distancia ?? de  :${distancia}m`)
    }


}

export { Index }