var app = angular.module('todoApp', [])
.controller('CategoriaController', function($scope,$http) {
  
  var url = 'http://localhost:3000/categorias';
  
  $scope.nomeTela = "Cadastro de Categorias";

  $scope.pesquisar = function() {
    $http.get(url).then(function (response) {
        $scope.categorias = response.data;
    }, function (error) {alert(error);console.log(error);});
}

$scope.salvar = function() {
    if (typeof $scope.categoria.codigo == 'undefined') {
        if(typeof $scope.categoria.descricao == 'undefined'){
            alert('Digite uma categoria');
        }else{
            $http.post(url,$scope.categoria).then(function (response) {
                $scope.categorias.push(response.data);
                $scope.novo();
            }, function (error) {alert(error);console.log(error);});
        }
    } else {
        $http.put(url,$scope.categoria).then(function () {
            $scope.pesquisar();
            $scope.novo();
        }, function (error) {alert(error);console.log(error);});
    } 
}

$scope.excluir = function() {
    if (typeof $scope.categoria.codigo == 'undefined') {
        alert('Escolha uma categoria');
    } else {
        urlExcluir = url+"/"+$scope.categoria.codigo;
        $http.delete(urlExcluir).then(function () {
            $scope.pesquisar();
            $scope.novo();
        }, function (error) {alert(error);console.log(error);}); 
    }
}

$scope.novo = function() {$scope.categoria = {};}        
$scope.seleciona = function(categoria) {$scope.categoria = categoria;}
$scope.pesquisar();
$scope.novo();
});