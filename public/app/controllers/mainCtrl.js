angular.module('mainCtrl', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAAQS8Zu1XNUerotmsJQYd7ezdEPwTu648',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})
    .controller('mainController', function($scope, uiGmapGoogleMapApi) {

        $scope.message = 'test message';

        uiGmapGoogleMapApi.then(function(maps) {
            $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        });
    });