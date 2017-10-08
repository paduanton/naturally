<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 04/10/2017
 * Time: 23:49
 */

session_start();


require_once 'lib/Facebook/autoload.php';
$fb = new \Facebook\Facebook([
    'app_id' => '278997635938705',
    'app_secret' => '7f24451c41637e723665d3dce57c478c',
    'default_graph_version' => 'v2.10',
    //'default_access_token' => '{access-token}', // optional
]);

$helper = $fb->getRedirectLoginHelper();
// var_dump($helper);
$permissions = ['email'];
/*
$permissions = ['name'];
$permissions = ['last_name'];
$permissions = ['first_name'];
$permissions = ['picture'];
*/
try {
    if (isset($_SESSION['face_acess_token'])) {
        $accessToken = $helper->getAccessToken();
    } else {
        $accessToken = $helper->getAccessToken();
    }
} catch (Facebook\Exceptions\FacebookResponseException $e) {
    // When Graph returns an error
    echo 'Graph returned an error: ' . $e->getMessage();
    exit;
} catch (Facebook\Exceptions\FacebookSDKException $e) {
    // When validation fails or other local issues
    echo 'Facebook SDK returned an error: ' . $e->getMessage();
    exit;
}

if (!isset($accessToken)) {
    $url_login = 'http://localhost/backend/face.php';
    $loginUrl = $helper->getLoginUrl($url_login, $permissions);
} else {
    $url_login = 'http://localhost/backend/face.php';
    $loginUrl = $helper->getLoginUrl($url_login, $permissions);

    // usuário já autenticado
    if (isset($_SESSION['face_acess_token'])) {
        $fb->setDefaultAccessToken($_SESSION['face_acess_token'] = (string) $accessToken);
    } else { // não autenticado
        $_SESSION['face_acess_token'] = (string) $accessToken;
        $oAuth2Client = $fb->getOAuth2Client();
        $_SESSION['face_acess_token'] = $oAuth2Client->getLongLivedAccessToken($_SESSION['face_acess_token']);
        $fb->setDefaultAccessToken($_SESSION['face_acess_token']);
    }
    try {
        // Returns a `Facebook\FacebookResponse` object
        $response = $fb->get('/me?fields=id, first_name, last_name, name, picture, email');
        $user = $response->getGraphUser();
        var_dump($user);
    } catch (Facebook\Exceptions\FacebookResponseException $e) {
        echo 'Graph returned an error: ' . $e->getMessage();
        exit;
    } catch (Facebook\Exceptions\FacebookSDKException $e) {
        echo 'Facebook SDK returned an error: ' . $e->getMessage();
        exit;
    }
}
?>
<a href="<?php echo $loginUrl?>">Facebook</a>