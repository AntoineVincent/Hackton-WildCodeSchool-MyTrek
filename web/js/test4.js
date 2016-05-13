apiKey = "22560c0f3e52cf59f70507eeb2b26ff1";
var map;  
var geoJSON;
var request;
weatherIcons = {
    "200": {
        "label": "thunderstorm with light rain",
        "icon": "storm-showers"
    },
    "201": {
        "label": "thunderstorm with rain",
        "icon": "storm-showers"
    },
    "202": {
        "label": "thunderstorm with heavy rain",
        "icon": "storm-showers"
    },
    "210": {
        "label": "light thunderstorm",
        "icon": "storm-showers"
    },
    "211": {
        "label": "thunderstorm",
        "icon": "thunderstorm"
    },
    "212": {
        "label": "heavy thunderstorm",
        "icon": "thunderstorm"
    },
    "221": {
        "label": "ragged thunderstorm",
        "icon": "thunderstorm"
    },
    "230": {
        "label": "thunderstorm with light drizzle",
        "icon": "storm-showers"
    },
    "231": {
        "label": "thunderstorm with drizzle",
        "icon": "storm-showers"
    },
    "232": {
        "label": "thunderstorm with heavy drizzle",
        "icon": "storm-showers"
    },
    "300": {
        "label": "light intensity drizzle",
        "icon": "sprinkle"
    },
    "301": {
        "label": "drizzle",
        "icon": "sprinkle"
    },
    "302": {
        "label": "heavy intensity drizzle",
        "icon": "sprinkle"
    },
    "310": {
        "label": "light intensity drizzle rain",
        "icon": "sprinkle"
    },
    "311": {
        "label": "drizzle rain",
        "icon": "sprinkle"
    },
    "312": {
        "label": "heavy intensity drizzle rain",
        "icon": "sprinkle"
    },
    "313": {
        "label": "shower rain and drizzle",
        "icon": "sprinkle"
    },
    "314": {
        "label": "heavy shower rain and drizzle",
        "icon": "sprinkle"
    },
    "321": {
        "label": "shower drizzle",
        "icon": "sprinkle"
    },
    "500": {
        "label": "light rain",
        "icon": "rain"
    },
    "501": {
        "label": "moderate rain",
        "icon": "rain"
    },
    "502": {
        "label": "heavy intensity rain",
        "icon": "rain"
    },
    "503": {
        "label": "very heavy rain",
        "icon": "rain"
    },
    "504": {
        "label": "extreme rain",
        "icon": "rain"
    },
    "511": {
        "label": "freezing rain",
        "icon": "rain-mix"
    },
    "520": {
        "label": "light intensity shower rain",
        "icon": "showers"
    },
    "521": {
        "label": "shower rain",
        "icon": "showers"
    },
    "522": {
        "label": "heavy intensity shower rain",
        "icon": "showers"
    },
    "531": {
        "label": "ragged shower rain",
        "icon": "showers"
    },
    "600": {
        "label": "light snow",
        "icon": "snow"
    },
    "601": {
        "label": "snow",
        "icon": "snow"
    },
    "602": {
        "label": "heavy snow",
        "icon": "snow"
    },
    "611": {
        "label": "sleet",
        "icon": "sleet"
    },
    "612": {
        "label": "shower sleet",
        "icon": "sleet"
    },
    "615": {
        "label": "light rain and snow",
        "icon": "rain-mix"
    },
    "616": {
        "label": "rain and snow",
        "icon": "rain-mix"
    },
    "620": {
        "label": "light shower snow",
        "icon": "rain-mix"
    },
    "621": {
        "label": "shower snow",
        "icon": "rain-mix"
    },
    "622": {
        "label": "heavy shower snow",
        "icon": "rain-mix"
    },
    "701": {
        "label": "mist",
        "icon": "sprinkle"
    },
    "711": {
        "label": "smoke",
        "icon": "smoke"
    },
    "721": {
        "label": "haze",
        "icon": "day-haze"
    },
    "731": {
        "label": "sand, dust whirls",
        "icon": "cloudy-gusts"
    },
    "741": {
        "label": "fog",
        "icon": "fog"
    },
    "751": {
        "label": "sand",
        "icon": "cloudy-gusts"
    },
    "761": {
        "label": "dust",
        "icon": "dust"
    },
    "762": {
        "label": "volcanic ash",
        "icon": "smog"
    },
    "771": {
        "label": "squalls",
        "icon": "day-windy"
    },
    "781": {
        "label": "tornado",
        "icon": "tornado"
    },
    "800": {
        "label": "clear sky",
        "icon": "sunny"
    },
    "801": {
        "label": "few clouds",
        "icon": "cloudy"
    },
    "802": {
        "label": "scattered clouds",
        "icon": "cloudy"
    },
    "803": {
        "label": "broken clouds",
        "icon": "cloudy"
    },
    "804": {
        "label": "overcast clouds",
        "icon": "cloudy"
    },
    "900": {
        "label": "tornado",
        "icon": "tornado"
    },
    "901": {
        "label": "tropical storm",
        "icon": "hurricane"
    },
    "902": {
        "label": "hurricane",
        "icon": "hurricane"
    },
    "903": {
        "label": "cold",
        "icon": "snowflake-cold"
    },
    "904": {
        "label": "hot",
        "icon": "hot"
    },
    "905": {
        "label": "windy",
        "icon": "windy"
    },
    "906": {
        "label": "hail",
        "icon": "hail"
    },
    "951": {
        "label": "calm",
        "icon": "sunny"
    },
    "952": {
        "label": "light breeze",
        "icon": "cloudy-gusts"
    },
    "953": {
        "label": "gentle breeze",
        "icon": "cloudy-gusts"
    },
    "954": {
        "label": "moderate breeze",
        "icon": "cloudy-gusts"
    },
    "955": {
        "label": "fresh breeze",
        "icon": "cloudy-gusts"
    },
    "956": {
        "label": "strong breeze",
        "icon": "cloudy-gusts"
    },
    "957": {
        "label": "high wind, near gale",
        "icon": "cloudy-gusts"
    },
    "958": {
        "label": "gale",
        "icon": "cloudy-gusts"
    },
    "959": {
        "label": "severe gale",
        "icon": "cloudy-gusts"
    },
    "960": {
        "label": "storm",
        "icon": "thunderstorm"
    },
    "961": {
        "label": "violent storm",
        "icon": "thunderstorm"
    },
    "962": {
        "label": "hurricane",
        "icon": "cloudy-gusts"
    }
};
var units = "imperial";

