app.controller('TableCtrl', function ($scope, deviceFactory ,$http) {

    $scope.sortType = 'StartTime';
    $scope.sortReverse = false;

    $scope.loaderBool = true;
   
    $scope.page = 1;

    $scope.numberOfPagers = 7;

    $scope.devices = [];
   var  devicesArray = []

    // Starting pages Array
   $scope.pages = [];
   for (var i = 1; i <= $scope.numberOfPagers; i++) {
       $scope.pages.push(i);
   }

    // On start
          deviceFactory.GetSessionsFunc().then(
            // callback function for successful http request
              function success(response) {
                 
                  $scope.devices = response.data.Sessions;
               
                  console.log($scope.devices);
                  $scope.loaderBool = false;
                  $scope.records = $scope.devices.length;
            },
            // callback function for error in http request
            function error(response) {
                // log errors
            }
        );

         
       // Pagination Stuff
          $scope.selectPage = function (page , index) {
              $scope.loaderBool = true;
              //   this.addClass
              var index = index;   

              $scope.page = page;


              if (page > 4) {
                  $scope.pages = [];
                  for (var i = 1; i <= 7; i++) {
                      $scope.pages.push(page + i -4 );  
                  }
              };
                  deviceFactory.GetSessionsByPageFunc(page).then(
                      // callback function for successful http request
                      function success(response) {
                          $('#pageNum').addClass('active');

                          $scope.loaderBool = false;
                          $scope.devices = response.data.Sessions;
                          $scope.records = $scope.devices.length;

                      },
                      // callback function for error in http request
                      function error(response) {
                          alert('not such a page ! ');
                          page = page - 3;
                          // log errors
                      }
                  );


              
          };


});
