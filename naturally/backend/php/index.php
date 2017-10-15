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
        $profileRequest = $fb->get('/me?fields=name,first_name,last_name,email,link,gender,locale,picture.width(1000).height(1000)');
        $fbUserProfile = $profileRequest->getGraphNode()->asArray();
    } catch (FacebookResponseException $e) {
        echo 'Graph retornou um erro: ' . $e->getMessage();
        session_destroy();
        // redireciona usuário de volta a pagina de login
        header("Location: ./");
        exit;
    } catch (FacebookSDKException $e) {
        echo 'Facebook SDK retornou um erro: ' . $e->getMessage();
        exit;
    }

    // inicializa classe usuário
    $user = new Usuario();

    // insere ou atualiza dados do usuário no banco
    $fbDadosUsuario = array(
        'oauth_provider' => 'facebook',
        'oauth_uid' => $fbUserProfile['id'],
        'name' => $fbUserProfile['name'],
        'first_name' => $fbUserProfile['first_name'],
        'last_name' => $fbUserProfile['last_name'],
        'email' => $fbUserProfile['email'],
        'gender' => $fbUserProfile['gender'],
        'locale' => $fbUserProfile['locale'],
        'picture' => $fbUserProfile['picture']['url'],
        'link' => $fbUserProfile['link']
    );
    $dadosUsuario = $user->checkUser($fbDadosUsuario);

    // coloca dados do usuário na sessão
    $_SESSION['userData'] = $dadosUsuario;

    // pega url de login                       http://localhost/backend/php/logout.php?
    $logoutURL = $helper->getLogoutUrl($accessToken, $redirectURL . 'logout.php');

    // fornece dados do perfil do facebook
    if (!empty($dadosUsuario)) {
        /* $mostrar = '<h1>Facebook Profile Details </h1>';
                 $mostrar .= '<br/>Facebook ID : ' . $dadosUsuario['oauth_uid'];
                 $mostrar .= '<br/>Email : ' . $dadosUsuario['email'];
                 $mostrar .= '<br/>Gender : ' . $dadosUsuario['gender'];
                 $mostrar .= '<br/>Locale : ' . $dadosUsuario['locale'];
                 $mostrar .= '<br/>Logged in with : Facebook';
                 $mostrar .= '<br/><a href="' . $dadosUsuario['link'] . '" target="_blank">Click to Visit Facebook Page</a>';
                 $mostrar .= '<br/>Logout from <a href="' . $logoutURL . '">Facebook</a>';*/
        $mostrar = '<a class="js-perfil-toggle perfil-toggle">
                         <img ng-src="' . $dadosUsuario['picture'] . '" class="img-circle"> ' . $dadosUsuario['name'].'
                   </a>
<div id="fh5co-offcanvas">
    <a href="#" class="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span><i
                class="icon-cross"><i
                    class="icon-cross"></i><i
                    class="icon-cross"></i></i></span></a>
    <div class="fh5co-bio">
        <figure>
            <a href="#">
                <img ng-src="' . $dadosUsuario['picture'] . '" class="img-responsive">
            </a>
        </figure>
        <h3 class="heading">Sobre mim</h3>
        <a href="#"><h3>' . $dadosUsuario['name'].'</h3></a>
        <p>Um amante de TI, fanático por SERIADOS e apaixonado por GAMES.</p>
        <ul class="fh5co-social">
           <li><a ng-href="' . $dadosUsuario['link'] . '" target="_blank"><i class="icon-facebook"></i></a></li>
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
                <li class=""><p class="text-muted">' . $dadosUsuario['email'] . '</p></li>
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
