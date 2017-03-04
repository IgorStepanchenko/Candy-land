ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [47.857385, 35.105089],
            zoom: 16
        });
        
        
        myPlacemark = new ymaps.Placemark([47.857385, 35.105089], { 
            hintContent: 'Candy Land', 
            balloonContent: 'Наш замечательный магазин' 
        });
        
        myMap.geoObjects.add(myPlacemark);
        
        
        
        
    }

