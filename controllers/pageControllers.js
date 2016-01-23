angular.module("synapse")
  .constant("companyListActiveClass", "btn-primary")
  .constant("clientListActiveClass", "btn-primary")
  .constant("companyListPageCount", 3)
  .constant("clientListPageCount", 3)
  .controller("pageCtrl", function($scope, $filter,companyListPageCount,companyListActiveClass,clientListPageCount,clientListActiveClass){
    var selectedCompany = null;
    $scope.selectedPage = 1;
    $scope.selectedClientPage = 1;
    $scope.pageSize = companyListPageCount;
    $scope.clientPageSize = clientListPageCount;

    $scope.selectCompany = function(newCompany){
      selectedCompany = newCompany;
      $scope.selectedClientPage = 1;

      console.log(selectedCompany);
    };

    $scope.selectPage = function(newPage){
      $scope.selectedPage=newPage;
    }

    $scope.companyFilterFn = function(company){
      // console.log(company.Name);
      return company.Name==selectedCompany;
    }

    $scope.getCompanyClass = function(company){
      return selectedCompany == company ? companyListActiveClass : "";
    }

    $scope.getPageClass = function(page){
      return $scope.selectedPage == page ? companyListActiveClass: "";
    }

    $scope.selectClientPage = function(newPage){
      $scope.selectedClientPage=newPage;
    }

    $scope.getClientPageClass = function(page){
      return $scope.selectedClientPage == page ? clientListActiveClass: "";
    }
  })
