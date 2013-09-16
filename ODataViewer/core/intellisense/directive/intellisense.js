
// Intellisense Module

angular.module('Intellisense').directive('intellisense', function () {

    return {
        restrict: 'E',
        templateUrl: '/core/intellisense/directive/intellisense-template.html',
        scope: {
            model: '=',
            metadata: '='
        },
        replace: true,
        link: function (scope, iElement, iAttrs, controller) {

            var intellisenseProvider;

            scope.$watch(function () { return scope.metadata }, function (newVal, oldVal) {

                if (scope.metadata)
                    intellisenseProvider = new Intellisense(scope.metadata);
            });

            $("#intellisense-input").keypress(function () {
                if (intellisenseProvider) {
                    var txt = $("#intellisense-input").val();
                    scope.suggestions = intellisenseProvider.getIntellisense(txt);
                }
            });
        }
    }
});
