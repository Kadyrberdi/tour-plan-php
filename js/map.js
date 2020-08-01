// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
var myMap, myPlacemark;

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.890703, 98.294772],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });
  var myPlacemark = new ymaps.Placemark([7.890703, 98.294772], {
    hintContent: "GRAND HILTON HOTEL",
    balloonContent: "Hotel 5 star",
  });

  myMap.geoObjects.add(myPlacemark);
}
