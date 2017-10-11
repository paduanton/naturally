<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 10/10/2017
 * Time: 23:51
 */
require_once 'fbConfig.php';
require_once 'usuario.php';

if(isset($accessToken)){
    if(isset($_SESSION['facebook_access_token'])){
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    }else{
        // Put short-lived access token in session
        $_SESSION['facebook_access_token'] = (string) $accessToken;

        // OAuth 2.0 client handler helps to manage access tokens
        $oAuth2Client = $fb->getOAuth2Client();

        // Exchanges a short-lived access token for a long-lived one
        $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['facebook_access_token']);
        $_SESSION['facebook_access_token'] = (string) $longLivedAccessToken;

        // Set default access token to be used in script
        $fb->setDefaultAccessToken($_SESSION['facebook_access_token']);
    }

    // Redirect the user back to the same page if url has "code" parameter in query string
    if(isset($_GET['code'])){
        header('Location: http://localhost/backend/php/index.php');
    }

    // Getting user facebook profile info
    try {
        $profileRequest = $fb->get('/me?fields=name,first_name,last_name,email,link,gender,locale,picture.width(800).height(800)');
        $fbUserProfile = $profileRequest->getGraphNode()->asArray();
    } catch(FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        session_destroy();
        // Redirect user back to app login page
        header("Location: ./");
        exit;
    } catch(FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }

    // Initialize User class
    $user = new Usuario();

    // Insert or update user data to the database
    $fbUserData = array(
        'oauth_provider'=> 'facebook',
        'oauth_uid'     => $fbUserProfile['id'],
        'first_name'    => $fbUserProfile['first_name'],
        'last_name'     => $fbUserProfile['last_name'],
        'email'         => $fbUserProfile['email'],
        'gender'        => $fbUserProfile['gender'],
        'locale'        => $fbUserProfile['locale'],
        'picture'       => $fbUserProfile['picture']['url'],
        'link'          => $fbUserProfile['link']
    );
    $userData = $user->checkUser($fbUserData);

    // Put user data into session
    $_SESSION['userData'] = $userData;

    // Get logout url                                         $redirectURL?
    $logoutURL = $helper->getLogoutUrl($accessToken, 'http://localhost/backend/php/logout.php');

    // Render facebook profile data
    if(!empty($userData)){
        /* $output = '<h1>Facebook Profile Details </h1>';
                 $output .= '<br/>Facebook ID : ' . $userData['oauth_uid'];
                 $output .= '<br/>Email : ' . $userData['email'];
                 $output .= '<br/>Gender : ' . $userData['gender'];
                 $output .= '<br/>Locale : ' . $userData['locale'];
                 $output .= '<br/>Logged in with : Facebook';
                 $output .= '<br/><a href="' . $userData['link'] . '" target="_blank">Click to Visit Facebook Page</a>';
                 $output .= '<br/>Logout from <a href="' . $logoutURL . '">Facebook</a>';*/
        $output = '<a class="js-perfil-toggle perfil-toggle">
                         <img ng-src="' . $userData['picture'] . '" class="img-circle"> ' . $userData['first_name'] . ' ' . $userData['last_name'] . '
                   </a>
<div id="fh5co-offcanvas">
    <a href="#" class="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span><i
                class="icon-cross"><i
                    class="icon-cross"></i><i
                    class="icon-cross"></i></i></span></a>
    <div class="fh5co-bio">
        <figure>
            <a href="#">
                <img ng-src="' . $userData['picture'] . '" class="img-responsive">
            </a>
        </figure>
        <h3 class="heading">Sobre mim</h3>
        <a href="#"><h3>' . $userData['first_name'] . ' ' . $userData['last_name'] . '</h3></a>
        <p>Um amante de TI, fanático por SERIADOS e apaixonado por GAMES.</p>
        <ul class="fh5co-social">
           <li><a ng-href="' . $userData['link'] . '" target="_blank"><i class="icon-facebook"></i></a></li>
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
                <li class=""><p class="text-muted">' . $userData['email'] . '</p></li>
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
</div>';
    }else{
        $output = '<h3 style="color:red">Some problem occurred, please try again.</h3>';
    }

}else {
    //'http://' . $_SERVER['HTTP_HOST']
    // pegar url de login
    $loginURL = $helper->getLoginUrl($redirectURL, $fbPermissions);
    // facebook login button
    $output = '
    <a href="' . htmlspecialchars($loginURL) . '">
    <button type="button" class="login">
    <!--<span class="glyphicon glyphicon-log-in"></span> -->
    <div class="sign">
    <img src="frontend/assets/img/fb.png">Logar com PHP
    </div>
    </button>
    </a>';
}
?>