angular.module("championship").filter("name", function () {
    return function (input) {
        var championshipNameList = input.split(" ")
        var formatedChampionshipNames = championshipNameList.map(function (name) {
            if (/(da|de)/.test(name)) return name
            return  name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
        })
        return formatedChampionshipNames.join(" ")
    }
})