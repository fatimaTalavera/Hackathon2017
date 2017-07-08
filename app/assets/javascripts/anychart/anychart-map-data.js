anychart.onDocumentReady(function() {
    map_start();
    action_progress();
});


function action_progress () {
    var dataSet = anychart.data.set([
        ['MyObra', 11861, 10919, 8034, 18012]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({x: [0], value: [3]});

    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var seriesData_4 = dataSet.mapAs({x: [0], value: [4]});

    // create bar chart
    chart = anychart.bar();

    // turn on chart animation
    chart.animation(true);

    chart.padding([10, 40, 5, 20]);

    // set chart title text settings
    //chart.title('Top 10 Products by Revenue');
    //chart.title().padding([0, 0, 5, 0]);

    // set scale minimum
    chart.yScale().minimum(0);

    // force chart to stack values by Y scale.
    chart.yScale().stackMode('value');
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    // set titles for axises
    chart.yAxis().title('Guaranies');

    // helper function to setup label settings for all series
    var setupSeriesLabels = function (series, name) {
        series.name(name);
        series.stroke('3 #fff 1');
        series.hoverStroke('3 #fff 1');
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.bar(seriesData_1);
    setupSeriesLabels(series, 'Monto pagado');

    // create second series with mapped data
    series = chart.bar(seriesData_2);
    setupSeriesLabels(series, 'Monto vigente');

    // create third series with mapped data
    series = chart.bar(seriesData_3);
    setupSeriesLabels(series, 'Monto ejecutado');

    // create fourth series with mapped data
    series = chart.bar(seriesData_4);
    setupSeriesLabels(series, 'Monto aprobado');

    // turn on legend
    chart.legend()
        .enabled(true)
        .fontSize(13)
        .padding([0, 0, 20, 0]);

    chart.interactivity().hoverMode('byX');
    chart.tooltip()
        .valuePrefix('$')
        .displayMode('union');

    // set container id for the chart
    chart.container('action-progress');
    // initiate chart drawing
    chart.draw();
};

function map_start () {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
        {'id': 'PY.AS', 'value': 0, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.AG', 'value': 1, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.BQ', 'value': 2, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CN', 'value': 3, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CR', 'value': 4, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.PH', 'value': 5, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.SP', 'value': 6, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CE', 'value': 7, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.GU', 'value': 8, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.MI', 'value': 9, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.NE', 'value': 10, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.PG', 'value': 11, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.AM', 'value': 12, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.AA', 'value': 13, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CG', 'value': 14, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CZ', 'value': 15, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.CY', 'value': 16, 'monto': '4455', 'ejecutado': '4546'},
        {'id': 'PY.IT', 'value': 17, 'monto': '4455', 'ejecutado': '4546'}
    ]);

    // create choropleth series
    series = map.choropleth(dataSet);

    //enable the tooltips and format them at once
    series.tooltip().format(function(e){
        return "Monto: " + e.getData("monto") +"\n"+
            "Ejecutado: " + e.getData("ejecutado")
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
    map.container('map-py');

    //initiate map drawing
    map.draw();
};