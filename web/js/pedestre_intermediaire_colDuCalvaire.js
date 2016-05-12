// Distance : 15.044 km
// Type de trace : Pedestre  

// Beaux panoramas sur le Massif Vosgien, passage à proximité du lac noir et du lac blanc

// http://www.evadeiste.fr/viewtopic.php?t=465

// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  var path = 
[{lat: 48.130819, lng:7.086782},
{lat: 48.130741, lng:7.086684},
{lat: 48.130891, lng:7.086648},
{lat: 48.130729, lng:7.086701},
{lat: 48.130729, lng:7.086701},
{lat: 48.130885, lng:7.086630},
{lat: 48.130885, lng:7.086630},
{lat: 48.130759, lng:7.086710},
{lat: 48.130759, lng:7.086710},
{lat: 48.130861, lng:7.086755},
{lat: 48.130861, lng:7.086755},
{lat: 48.130747, lng:7.086755},
{lat: 48.130747, lng:7.086755},
{lat: 48.131156, lng:7.086684},
{lat: 48.131156, lng:7.086684},
{lat: 48.130903, lng:7.086746},
{lat: 48.130903, lng:7.086746},
{lat: 48.131210, lng:7.086755},
{lat: 48.131210, lng:7.086755},
{lat: 48.131144, lng:7.086854},
{lat: 48.131144, lng:7.086854},
{lat: 48.131240, lng:7.086585},
{lat: 48.131240, lng:7.086585},
{lat: 48.131078, lng:7.086701},
{lat: 48.131078, lng:7.086701},
{lat: 48.130903, lng:7.086746},
{lat: 48.130903, lng:7.086746},
{lat: 48.131000, lng:7.086719},
{lat: 48.131000, lng:7.086719},
{lat: 48.131120, lng:7.086692},
{lat: 48.131120, lng:7.086692},
{lat: 48.131168, lng:7.086549},
{lat: 48.131168, lng:7.086549},
{lat: 48.131072, lng:7.086603},
{lat: 48.131072, lng:7.086603},
{lat: 48.130915, lng:7.086755},
{lat: 48.130915, lng:7.086755},
{lat: 48.131210, lng:7.086657},
{lat: 48.131210, lng:7.086657}];

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