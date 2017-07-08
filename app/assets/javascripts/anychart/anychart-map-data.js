anychart.onDocumentReady(function() {
    $( "#item-map" ).click(function() {
        map_start();
    });
});

function map_start () {
    // create map
    map = anychart.map();

    // create data set
    // value = pagado
    var dataSet = anychart.data.set([
        {'id': 'PY.AS', 'value': 0, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.AG', 'value': 1, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.BQ', 'value': 2, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CN', 'value': 3, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CR', 'value': 4, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.PH', 'value': 5, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.SP', 'value': 6, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CE', 'value': 7, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.GU', 'value': 8, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.MI', 'value': 9, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.NE', 'value': 10, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.PG', 'value': 11, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.AM', 'value': 12, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.AA', 'value': 13, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CG', 'value': 14, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CZ', 'value': 15, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.CY', 'value': 16, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 },
        {'id': 'PY.IT', 'value': 17, 'presupuesto-aprobado': '4455', 'presupuesto-vigente': '4546', 'planificado': 65654, 'ejecutado': 446, 'transferido': 44, 'pagado': 40 }
    ]);

    // create choropleth series
    series = map.choropleth(dataSet);

    //enable the tooltips and format them at once
    series.tooltip().format(function(e){
        return "Presupuesto aprobado: " + e.getData("presupuesto-aprobado") +"\n"+
            "Presupuesto vigente: " + e.getData("presupuesto-vigente") +"\n"+
            "Monto planificado: " + e.getData("planificado") +"\n"+
            "Monto ejecutado: " + e.getData("ejecutado") +"\n"+
            "Monto transferido: " + e.getData("transferido") +"\n"+
            "Monto abonado: " + e.getData("pagado");
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

    //initiate map drawing
    map.draw();
};