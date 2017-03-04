<?php

$recepient = "candylandshop@mail.ru";
$sitename = "Candy land";

// \nПочта: $email \nСообщение: $textaria
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$textaria = trim($_POST["mas"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email \nСообщение: $textaria";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");