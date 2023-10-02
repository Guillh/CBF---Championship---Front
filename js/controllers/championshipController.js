angular.module("championship").controller("championshipController", function ($scope, $http, championshipAPI) {
    $scope.app = "Campeonatos";
    $scope.championships = [];
    $scope.deleteItens = [];
    $scope.teste = false

    var loadChampionships = function () {
        championshipAPI.getChampionships().then(function (response) {    
            $scope.championships = response.data.slice();
        }).catch(function errorCallback(data) {
            $scope.teste = true
            $scope.message = "Não foi possivel carregar os dados!"
        })
    }

    $scope.addChampionship = function (championship){
        championshipAPI.saveChampionship(championship).then( function successCallback(response) {
            delete $scope.championship;
            $scope.championshipForm = null;
            loadChampionships();
            $scope.teste = false
        }).catch(function errorCallback(response) {
            $scope.teste = true
            $scope.message = response.data.message;
        });
    };

    $scope.deleteChampionship = function (championships) {
        $scope.deleteItens = $scope.championships.filter(function (championship) {
            if (championship.selected) {
                championshipAPI.delChampionship(championship).then( function successCallback(response) {
                $scope.teste = false;
                loadChampionships()
            }).catch(function errorCallback(response) {
                $scope.teste = true   
                $scope.message = response.data.message ;
            })
        }})
    };

    $scope.isChampionshipSelected = function (championships) {
        return championships.some(function(championship) {
            return championship.selected
        })
    };

    $scope.orderBy1 = function (d) {
        $scope.orderAttribute = d
        $scope.orderDirection = !$scope.orderDirection
    };

    loadChampionships();
});