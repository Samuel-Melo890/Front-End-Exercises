<?php
    // Getting parameters
    $fNum = $_GET["fNum"];
    $sNum = $_GET["sNum"];

    // Getting operations result
    $sum = $fNum + $sNum;
    $sub = $fNum - $sNum;
    $div = $fNum / $sNum;
    $mult = $fNum * $sNum;

    // Returning array with the results
    echo json_encode([
        "sum" => $sum,
        "sub" => $sub,
        "div" => $div,
        "mult" => $mult
    ]);
?>