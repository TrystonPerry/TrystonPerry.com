<?php

  $mailTo = 'Tryston@TrystonPerry.com';

  $emailVaidator = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";

  if(isset($_POST['submit'])) {


    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$mailFrom.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: contact-success.html");

  }