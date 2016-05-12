// Distance : 151.903 km
// Altitudes : Maxi 2544 m  Mini 980 m
// Dénivelées : ~ +7907 m  -7864 m
// Type de trace : Pedestre  

// Le tour du mont Blanc, alias GR TMB, est un itinéraire de randonnée pédestre autour du massif du Mont-Blanc.

// Il se fait en une dizaine de jours, voire plus suivant la condition physique des participants et le choix de variantes.

// http://tdmb.free.fr/
// http://jcaron.free.fr/tmb99/



// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initMap() {
  // The following path marks a path from Mt. Whitney, the highest point in the
  // continental United States to Badwater, Death Valley, the lowest point.
  var path = 
[{lat: 45.923624000, lng:6.869052000},
{lat: 45.888948000, lng:6.784122000},
{lat: 45.872448000, lng:6.760347000},
{lat: 45.864787000, lng:6.770217000},
{lat: 45.859637000, lng:6.739790000},
{lat: 45.733895000, lng:6.708334000},
{lat: 45.722308000, lng:6.717775000},
{lat: 45.720742000, lng:6.721208000},
{lat: 45.720463000, lng:6.721616000},
{lat: 45.719712000, lng:6.722474000},
{lat: 45.697525000, lng:6.728761000},
{lat: 45.738659000, lng:6.786332000},
{lat: 45.770116000, lng:6.882484000},
{lat: 45.802946000, lng:6.985760000},
{lat: 45.809469000, lng:6.978872000},
{lat: 45.834424000, lng:7.011230000},
{lat: 45.865903000, lng:7.057428000},
{lat: 45.880280000, lng:7.063608000},
{lat: 45.913067000, lng:7.106416000},
{lat: 45.942593000, lng:7.095816000},
{lat: 45.980938000, lng:7.123818000},
{lat: 45.998426000, lng:7.127874000},
{lat: 46.012867000, lng:7.119634000},
{lat: 46.030183000, lng:7.116437000},
{lat: 46.049001000, lng:7.082470000},
{lat: 46.057863000, lng:7.025392000},
{lat: 46.052949000, lng:6.999793000},
{lat: 46.047263000, lng:6.980782000},
{lat: 46.040525000, lng:6.966770000},
{lat: 46.041899000, lng:6.945784000},
{lat: 46.024990000, lng:6.927159000},
{lat: 46.012759000, lng:6.923039000},
{lat: 46.004670000, lng:6.924262000},
{lat: 45.996065000, lng:6.927245000},
{lat: 45.989134000, lng:6.928961000},
{lat: 45.975659000, lng:6.916773000},
{lat: 45.964737000, lng:6.906238000},
{lat: 45.964029000, lng:6.905937000},
{lat: 45.951712000, lng:6.893857000},
{lat: 45.941284000, lng:6.875253000},
{lat: 45.938408000, lng:6.871927000},
{lat: 45.936670000, lng:6.872528000},
{lat: 45.931993000, lng:6.870725000},
{lat: 45.928495000, lng:6.868107000},
{lat: 45.926006000, lng:6.870210000},
{lat: 45.925534000, lng:6.870124000},
{lat: 45.924847000, lng:6.870038000},
{lat: 45.923495000, lng:6.869802000},
{lat: 45.923603000, lng:6.869073000},
{lat: 45.923624000, lng:6.869052000}];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
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