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

// Redirect to the homepage
header("Location:index.php");
?>