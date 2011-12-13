function color(i) {
    var r = i / 4;
    var b = 128 - i / 8;
    var g = 128;

    var hexR = Math.round(r).toString(16);
    if (hexR.length === 1) hexR = '0' + hexR;
    var hexB = Math.round(b).toString(16);
    if (hexB.length === 1) hexB = '0' + hexB;
    var hexG = Math.round(g).toString(16);
    if (hexG.length === 1) hexG = '0' + hexG;

    return  "#" + hexR + hexG + hexB;
}

function mainseq(cbMilestone) {
    var canvas = document.getElementById("mainseq");
    var context = canvas.getContext("2d");
    canvas.width = 960;
    canvas.height = 512;
    for(var i = 0; i< 1024; i++) {
        context.fillStyle = color(i);
        context.fillRect(i - 110, 512 - Math.round(i * i * i * i / 2 / 1024 / 1024 / 1024), 10, 10);
    }
    $('#star').css('top', '420px');
    $('#star').css('left', '390px');
    $('#planet').css('top', '410px');
    $('#planet').css('left', '620px');
    $('#weather').css('top', '280px');
    $('#weather').css('left', '620px');
    $('#plant').css('top', '280px');
    $('#plant').css('left', '780px');
    $('#animal').css('top', '160px');
    $('#animal').css('left', '720px');
    $('#evolve').css('top', '120px');
    $('#evolve').css('left', '870px');
}

function logo() {
    var canvas = document.getElementById("logo");
    var context = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    context.beginPath();
    context.arc(74, 72, 49, 0, 2 * Math.PI, false);
    context.strokeStyle = "#ffffff";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(39, 40, 7, 0, 2 * Math.PI, false);
    context.fillStyle = "#ffff88";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(79, 120, 10, 0, 2 * Math.PI, false);
    context.fillStyle = "#8888ff";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(121, 60, 5, 0, 2 * Math.PI, false);
    context.fillStyle = "#888888";
    context.fill();
    context.closePath();
}

$(function() {
    logo();
    mainseq();
    $('#mainseq').css('z-index', '-100');
});
