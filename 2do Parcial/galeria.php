<?php
include("conexion.php");
$sql = "SELECT * FROM libros";

$resultado = $con->query($sql);
$data = [];
while($row = $resultado->fetch_assoc()){
    $data[] = [
        "id"=> $row["id"],
        "imagen" => $row["imagen"],
        "titulo" => $row["titulo"],
        "autor" => $row["autor"],
    ];
}
echo json_encode($data);

?>