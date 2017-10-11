<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 11/10/2017
 * Time: 01:46
 */
require_once 'fbConfig.php';

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

header("Location: http://localhost/");