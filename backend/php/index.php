<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 10/10/2017
 * Time: 23:51
 */
require_once 'fbConfig.php';
require_once 'usuario.php';

if (isset($accessToken)) {
    if (isset($_SESSION['facebook_access_token'])) {
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    } else {
        // Put short-lived access token in session
        $_SESSION['facebook_access_token'] = (string)$accessToken;

        // OAuth 2.0 client handler helps to manage access tokens
        $oAuth2Client = $fb->getOAuth2Client();

        // Exchanges a short-lived access token for a long-lived one
        $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);
        $_SESSION['facebook_access_token'] = (string)$longLivedAccessToken;

        // atribui token de acesso padrão para ser usado no script
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    }
    // redireciona para pagina inicial se a url tiver parametro 'code' na query string
    if (isset($_GET['code'])) {
        header('Location: http://localhost/');
    }

    // pegando informações do perfil do facebook
    try {
        $requisicaoPerfil = $fb->get('/me?fields=name,first_name, last_name,email,link,gender,locale,picture.width(1000).height(1000)');
        $perfilDoUsuario = $requisicaoPerfil->getGraphNode()->asArray();
    } catch (FacebookResponseException $e) {
        echo 'Graph retornou um erro: ' . $e->getMessage();
        session_destroy();
        // redireciona usuário de volta a pagina de login
        header('Location: http://localhost/');
        exit;
    } catch (FacebookSDKException $e) {
        echo 'Facebook SDK retornou um erro: ' . $e->getMessage();
        exit;
    }

    // inicializa classe usuário
    $user = new Usuario();

    // insere ou atualiza dados do usuário no banco
    $fbdadosDoUsuario = array(
        'oauth_provider' => 'facebook',
        'facebook_id' => $perfilDoUsuario['id'],
        'nome_completo' => $perfilDoUsuario['name'],
        'primeiro_nome' => $perfilDoUsuario['first_name'],
        'ultimo_nome' => $perfilDoUsuario['last_name'],
        'email' => $perfilDoUsuario['email'],
        'genero' => $perfilDoUsuario['gender'],
        'localizacao' => $perfilDoUsuario['locale'],
        'foto_perfil' => $perfilDoUsuario['picture']['url'],
        'link_perfil' => $perfilDoUsuario['link']
    );
    $dadosDoUsuario = $user->checkUser($fbdadosDoUsuario);

    // coloca dados do usuário na sessão
    $_SESSION['userData'] = $dadosDoUsuario;

    // pega url de login                       http://localhost/backend/php/logout.php?
    $logoutURL = $helper->getLogoutUrl($accessToken, $redirectURL . 'logout.php');

    // fornece dados do perfil do facebook
    if (!empty($dadosDoUsuario)) {
        /*if($dadosDoUsuario['primeiro_nome'] == $dadosDoUsuario['ultimo_nome']) {
            $dadosDoUsuario['nome'] = $dadosDoUsuario['primeiro_nome'];
        }
        /* $mostrar = '<h1>Facebook Profile Details </h1>';
                 $mostrar .= '<br/>Facebook ID : ' . $dadosDoUsuario['oauth_uid'];
                 $mostrar .= '<br/>Email : ' . $dadosDoUsuario['email'];
                 $mostrar .= '<br/>Gender : ' . $dadosDoUsuario['gender'];
                 $mostrar .= '<br/>Locale : ' . $dadosDoUsuario['locale'];
                 $mostrar .= '<br/>Logged in with : Facebook';
                 $mostrar .= '<br/><a href="' . $dadosDoUsuario['link'] . '" target="_blank">Click to Visit Facebook Page</a>';
                 $mostrar .= '<br/>Logout from <a href="' . $logoutURL . '">Facebook</a>';*/
        $mostrar = '<a class="js-perfil-toggle perfil-toggle">
                         <img ng-src="' . $dadosDoUsuario['foto_perfil'] . '" class="img-circle"> ' . $dadosDoUsuario['primeiro_nome'] . '
                   </a>
<div id="fh5co-offcanvas">
    <a href="#" class="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span><i
                class="icon-cross"><i
                    class="icon-cross"></i><i
                    class="icon-cross"></i></i></span></a>
    <div class="fh5co-bio">
        <figure>
            <a href="#">
                <img ng-src="' . $dadosDoUsuario['foto_perfil'] . '" class="img-responsive">
            </a>
        </figure>
        <h3 class="heading">Sobre mim</h3>
        <a href="#"><h3>' . $dadosDoUsuario['primeiro_nome'] . '</h3></a>
        <p>Um amante de TI, fanático por SERIADOS e apaixonado por GAMES.</p>
        <ul class="fh5co-social">
           <li><a ng-href="' . $dadosDoUsuario['link_perfil'] . '" target="_blank"><i class="icon-facebook"></i></a></li>
        </ul>
    </div>

    <div class="fh5co-menu">
        <div class="fh5co-box">
            <h3 class="heading">
                <a ng-href="/#!/perfil">
                    <li class="glyphicon glyphicon-user"></li>
                    Perfil
                </a>
            </h3>
            <ul>
                <li class=""><p class="text-muted">' . $dadosDoUsuario['email'] . '</p></li>
                <hr/>
                <li class="glyphicon glyphicon-heart-empty"><a href="#"> Seguindo</a></li>
                <li class="glyphicon glyphicon-heart"><a href="#"> Seguidores</a></li>
                <li class="glyphicon glyphicon-star"><a href="#"> Favoritos</a></li>
                <li class="glyphicon glyphicon-cutlery"><a href="#"> Receitas</a></li>
                <li class="glyphicon glyphicon-cog"><a href="#"> Configurações</a></li>
            </ul>
        </div>
        <div class="fh5co-box">
            <h3 class="heading">Pesquisar na história</h3>
            <form action="#">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="O que deseja procurar?">
                </div>
            </form>
        </div>
        <p id="sair">
            <a href="' . $logoutURL . '">
                <span class="glyphicon glyphicon-log-out"></span> SAIR
            </a>
        </p>
    </div>
</div>
';
    } else {
        $mostrar = '<h3 style="color:red">Algum problema ocorreu, por favor tente de novo.</h3>';
    }

} else {
    // pegar url de login
    $loginURL = $helper->getLoginUrl($redirectURL, $fbPermissions);
    // facebook login button
    $mostrar = '
    <a href="' . htmlspecialchars($loginURL) . '">
    <button type="button" class="login">
    <!--<span class="glyphicon glyphicon-log-in"></span> -->
    <div class="sign">
    <img src="frontend/assets/img/fb.svg"> Logar com PHP
    </div>
    </button>
    </a>';
}
?>