window.addEventListener("load", inicio);

function inicio() {
    var actualizarHora = function () {

        //variables para recoger los datos de la fecha actual
        var fecha = new Date(),
            hora = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        //variables para mostrar los distintos valores en los párrafos HTML
        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        //fecha
        var semana = ['Domingo', 'Lúnes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;

        //Reloj
        if (hora >= 12) {
            hora = hora - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (hora == 0) {
            hora = 12;
        }

        pHoras.textContent = hora;
        pAMPM.textContent = ampm;

        if (minutos < 10) {
            pMinutos.textContent = "0" + minutos;
        } else {
            pMinutos.textContent = minutos;
        }

        if (segundos < 10) {
            pSegundos.textContent = '0' + segundos;
        } else {
            pSegundos.textContent = segundos;
        }


    };



    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}