initialize();

function initialize() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                coordinates = {
                    latitude: 48.46971300,
                    longitude: 1.310873000
                };
                apiCalls();
            }, function(error){
                $("body").html('<div class="container-fluid"><div class="jumbotron x-4" style="color:#000000; padding-top:1em;"> Please Enable your Location to Use this Site.</div></div>');
            });
        }
    }


function apiCalls() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" +
        coordinates.latitude + "&lon=" + coordinates.longitude +
        "&units=" + units + "&appid=" + apiKey, {
            format: "json"
        }, function(json) {
            currentWeather(json);
            //debug(json);
        });
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat=" +
        coordinates.latitude + "&lon=" + coordinates.longitude +
        "&units=" + units + "&appid=" + apiKey, {
            format: "json"
        }, function(json) {
        
            json = dateConversion(json);
            json = json.list;
            json = groupDates(json);
        
            forecast(json);
            //debug2(json);
        });
    //google.maps.event.addDomListener(window, 'load', startMap(coordinates));
    // startMap();

    // Take the JSON results and proccess them
    var proccessResults = function() {
    console.log(this);
    var results = JSON.parse(this.responseText);
    if (results.list.length > 0) {
        resetData();
        for (var i = 0; i < results.list.length; i++) {
          geoJSON.features.push(jsonToGeoJson(results.list[i]));
        }
        drawIcons(geoJSON);
    }
  };
}

function debug(json) {
    var html = "";
    var keys = Object.keys(json);
    html += "<div>";
    keys.forEach(function(key) {
        html += "<b>" + key + "</b>" + JSON.stringify(json[key]) +
            "<br>";
    });
    html += "</div><br>";
    $("#message").html(html);
}

function debug2(json) {
    $("#message").html(JSON.stringify(json));
}

function currentWeather(json) {
    //display name of town  
    $("#town").html(json.name);
    $("#currentIcon").addClass(iconConversion(json));
    $("#currentConditions").html(currentConditions(json).join(" & "));
    if (Math.round(json.main.temp).length > 1) {
        $("#currentTemperature").addClass("x-13");
    }
    else {
        $("#currentTemperature").addClass("x-15");
    }
    $("#currentTemperature").html(Math.round(json.main.temp) + "&deg");
    windUnits = (units == "metric") ? "m/s" : "mph";
    $("#windDirection").css("transform", "rotate(" + json.wind.deg + "deg)");
    $("#windSpeed").html(Math.round(json.wind.speed) + " " + windUnits);
    $("#humidity").html(json.main.humidity + " %");
}

