// Corrida de Luce 2007
// Distance : 7.669 km
// Altitudes : Maxi 159 m  Mini 151 m
// Dénivelées : ~ +6 m  -6 m
// Type de trace : Pedestre  

// Parcours de la Corrida de Lucé 2007

// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  var path = 
[{lat: 48.440270000, lng:1.467780000},
{lat: 48.440030000, lng:1.466290000},
{lat: 48.439720000, lng:1.463470000},
{lat: 48.439230000, lng:1.460420000},
{lat: 48.439200000, lng:1.458200000},
{lat: 48.439610000, lng:1.456210000},
{lat: 48.441150000, lng:1.455930000},
{lat: 48.442210000, lng:1.457330000},
{lat: 48.443000000, lng:1.459400000},
{lat: 48.443440000, lng:1.461930000},
{lat: 48.443450000, lng:1.462290000},
{lat: 48.442900000, lng:1.463050000},
{lat: 48.442710000, lng:1.464870000},
{lat: 48.442690000, lng:1.465110000},
{lat: 48.441730000, lng:1.465700000},
{lat: 48.439510000, lng:1.462160000},
{lat: 48.439000000, lng:1.459300000},
{lat: 48.439790000, lng:1.457420000},
{lat: 48.439760000, lng:1.457110000},
{lat: 48.440080000, lng:1.455020000},
{lat: 48.440300000, lng:1.455150000},
{lat: 48.441550000, lng:1.456460000},
{lat: 48.441680000, lng:1.456630000},
{lat: 48.441850000, lng:1.456810000},
{lat: 48.441980000, lng:1.456990000},
{lat: 48.442820000, lng:1.458550000},
{lat: 48.442920000, lng:1.458820000},
{lat: 48.442960000, lng:1.459030000},
{lat: 48.443330000, lng:1.460930000},
{lat: 48.443380000, lng:1.461200000},
{lat: 48.443420000, lng:1.461590000},
{lat: 48.442880000, lng:1.463050000},
{lat: 48.442780000, lng:1.463080000},
{lat: 48.442620000, lng:1.464770000},
{lat: 48.441730000, lng:1.465680000},
{lat: 48.441520000, lng:1.465830000},
{lat: 48.439630000, lng:1.462880000},
{lat: 48.439590000, lng:1.462650000},
{lat: 48.439210000, lng:1.460240000},
{lat: 48.439490000, lng:1.458080000},
{lat: 48.439730000, lng:1.458010000},
{lat: 48.439420000, lng:1.454820000},
{lat: 48.439440000, lng:1.454780000},
{lat: 48.439600000, lng:1.454750000},
{lat: 48.441120000, lng:1.455930000},
{lat: 48.441200000, lng:1.456050000},
{lat: 48.442410000, lng:1.457670000},
{lat: 48.442540000, lng:1.457890000},
{lat: 48.442680000, lng:1.458140000},
{lat: 48.443260000, lng:1.460400000},
{lat: 48.443300000, lng:1.460620000},
{lat: 48.443360000, lng:1.460960000},
{lat: 48.443380000, lng:1.461130000},
{lat: 48.443360000, lng:1.463180000},
{lat: 48.443230000, lng:1.463230000},
{lat: 48.443140000, lng:1.463180000},
{lat: 48.442640000, lng:1.465010000},
{lat: 48.442640000, lng:1.465200000},
{lat: 48.441370000, lng:1.465930000},
{lat: 48.441240000, lng:1.465930000},
{lat: 48.440360000, lng:1.466360000},
{lat: 48.440240000, lng:1.466420000},
{lat: 48.439730000, lng:1.463910000},
{lat: 48.439720000, lng:1.463750000},
{lat: 48.439490000, lng:1.461840000},
{lat: 48.439440000, lng:1.461530000},
{lat: 48.439410000, lng:1.461330000},
{lat: 48.439580000, lng:1.461250000},
{lat: 48.439870000, lng:1.461240000},
{lat: 48.440050000, lng:1.461250000},
{lat: 48.440170000, lng:1.461240000},
{lat: 48.440260000, lng:1.461240000}];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: path[1],
    mapTypeId: 'terrain'
  });

  // Create an ElevationService.
  var elevator = new google.maps.ElevationService;

  // Draw the path, using the Visualization API and the Elevation service.
  displayPathElevation(path, elevator, map);
}

function displayPathElevation(path, elevator, map) {
  // Display a polyline of the elevation path.
  new google.maps.Polyline({
    path: path,
    strokeColor: '#0000CC',
    opacity: 0.4,
    map: map
  });

  // Create a PathElevationRequest object using this array.
  // Ask for 256 samples along that path.
  // Initiate the path request.
  elevator.getElevationAlongPath({
    'path': path,
    'samples': 512
  }, plotElevation);
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(elevations, status) {
  var chartDiv = document.getElementById('elevation_chart');
  if (status !== google.maps.ElevationStatus.OK) {
    // Show the error code inside the chartDiv.
    chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
        status;
    return;
  }
  // Create a new chart in the elevation_chart DIV.
  var chart = new google.visualization.ColumnChart(chartDiv);

  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Sample');
  data.addColumn('number', 'Elevation');
  for (var i = 0; i < elevations.length; i++) {
    data.addRow(['', elevations[i].elevation]);
  }

  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 150,
    legend: 'none',
    titleY: 'Elevation (m)'
  });
}