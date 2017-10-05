<?php
/**
 * Created by PhpStorm.
 * User: anton
 * Date: 04/10/2017
 * Time: 23:49
 */

require_once 'lib/Facebook/autoload.php';
$fb = new \Facebook\Facebook([
    'app_id' => '{278997635938705}',
    'app_secret' => '{7f24451c41637e723665d3dce57c478c}',
    'default_graph_version' => 'v2.10',
    //'default_access_token' => '{access-token}', // optional
]);