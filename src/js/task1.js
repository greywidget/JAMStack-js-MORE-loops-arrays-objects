// Print out all of the times tables from 1 to 12

function timesTable(from, to) {

    var outStr = "";
    for (var i = from; i <= to; i++) {
        outStr += '<div class="col-6 col-sm-4 col-md-3 col-lg-2">\n';

        outStr += `<strong>${i} x table</strong><pre>\n`;
        
        for (var j = from; j <= to; j++) {
            outStr += `${i} x ${j} = ${i * j}\n`;
        }
        outStr += '</pre></div>\n';
    }
    document.getElementById('js-output').innerHTML = outStr;
}
