
(function () {

    function funcDir() {
        return {
            restrict: 'E',
            templateUrl: 'directives/intellisense/intellisense-template.html',
            scope: {

                topY: '@',
                leftX: '@',
                sourceData: '=', // to pass array must be two way binding
                setSelectedItem: '&'
            },
            link: function(scope, iElement, iAttrs, controller) {
                
                scope.$watch('topY+leftX', function () {
                    $('.cus-container').css({ top: scope.topY + 'px', left: scope.leftX + 'px' });
                });
               

            }
        }
    };
    angular.module('Intellisense').directive('intellisense', funcDir);
    
})();