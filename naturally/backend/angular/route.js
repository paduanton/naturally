app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
    // index
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        })
        // Paginas
        .when("/contato", {
            templateUrl: "frontend/conteudo/contato.html",
            controller: "ContatoController"
        })
        .when("/diabeticos", {
            templateUrl: "frontend/conteudo/diabeticos.html",
            controller: "DiabeticosController"
        })
        .when("/feed", {
            templateUrl: "frontend/conteudo/feed.html",
            controller: "FeedController"
        })
        .when("/pessoa", {
            templateUrl: "frontend/conteudo/pessoa.html",
            controller: "PerfilController"
        })
        .when("/receita", {
            templateUrl: "frontend/conteudo/receita.html",
            controller: "PerfilController"
        })
        .when("/fitness", {
            templateUrl: "frontend/conteudo/fitness.html",
            controller: "FitnessController"
        })
        .when("/perfil", {
            templateUrl: "frontend/conteudo/perfil.html",
            controller: "PerfilController"
        })
        .when("/semgluten", {
            templateUrl: "frontend/conteudo/semgluten.html",
            controller: "SemGlutenController"
        })
        .when("/semlactose", {
            templateUrl: "frontend/conteudo/semlactose.html",
            controller: "SemLactoseController"
        })
        .when("/sobre", {
            templateUrl: "frontend/conteudo/sobre.html",
            controller: "SobreController"
        })
        .when("/tendencias", {
            templateUrl: "frontend/conteudo/tendencias.html",
            controller: "TendenciasController"
        })
        .when("/veganos", {
            templateUrl: "frontend/conteudo/veganos.html",
            controller: "VeganosController"
        })
        .when("/vegetarianos", {
            templateUrl: "frontend/conteudo/vegetarianos.html",
            controller: "VegetarianosController"
        })
        .otherwise({redirectTo: "/"});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}]);