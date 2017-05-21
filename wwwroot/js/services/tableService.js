
/* 
API Key: 8ca3c900cc1f436986d846940d8542c8
API Secret: 423467cf645cff1288d3a768
*/
    var serviceId = 'deviceFactory';

    angular.module('app').factory(serviceId, ['$http', deviceFactory]);

    function deviceFactory($http) {
      

        var apiString = "https://api.appsee.com/sessions";

        var apikey = "8ca3c900cc1f436986d846940d8542c8";
        var apisecret = "423467cf645cff1288d3a768";

        var lastWeekDay = new Date();
        var today = new Date();
        (function () {
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = yyyy + '-' + mm + '-' + dd ;
            console.log("date is " + today);
        })(); 
        function getLastWeek() {
            var today = new Date();
            var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            return lastWeek;
        }
        var lastWeek = getLastWeek();
        var lastWeekMonth = lastWeek.getMonth() + 1;
        var lastWeekDay = lastWeek.getDate();
        var lastWeekYear = lastWeek.getFullYear();

        var lastWeekDate = lastWeekYear + "-" + lastWeekMonth + "-" + lastWeekDay;
       

        var todate = today;
        var fromdate = lastWeekDate;  
        
       
        
 
        function GetSessionsFunc() {     
         return $http({
                url: apiString,
                method: "GET",
                params: {
                    apikey: apikey,
                    apisecret: apisecret,
                    fromdate: fromdate,
                    todate: todate
                }
            });
        }

        function GetSessionsByPageFunc(page) {
            console.log("page-  " + page);
            return $http({
                url: apiString,
                method: "GET",
                params: {
                    apikey: apikey,
                    apisecret: apisecret,
                    fromdate: fromdate,
                    todate: todate,
                    page: page
                }
            });

        }



        var service = {
            GetSessionsFunc: GetSessionsFunc,
            GetSessionsByPageFunc: GetSessionsByPageFunc
        };

        return service;
    }
