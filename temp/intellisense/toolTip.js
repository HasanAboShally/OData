(function () {

    function ToolTip() {
        return {
            restrict: 'C',
            link: function (scope, iElement, iAttrs, controller) {
  
                var desc = scope.item.description;
                $(iElement).tooltip({ 'selector': '', 'placement': 'right', 'title': desc, 'trigger': 'hover focus' });
                if (scope.item.type == 'entity') {
                    $(iElement).children('i').addClass("entity");
                }
                if (scope.item.type == 'query') {
                    $(iElement).children('i').addClass("icon-usd");
                }

                $(iElement).click(function () {

                    // list hover and selected item active 
                    $('.li-list').removeClass("li-active");
                    $(this).addClass("li-active");

                    // update selected item
                    scope.$parent.setSelectedItem({item:$(this).children('span').html()});
                    

                });
            }
        }
    };
    angular.module('Intellisense').directive('toolTip', ToolTip);
})();