angular.module('empApp')
    .controller('homeCtrl', ['$scope', '$http', '$timeout',  '$state', function homeCtrl($scope,$http, $timeout, $state){
        $scope.empid = "Mukesh";
    
        /*$http({
            method: 'Get',
            url: '../src/assets/data/emp.json'
        }).then(function(data){
            console.log(data.name);    
        });*/
        
        $scope.groupByObj = []; 
        $scope.groupBycat = '';
        $http.get('../src/assets/data/emp.json').success(function(data){
            $scope.empdata = data;
            console.log(Object.keys($scope.empdata));
            
            angular.forEach(data, function(val, index) {
               $scope.groupByObj.push(Object.keys(val));
            })
        });
        
        
       
        
        $timeout(function(){
             $state.go('home.grid');
        }, 10);
        
        
        $scope.sortByArr = {
            'Name': 'name',
            'SurName' : 'surname',
            'Email' : 'email',
            'Date of Birth' : 'dob',
            'Joining Date' : 'joining_date',
            'Last Employer' : 'last_employer',
            'Department' : 'department'
        };
        
        
        $scope.sortEmployee = function(){
          console.log(this);  
        };
        
        
    }])
