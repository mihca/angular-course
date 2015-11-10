(function() {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function() {
        return {
            restrict: 'E', // Type: Element
            templateUrl: 'product-title.html'
        }
    })

    app.directive("productSpecs", function() {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'A',
            templateUrl: 'product-reviews.html'
        };
    });

    app.directive("productDescription", function() {
        return {
            restrict: 'A',
            templateUrl: 'product-description.html'
        };
    });

    app.directive("productPanels", function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;
                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panels'
        }
    })

})();
