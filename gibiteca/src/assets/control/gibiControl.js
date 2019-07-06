var app = angular.module('todoApp', [])
.controller('GibiController', function($scope,$http) {
  
  var url = 'http://localhost:3000/gibis';
  
  /*$scope.nomeTela = "Cadastro de Gibi";*/

  $scope.pesquisar = function() {
    $http.get(url).then(function (response) {
        $scope.gibis = response.data;
    }, function (error) {alert(error);console.log(error);});
}

$scope.salvar = function() {
    if (typeof $scope.gibi.codigo == 'undefined') {
        if(typeof $scope.gibi.isbn == 'undefined'){
            alert('Digite o codigo do gibi');
        }else{
            $http.post(url,$scope.gibi).then(function (response) {
                $scope.gibis.push(response.data);
                $scope.novo();
            }, function (error) {alert(error);console.log(error);});
        }
    } else {
        $http.put(url,$scope.gibi).then(function () {
            $scope.pesquisar();
            $scope.novo();
        }, function (error) {alert(error);console.log(error);});
    } 
}

$scope.excluir = function() {
    if (typeof $scope.gibi.codigo == 'undefined') {
        alert('Escolha um codigo de gibi');
    } else {
        urlExcluir = url+"/"+$scope.gibi.codigo;
        $http.delete(urlExcluir).then(function () {
            $scope.pesquisar();
            $scope.novo();
        }, function (error) {alert(error);console.log(error);}); 
    }
}

$scope.novo = function() {
  $scope.gibi = {};
}        

$scope.seleciona = function(gibi) {
  $scope.gibi = gibi;
}

$scope.pesquisar();
$scope.novo();

$scope.itensCategoria = [
    $http.get(urlCategorias).then(function (res) {
        $scope.categorias = res.data;
        console.log("Categorias DATA: ", res.data);
    }, function (error) {alert(error);console.log(error);})
  ];
  $scope.itensCategoria.unshift({descricao: 'Selecione a Opção', idCategoria: 0});
  $scope.categoria = $scope.itensCategoria[0];


  $scope.itensEditoras = [
    $http.get(urlEditoras).then(function (rest) {
        $scope.editoras = rest.data;
        console.log("Editoras : ", rest.data);
    }, function (error) {alert(error);console.log(error);})
  ];
  $scope.itensEditoras.unshift({nome: 'Selecione a Opção', idEditora: 0});
  $scope.editora = $scope.itensEditoras[0];


});

