
//1.声明自定义的模块
var app=angular.module('pullHook',['ng','ngRoute']);

//3.配置路由词典
app.config(function($routeProvider){
    $routeProvider.when('/start', {  //路由地址
        templateUrl: 'tpl/start.html',//模板页面地址
        controller: 'startCtrl'//控制器名
        //该控制器对象的$scope限于整个模板页面
    }).when('/login', {
        templateUrl: 'tpl/login.html',
        controller: 'loginCtrl'
    }).when('/register', {
        templateUrl: 'tpl/register.html',
       controller: 'registerCtrl'
    }).when('/index', {
        templateUrl: 'tpl/index.html',
        controller: 'indexCtrl'
    }).when('/message', {
        templateUrl: 'tpl/message.html',
        controller: 'messageCtrl'
    }).when('/said', {
        templateUrl: 'tpl/said.html',
        controller: 'saidCtrl'
    }).when('/mine', {
        templateUrl: 'tpl/mine.html',
        controller: 'mineCtrl'
    }).when('/detail',{
        templateUrl: 'tpl/detail.html',
        controller: 'detailCtrl'
    }).when('/search',{
        templateUrl: 'tpl/search.html',
        controller: 'searchCtrl'
    }).otherwise({redirectTo:'/start'})
})
app.directive('toggleClass',['$routeParams',function($routeParams){
    return {
        restrict: 'A',
        scope: {
            toggleClass: '@'
        },
        link: function ($scope, $element) {
            $scope.h=location.hash;
            $scope.lis=$element.children('p')[0].className;
            if($scope.h==$scope.lis){
                $element.toggleClass($scope.toggleClass);
            }
        }
    }
}])

//4.声明控制器
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
    $scope.jump = function (arg) {
        $location.path(arg);
    }
}]).controller('startCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    $timeout(function () {
      $location.path('/login');
    },2000)

}]).controller('loginCtrl',['$scope','$location','$interval',function($scope,$location,$timeout){
    $scope.className =true;
    $scope.change=function(){
        $scope.className = true;
    }
    $scope.noChange=function(){
        $scope.className =false;
    }

    $scope.className2 = false;
    $scope.change2=function(){
        $scope.className2 = true;
    }
    $scope.noChange2=function(){
        $scope.className2 = false;
    }
    $scope.$watch('no',function(){
        $scope.no=$scope.no;
    });
    $scope.$watch('pw',function(){
        $scope.pw=$scope.pw;
    });
    $scope.checked=true;
    $scope.change=function(){
        if($scope.no===undefined||$scope.pw===undefined){
            $scope.checked=true;
        }else{
            $scope.checked=false;
        }
    }
    $scope.jumpTo=function(){
           $location.path('/index');
    }
}]).controller('indexCtrl',['$scope','$location','$interval','$routeParams',function($scope,$location,$interval,$routeParams){
    $scope.search=function(){
        $location.path('/search');
    }

}]).controller('registerCtrl',['$scope','$location','$interval',function($scope,$location,$interval){


}]).controller('messageCtrl',['$scope','$location','$interval',function($scope,$location,$interval){


}]).controller('saidCtrl',['$scope','$location','$interval',function($scope,$location,$interval){


}]).controller('mineCtrl',['$scope','$location','$interval',function($scope,$location,$interval){


}]).controller('detailCtrl',['$scope','$location','$interval',function($scope,$location,$interval){
    $scope.goUp=function(){
        window.history.go(-1);
    }

}]).controller('searchCtrl',['$scope','$location','$interval',function($scope,$location,$interval){
    $scope.goUp=function(){
        window.history.go(-1);
    }

}])
