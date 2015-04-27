<?php

global $project;
$project = 'mysite';

global $database;
$database = 'vagrant';

require_once('conf/ConfigureFromEnv.php');

// Set the site locale
i18n::set_locale('en_US');
error_reporting(E_ALL);
Director::set_environment_type("dev");
