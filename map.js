var map;
var marker;
var image = 'image/Rounded_Rectangle_20.png'
var popupContent = '<div class="marker_content"><div class="content"></div></div>'
        // Функция initMap которая отрисует карту на странице
        function initMap() {
            var coordinates = {lat: 40.672472, lng: -73.832861}
            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 40.675715, lng: -73.835877},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 15,
                disableDefaultUI: true
            });

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: image
            });

            infowindow = new google.maps.InfoWindow({
                content: popupContent
            });

            infowindow.open(map, marker);
        }