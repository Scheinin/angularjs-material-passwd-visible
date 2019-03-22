/**
 * Created by scheinin on 3/22/19.
 */
'use strict';

var App, modules;
modules = ['ngAnimate', 'ngMaterial', 'ngAria'];

App = angular.module('password-visibility', modules);

App.directive('passwdVisible', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, elem, attrs) {
            scope.eyeColor = 'eye-inactive';
            elem.wrap("<div class='passwd-visible'></div>");

            scope.toggle = function () {
                if (elem[0].type === 'text') {
                    elem[0].type = 'password';
                    scope.eyeColor = 'eye-inactive';
                } else {
                    elem[0].type = 'text';
                    scope.eyeColor = 'eye-active';
                }
            };

            var vis = $compile('<md-icon ng-click="toggle()" class="visible-eye" ng-class="eyeColor">remove_red_eye</md-icon>')(scope);
            elem.after(vis);
        }
    };
}]);
