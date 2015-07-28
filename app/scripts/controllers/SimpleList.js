/**
 * Created by Programmer on 27.07.15.
 */


angular.module( 'myApp' ).controller( 'SimpleList', SimpleList );


function SimpleList( $scope ) {

    $scope.label1 = 'Поиск:';
    $scope.label2 = 'Всего:';
    $scope.label3 = 'искомый символ';
    $scope.label4 = 'Сортировка: ';

    $scope.list = [3245,6785,43534,896,23452,4530];

    $scope.order = 'null';

}