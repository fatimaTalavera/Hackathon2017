anychart.onDocumentReady(function() {
    map = anychart.map();
    var data = {};
    $.ajax({
        method: "POST",
        url: "search/map",
        data: {}
    })
        .done(function( msg ) {
            //self.prop('disabled', false);
            map_start(map,msg);
        });
    $( "#item-map" ).click(function() {
        //initiate map drawing
        map.draw();
    });

});
function format_currency (number) {
    return 'Gs. ' + parseFloat(number).toFixed(0).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        });
};
function map_start (map,data) {
    // create map

    console.log(data);

    // create data set
    // value = pagado
    var dataSet = anychart.data.set([
        {'id': 'PY.AS', 'value': 0, 'data': data[0]},
        {'id': 'PY.AG', 'value': 1, 'data': data[1]},
        {'id': 'PY.BQ', 'value': 2, 'data': data[2]},
        {'id': 'PY.CN', 'value': 3, 'data': data[3]},
        {'id': 'PY.CR', 'value': 4, 'data': data[4]},
        {'id': 'PY.PH', 'value': 5, 'data': data[5]},
        {'id': 'PY.SP', 'value': 6, 'data': data[6]},
        {'id': 'PY.CE', 'value': 7, 'data': data[7]},
        {'id': 'PY.GU', 'value': 8, 'data': data[8]},
        {'id': 'PY.MI', 'value': 9, 'data': data[9]},
        {'id': 'PY.NE', 'value': 10,'data': data[10]},
        {'id': 'PY.PG', 'value': 11,'data': data[11]},
        {'id': 'PY.AM', 'value': 12,'data': data[12]},
        {'id': 'PY.AA', 'value': 13,'data': data[13]},
        {'id': 'PY.CG', 'value': 14,'data': data[14]},
        {'id': 'PY.CZ', 'value': 15,'data': data[15]},
        {'id': 'PY.CY', 'value': 16,'data': data[16]},
        {'id': 'PY.IT', 'value': 17,'data': data[17]},
    ]);

    // create choropleth series
    series = map.choropleth(dataSet);

    //enable the tooltips and format them at once
    series.tooltip().format(function(e){
        return "Presupuesto aprobado: " + format_currency(e.getData('data')[1]) +"\n"+
            "Presupuesto vigente: " + format_currency(e.getData('data')[2]) +"\n"+
            "Monto planificado: " + format_currency(e.getData('data')[3]) +"\n"+
            "Monto ejecutado: " + format_currency(e.getData('data')[4]) +"\n"+
            "Monto transferido: " + format_currency(e.getData('data')[5]) +"\n"+
            "Monto abonado: " + format_currency(e.getData('data')[6]);
    });

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#c6eeef', '#1a9da3'));
    series.hoverFill('#addd8e');

    // disable series labels
    series.labels(false);

    // set geo data, you can find this map in our geo maps collection
    // https://cdn.anychart.com/#maps-collection
    map.geoData(anychart.maps['paraguay']);

    //set map container id (div)
    map.container('heat-map');


};