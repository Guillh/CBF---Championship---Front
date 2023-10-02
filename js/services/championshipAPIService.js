angular.module("championship").factory("championshipAPI", function ($http, config) {
    var _getChampionships = function () {
        return $http.get(config.baseUrl + "/championships/get-all");
    }

    var _saveChampionship = function (championship) {
        return $http.post(config.baseUrl + "/championships/create", championship)
    }

    var _delChampionship = function (championship) {
        return $http.delete(config.baseUrl + "/championships/delete/" + championship.id)    
    }

    return {
        getChampionships: _getChampionships,
        saveChampionship: _saveChampionship,
        delChampionship: _delChampionship
    }
});

