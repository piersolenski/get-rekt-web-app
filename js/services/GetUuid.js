angular.module("elHacko").factory("GetUuid", function(CONFIG, $http) {
    return {
        get: function get() {
            var promise = $http.get(CONFIG["uuid"]).then(function(response) {
                return response.data;
            });
            return promise;
        }
    };
});
