
// Intellisense Module



angular.module('Intellisense').directive('intellisense', function () {

    return {
        restrict: 'E',
        templateUrl: '/core/intellisense/directive/intellisense-template.html',
        scope: {
            sourceData: '=', // to pass array must be two way binding
            model: '='
        },
        replace:true,
        link: function (scope, iElement, iAttrs, controller) {
            //$('#intellisense-input').focus(function () { $('#intellisense-suggestions').css('display', 'block'); });
            //$('#intellisense-input').blur(function () { $('#intellisense-suggestions').css('display', 'none'); });
        }
    }
});
