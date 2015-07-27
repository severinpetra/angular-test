/**
 * Created by Programmer on 27.07.15.
 */


angular.module( 'myApp' ).controller( 'SimpleList', SimpleList );


function SimpleList( $scope ) {

    $scope.name = SimpleList.name;

}