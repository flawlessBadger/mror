function write() {
    // console.log("start");
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("a").innerHTML = this.responseText;
            document.getElementById("b").innerHTML = this.responseText;
            document.getElementById("c").innerHTML = this.responseText;
            write();
        } 
    };
    xmlhttp.open("GET", "loaders/mysql_load.php", true);
    xmlhttp.send();


}

function reloadPage() {
    // alert("watafack");
    // reload(true);
    // window.location.href = 'http://localhost';
    // location.reload(true);
    // $.ajax({
    //     url: window.location.href,
    //     headers: {
    //         "Pragma": "no-cache",
    //         "Expires": -1,
    //         "Cache-Control": "no-cache"
    //     }
    // }).done(function () {
    //     window.location.reload(true);
    // });
    window.location.replace('http://localhost');
}

// var swoosh = new Audio("res/Swooshing.wav");
function playSound() {
    // console.log("sound");
    var sample = document.getElementById("music");
    sample.play();
}

var state = 0;
function mover() {
    // console.log("starth");
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = parseInt(this.responseText);

            // console.log("movement");
            if (response == 0) {


                if(state ==0){
                    $('#feed').css('top','0');
                    $('#weather').css('top','-2560px');
                    state--;
                } else if(state==1){
                    $('#feed').css('top','1280px');
                    $('#weather').css('top','-1280px');
                    state--;

                }else if(state==2){
                    $('#weather').css('top','0');
                    $('#status').css('top','-640px');
                    state--;
                }else if(state<= -1){
                    $('#feed').css('top',((state)*640)+'px');
                    state--;
                }
                // if (state == -1) {

                //     var m = $("#feed").offset().top + 1280;
                //     $("#feed").animate({ top: m }, 2000);
                //     m = $("#weather").offset().top + 1280;
                //     $("#weather").animate({ top: m }, 2000);
                //     state++;
                // } else if (state < -1) {
                //     var m = $("#feed").offset().top + 400;
                //     $("#feed").animate({ top: m }, 700);
                //     m = $("#weather").offset().top + 400;
                //     $("#weather").animate({ top: m }, 700);
                //     state++;
                // }

                // var m = $("#feed").offset().top + 400;
                // $("#feed").animate({ top: m }, 700);
                // console.log(m);
            } else if (response == 2) {

                if(state == -1){
                    $('#feed').css('top','1280px');
                    $('#weather').css('top','-1280px');
                    state++;
                }else if(state ==0){
                    $('#feed').css('top','2560px');
                    $('#weather').css('top','0');
                    state++;
                }else if(state ==1){
                    // $('#feed').css('top','2560px');
                    $('#weather').css('top','640px');
                    $('#status').css('top','0px');
                    state++;
                } else if(state<-1){
                    $('#feed').css('top',((state+1)*640)+'px');
                    state++;
                }
                // if (state == 0) {
                //     var m = $("#feed").offset().top - 1280;
                //     $("#feed").animate({ top: m }, 2000);
                //     m = $("#weather").offset().top - 1280;
                //     $("#weather").animate({ top: m }, 2000);
                //     state--;
                // } else if (state < 0) {
                //     var m = $("#feed").offset().top - 400;
                //     $("#feed").animate({ top: m }, 700);
                //     m = $("#weather").offset().top - 400;
                //     $("#weather").animate({ top: m }, 700);
                //     state--;
                // }
            } else if(response == 3) {
                setTimeout(reloadPage, 50);

            }
            mover();
        }
    };
    xmlhttp.open("GET", "loaders/move_loader.php", true);
    xmlhttp.send();


}

function tempload() {
    // console.log("temps");
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var n = this.responseText.indexOf("$");
            var temp = this.responseText.substring(0, n);
            var hum = this.responseText.substring(n + 1, this.responseText.length);
            document.getElementById("intemp").innerHTML = temp + '&deg;C';
            document.getElementById("inhum").innerHTML = hum + '%';


        }
    };
    xmlhttp.open("GET", "loaders/temp_loader.php", true);
    xmlhttp.send();
}

function statusload() {
    // console.log("temps");
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

         // console.log(this.responseText);
         document.getElementById("status").innerHTML = this.responseText;

     }
 };
 xmlhttp.open("GET", "loaders/status_loader.php", true);
 xmlhttp.send();
}

function move() {
    playSound();
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // var response = parseInt(this.responseText)
            // console.log(this.responseText);
            //     if (this.responseText == "0") {
            //   playSound();
            //         // var m = $("#mockup").offset().top() + 50;
            //         // $("#mockup").animate({ left: m.toString }, 200);
            //     setTimeout(move,2000);
            //     } else if (this.responseText == "2") {
            //          playSound();
            //         // var m = $("#mockup").offset().top() - 50;
            //         // $("#mockup").animate({ left: m.toString }, 200);
            //     setTimeout(move,2000 );
            //     }
            //     else{
            //     setTimeout(move,2000 );
            //     }
        }
    };
    xmlhttp.open("GET", "loaders/move_loader.php", true);
    xmlhttp.send();
    setTimeout(move, 3000);
}


