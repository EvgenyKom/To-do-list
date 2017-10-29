var toDoApp=angular.module('toDoApp', []);
toDoApp.controller('tableCellsController', function($scope) {
 
  $scope.tables = [{

        taskDescription: 'задача номер 1',
        startDate: '02/06/2017',
        endDate:'03/08/2017',
    },{
		taskDescription: 'задача номер 2',
        startDate: '24/06/2017',
        endDate:'02/10/2017',
    },{
		taskDescription: 'задача номер 3',
        startDate: '12/07/2017',
        endDate:'01/12/2017',
    }]
	
	var date = new Date();
var currentDate = date.getDate() + "/" + date.getMonth()+ "/" + date.getFullYear();
	
	$scope.unshift= function(){
  $scope.tables.unshift({
    taskDescription: $scope.todoDescription,
        startDate: currentDate,
        endDate:$scope.todoDate,
  });
};

$scope.delete = function(cell) { 
    var index = $scope.tables.indexOf(cell); 
    $scope.tables.splice(index, 1); 
};

$scope.edit = function(cell) {
    $scope.activeClient = cell;
}; 
$scope.update = function(cell) { 
    $scope.activeClient = null; 
};
	
});
