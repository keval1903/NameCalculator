(function(){
    'use strict';
    angular.module("NameCalculator", [])
    .controller("NameCalController", function($scope){
        $scope.name = "";
        $scope.totalValue = 0;
        
        $scope.displayNumeric=function(){
            var totalNameValue = calculateNumeric($scope.name);
            $scope.totalValue = totalNameValue;
        
        };
        function calculateNumeric(string){
            var totalstringvalue = 0;
            for(var i = 0; i  < string.length; i++){
                totalstringvalue += string.charCodeAt(i);
            }
            return totalstringvalue
        }
    });
})();