$(document).ready(function () {
    // setTimeout(move, 3000);

    setTimeout(mover, 300);
    // setTimeout(playSound, 500);
    // setTimeout(tempload, 1000);
    statusload();
    // $("#mockup").delay(300).animate({ left: '0' }, 1000, "easeOutCubic");
    $('.grid').masonry({
        // options
        originLeft: true,
        itemSelector: '.grid-item',
        columnWidth: 328
    });




    $.simpleWeather({
        woeid: '821782', //2357536
        location: '',
        unit: 'C',
        success: function (weather) {
            console.log(weather.temp + '&deg;' + weather.units.temp);
            var html = '<h2 id="maindeg">' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<h2 id="city"><i class="icon-'+weather.code+'"></i></h2>';
            html += '<h2 id="intemp"></h2><h2 id="inhum"></h2>';

            html += '<img id="house" src="res/house.png">';
            html += '<div id="weatherline"></div>    <H1 id="time" ></H1><H5 id="date" ></H5>';
            html += '</div><div class="fl-1"></div><div class="fl-2"></div><div class="fl-3"></div><div class="fl-4"></div>';
            html += '<div class="forecast for-zero"><p class="icon"><b class="icon-'+weather.forecast[0].code+'"></b></p><p class="day">'+weather.forecast[0].day+'<p class="left">H</br>'+weather.forecast[0].high+'&deg;' + weather.units.temp + '</p><p class="right">L</br>'+weather.forecast[0].low+'&deg;' + weather.units.temp + '</p></p><div class="div"></div></div>';
            html += '<div class="forecast for-one"><p class="icon"><b class="icon-'+weather.forecast[1].code+'"></b></p><p class="day">'+weather.forecast[1].day+'<p class="left">H</br>'+weather.forecast[1].high+'&deg;' + weather.units.temp + '</p><p class="right">L</br>'+weather.forecast[0].low+'&deg;' + weather.units.temp + '</p></p><div class="div"></div></div>';
            html += '<div class="forecast for-two"><p class="icon"><b class="icon-'+weather.forecast[2].code+'"></b></p><p class="day">'+weather.forecast[2].day+'<p class="left">H</br>'+weather.forecast[2].high+'&deg;' + weather.units.temp + '</p><p class="right">L</br>'+weather.forecast[0].low+'&deg;' + weather.units.temp + '</p></p><div class="div"></div></div>';
            html += '<div class="forecast for-three"><p class="icon"><b class="icon-'+weather.forecast[3].code+'"></b></p><p class="day">'+weather.forecast[3].day+'<p class="left">H</br>'+weather.forecast[3].high+'&deg;' + weather.units.temp + '</p><p class="right">L</br>'+weather.forecast[0].low+'&deg;' + weather.units.temp + '</p></p><div class="div"></div></div>';
            html += '<div class="forecast for-four"><p class="icon"><b class="icon-'+weather.forecast[4].code+'"></b></p><p class="day">'+weather.forecast[4].day+'<p class="left">H</br>'+weather.forecast[4].high+'&deg;' + weather.units.temp + '</p><p class="right">L</br>'+weather.forecast[0].low+'&deg;' + weather.units.temp + '</p></p><div class="div"></div></div>';
            html += '<p class="sunrise">'+weather.sunrise+'<b class="icon-sunrise bigger"></b></p><p class="sunset">'+weather.sunset+'<b class="icon-sunset bigger"></b></p>';
            html += '<p class="wind"><b class="icon-'+weather.wind.direction+'"></b></p>';
            html += '<p class="wind-speed">'+weather.wind.speed+'</br>'+weather.units.speed+'</p>';
            html += '<p class="additional">'+weather.humidity+'</br></p><p class="additional percent">%<b class="icon-hum humicon"></p></b></p>';

// <div class="forecast for-one"></div><div class="forecast for-two"></div><div class="forecast for-three"></div><div class="forecast for-four"></div>';


            // $("#maindeg").text(weather.temp + '&deg;' + weather.units.temp);

            $("#weather").html(html);
            tempload();
        },
    });

    setInterval(GetClock,1000);

    // document.getElementById("a").innerHTML = $(window).width() + "<br>" + $(window).height();
});

var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");



function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
    var nhour=d.getHours(),nmin=d.getMinutes();
    if(nmin<=9) nmin="0"+nmin;

    document.getElementById('time').innerHTML=""+nhour+":"+nmin+"";

    document.getElementById('date').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
}



