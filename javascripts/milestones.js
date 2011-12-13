function load(cbMainseq, cbMilestone) {
    var opts = {
        lines: 12, // The number of lines to draw
        length: 7, // The length of each line
        width: 4, // The line thickness
        radius: 10, // The radius of the inner circle
        color: '#ffffff', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false // Whether to render a shadow
    };
    var spinner = new Spinner(opts).spin(document.getElementById('mainseq'));

    var counter = 0;
    $('.milestone').load(function() {
        counter++;
        if (counter===6) {
            spinner.stop();
            $('#mainseq').css('z-index', '-100');
            cbMainseq(cbMilestone);
        }
    });

    var images = [
        '/images/star.png',
        '/images/planet.png',
        '/images/weather.png',
        '/images/plant.png',
        '/images/animal.png',
        '/images/evolve.png'
    ];
    $.each($('.milestone'), function(index, elem) {
        elem.src = images[index];
    });

}

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
    canvas.width = 1024;
    canvas.height = 512;
    for(var i = 0; i< 1024; i++) {
        context.fillStyle = color(i);
        context.fillRect(i, 512 - Math.round(i * i * i * i / 2 / 1024 / 1024 / 1024), 10, 10);
    }

    context.beginPath();
    context.arc(75, 242, 49, 0, 2 * Math.PI, false);
    context.strokeStyle = "#ffffff";
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(40, 210, 7, 0, 2 * Math.PI, false);
    context.fillStyle = "#ffff88";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(80, 290, 10, 0, 2 * Math.PI, false);
    context.fillStyle = "#8888ff";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(122, 230, 5, 0, 2 * Math.PI, false);
    context.fillStyle = "#888888";
    context.fill();
    context.closePath();

    cbMilestone();
}

function milestone() {
    $('#star').css('top', '420px');
    $('#star').css('left', '500px');
    $('#planet').css('top', '410px');
    $('#planet').css('left', '730px');
    $('#weather').css('top', '280px');
    $('#weather').css('left', '730px');
    $('#plant').css('top', '280px');
    $('#plant').css('left', '890px');
    $('#animal').css('top', '160px');
    $('#animal').css('left', '830px');
    $('#evolve').css('top', '120px');
    $('#evolve').css('left', '980px');
}

$(function() {
    load(mainseq, milestone);
});