function forecast(json){
    var dates = dateArray(json);
    var icon = forecastIcon(json);
    var max = maxTemp(json);
    var min = minTemp(json);
    var wind = averageWindSpeed(json);
    var humidity = averageHumidity(json);
    
    for(var i = 0; i<5; i++){
        $("#day"+i).html(dates[i]);   
        $("#icon"+i).addClass(icon[i]);
        $("#max-temp"+i).html("Max: "+ max[i] + "&deg;");
        $("#min-temp"+i).html("Min: "+ min[i] + "&deg;");
        $("#windSpeed"+i).html(wind[i] + " " + windUnits);
        $("#humidityPercent"+i).html(humidity[i] + " %")      
    }
}



function arrayCountValues(arr) {
    var a = [], b = [], prev;
    var json ={};
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    for(var i = 0; i<a.length; i++){
            json[a[i]] = b[i];
    }
    return json;
}

function average (arr){
    return _.reduce(arr, function(memo, num)
    {
        return memo + num;
    }, 0) / arr.length;
}

function iconConversion(json) {
    var prefix = 'wi wi-';
    var code = json.weather[0].id;
    var icon = weatherIcons[956].icon;
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon;
    }
    icon = prefix + icon;
    return icon;
}

function dateConversion(json){
    //arr=[];
    json.list.forEach(function(key) {
        
        
        var date = key.dt_txt.split(" ");
        date[0] = date[0].split("-");
        date[1] = date[1].split(":");
        date  = _.flatten(date);
        //arr.push(date);
        
        key.dt_txt = new Date(date[0],date[1]-1,date[2],date[3],date[4],date[5], "00");
        //key.dt_txt = new Date(key.dt_txt);
        
        
        //key.dt_txt = key.dt_txt.toString();
    });
    
    //$("#message").html(JSON.stringify(arr));
    
    return json;
}

function groupDates(list){
   return _.groupBy(list,  function(json){ return json.dt_txt.toDateString();});
}

function unitChange() {
    units = (units == "metric") ? "imperial" : "metric";
    initialize();
}

function currentConditions(json) {
        var conditions = [];
        for (var i = 0; i < json.weather.length; i++) {
            conditions.push(json.weather[i].description);
        }
        return conditions;
    }



function dateArray(json){
    var arr=[];
    
    Object.keys(json).forEach(function(key){
        arr.push(key);
    })
    
    return arr;
}

function forecastIcon(json){
   var arr = [];
    var keys = Object.keys(json);
        console.log(keys);   
    keys.forEach(function(array) {
    var value = (_.chain(json[array]).pluck("weather").flatten().pluck("id").value());
    value = arrayCountValues(value);
 
    var set = Object.keys( value ).map(function ( key ) { return value[key]; });
    var max = Math.max.apply( null, set );
        
    Object.keys(value).forEach(function(key){
        if(value[key] == max){
            value = key;
        }                           
    })
    
    value = iconConvert(value);

    arr.push(value);
    });
    return arr; 
    
}

function minTemp(json){
    var arr = [];
    var keys = Object.keys(json);
    keys.forEach(function(array) {
    arr.push(Math.round(average(_.chain(json[array]).pluck("main").pluck("temp_min").value())));
        
    });
    return arr;
}

function maxTemp(json){
    var arr = [];
    var keys = Object.keys(json);
    keys.forEach(function(array) {
    arr.push(Math.round(_.chain(json[array]).pluck("main").pluck("temp_max").max().value()));
        
    });
    return arr;
}

function averageWindSpeed(json){
    var arr = [];
    var keys = Object.keys(json);
    keys.forEach(function(array) {
    arr.push(Math.round(average(_.chain(json[array]).pluck("wind").pluck("speed").value())));
        
    });
    return arr;
}

function averageHumidity(json){
    var arr = [];
    var keys = Object.keys(json);
    keys.forEach(function(array) {
    arr.push(Math.round(average(_.chain(json[array]).pluck("main").pluck("humidity").value())));
        
    });
    return arr;
}