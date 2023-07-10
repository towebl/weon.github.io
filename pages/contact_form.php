<?php

    $connection = mysqli_connect('localhost', 'root', '', 'book_db');

    if(isset($_PoOST['send'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['phone'];
        $location = $_POST['location'];
        $ticket = $_POST['ticket'];
        $arrivals = $_POST['arrivals'];
        $leaving = $_POST['leaving'];

        $request = " insert into book_form(name, email, phone, address, location, ticket, arrivals, leaving) values('$name', '$email', '$phone', '$address', '$location', '$ticket', '$arrivals', '$leaving')";

        mysqli_query($connection, $request);

        header('location:contact.php');
    } else {
        echo 'something went wrong try again';
    }