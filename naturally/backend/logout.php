<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 08/10/2017
 * Time: 17:12
 */
// Include FB config file
require_once 'facebookConfig.php';

// Remove access token from session
unset($_SESSION['facebook_access_token']);

// Remove user data from session
unset($_SESSION['userData']);
$cookie_name = session_name();

// elimina todas as informações relacionadas à sessão atual
session_destroy();

// encerra o manipulador de sessão
session_write_close();

// limpa o cookie identificador de sessão
setcookie($cookie_name, '', time());

// Redirect to the homepage
header("Location: http://localhost/");
?>