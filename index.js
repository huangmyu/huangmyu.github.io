  require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/Legend",
        "esri/layers/GeoJSONLayer"
      ], function (Map, MapView, FeatureLayer, Legend, GeoJSONLayer) {
       
		const defaultSym = {
          type: "simple-fill", 
          outline: {
            color: [128, 128, 128, 0.2],
            width: "0.5px"
          }
        };

        const renderer = {
          type: "simple", 
          symbol: defaultSym,
          label: "China Census",
          visualVariables: [
            {
              type: "color",
              field: "pop2010",
              legendOptions: {
                title: "population2010"
              },
              stops: [	
				{
					//500万
				  value: 5000000,
				  color: "#ffef9d",
				  label: "500万"
				},
				{
					//1000万
				  value: 10000000,
				  color: "#ffba81",
				  label: "1000万"
				},
                {
					//3000万
                  value: 30000000,
                  color: "#ff9557",
                  label: "3000万"
                },
				{
					//5000万
				  value: 50000000,
				  color: "#ff3e3e",
				  label: "5000万"
				},
				{
					//8000万
				  value: 80000000,
				  color: "#df0000",
				  label: "8000万"
				}
              ]
            }
          ]
        };

        const map = new Map({
          basemap: "gray-vector"
        });
        const Layer1 = new FeatureLayer({
          url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",
          renderer: renderer,
          popupTemplate: {
            title: "{COUNTY}, {STATE}",
            fieldInfos: [
              {
                fieldName: "POP_POVERTY",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              },
              {
                fieldName: "TOTPOP_CY",
                format: {
                  digitSeparator: true,
                  places: 0
                }
              }
            ]
          }
        });


        const view = new MapView({
          container: "maph",
          map: map,
          zoom: 3.5,
          center: [116, 38]
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "top-right"
        );
		
        const geoJSONLayer = new GeoJSONLayer({
          url: "https://cxqttkl.github.io/web4gis15/china.geojson",
		  renderer: renderer,
		  popupTemplate:{
// 			  title:"{NAME}"
		  }
        });
        map.add(geoJSONLayer);
      
  		//*** 添加DIV用于显示坐标等信息 ***//
  		const coordsWidget = document.createElement("div");
  		coordsWidget.id = "coordsWidget";
  		coordsWidget.className = "esri-widget esri-component";
  		coordsWidget.style.padding = "9px 15px 8px";
  		view.ui.add(coordsWidget, "bottom-left");
 
  		//***显示经纬度、比例尺大小和尺度***//
  		function showCoordinates(pt) {
  			const coords = "Lon/Lat " + pt.longitude.toFixed(3) + " " +pt.latitude.toFixed(3) +
  				" | Scale 1:" + Math.round(view.scale * 1) / 1 +
  				" | Zoom " + view.zoom;
  			coordsWidget.innerHTML = coords;
  		}
 
  		//*** 添加事件显示中心的坐标（在视图停止移动之后） ***//
  		view.watch(["stationary"], function() {
  			showCoordinates(view.center);
  		});
 
  		//*** 添加显示鼠标的坐标点***//
  		view.on(["pointer-down", "pointer-move"], function(evt) {
  			showCoordinates(view.toMap({
  				x: evt.x,
  				y: evt.y
  			}));
  		});
 
  	});
 
