<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Pilotes de F1</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../styles/style.css">
</head>

<body>

    <?php include "nav.php"; ?>
    <br>
    <h2>Pilotes de F1 2024</h2>
    <?php
    $pilotes = [
        ['Classement' => '1', 'Points' => '437', 'Prenom' => 'MAX', 'Nom' => 'VERSTAPPEN', 'Equipe' => 'Red Bull Racing', 
        'img_pays' => '../images/Netherlands.avif', 'img_numero' => '../images/MAXVER01.avif', 'img_portrait' => '../images/MAX.avif'],
        ['Classement' => '2', 'Points' => '374', 'Prenom' => 'LANDO', 'Nom' => 'NORRIS', 'Equipe' => 'McLaren', 
        'img_pays' => '../images/UK.avif', 'img_numero' => '../images/LANNOR04.avif', 'img_portrait' => '../images/LANDO.avif'],
        ['Classement' => '3', 'Points' => '356', 'Prenom' => 'CHARLES', 'Nom' => 'LELERC', 'Equipe' => 'Ferrari', 
        'img_pays' => '../images/Monaco.avif', 'img_numero' => '../images/CHALEC16.avif', 'img_portrait' => '../images/CHARLES.avif'],
        ['Classement' => '4', 'Points' => '292', 'Prenom' => 'OSCAR', 'Nom' => 'PIASTRI', 'Equipe' => 'McLaren', 
        'img_pays' => '../images/Australia.avif', 'img_numero' => '../images/OSCPIA81.avif', 'img_portrait' => '../images/OSCAR.avif'],
        ['Classement' => '5', 'Points' => '290', 'Prenom' => 'CARLOS', 'Nom' => 'SAINZ', 'Equipe' => 'Ferrari', 
        'img_pays' => '../images/Spain.avif', 'img_numero' => '../images/CARSAI55.avif', 'img_portrait' => '../images/CARLOS.avif'],
        ['Classement' => '6', 'Points' => '245', 'Prenom' => 'GEORGE', 'Nom' => 'RUSSELL', 'Equipe' => 'Mercedes', 
        'img_pays' => '../images/UK.avif', 'img_numero' => '../images/GEORUS63.avif', 'img_portrait' => '../images/GEORGE.avif'],
        ['Classement' => '7', 'Points' => '223', 'Prenom' => 'LEWIS', 'Nom' => 'HAMILTON', 'Equipe' => 'Mercedes', 
        'img_pays' => '../images/UK.avif', 'img_numero' => '../images/LEWHAM44.avif', 'img_portrait' => '../images/LEWIS.avif'],
        ['Classement' => '8', 'Points' => '152', 'Prenom' => 'SERGIO', 'Nom' => 'PEREZ', 'Equipe' => 'Red Bull Racing', 
        'img_pays' => '../images/Mexico.avif', 'img_numero' => '../images/SERPER11.avif', 'img_portrait' => '../images/SERGIO.avif'],
        ['Classement' => '9', 'Points' => '70', 'Prenom' => 'FERNANDO', 'Nom' => 'ALONSO', 'Equipe' => 'Aston Martin', 
        'img_pays' => '../images/Spain.avif', 'img_numero' => '../images/FERALO14.avif', 'img_portrait' => '../images/FERNANDO.avif'],
        ['Classement' => '10', 'Points' => '42', 'Prenom' => 'PIERRE', 'Nom' => 'GASLY', 'Equipe' => 'Alpine', 
        'img_pays' => '../images/France.avif', 'img_numero' => '../images/PIEGAS10.avif', 'img_portrait' => '../images/PIERRE.avif'],
        ['Classement' => '11', 'Points' => '41', 'Prenom' => 'NICO', 'Nom' => 'HULKENBERG', 'Equipe' => 'Haas', 
        'img_pays' => '../images/Germany.avif', 'img_numero' => '../images/NICHUL27.avif', 'img_portrait' => '../images/NICO.avif'],
        ['Classement' => '12', 'Points' => '30', 'Prenom' => 'YUKI', 'Nom' => 'TSUNODA', 'Equipe' => 'RB', 
        'img_pays' => '../images/Japan.avif', 'img_numero' => '../images/YUKTSU22.avif', 'img_portrait' => '../images/YUKI.avif'],
        ['Classement' => '13', 'Points' => '24', 'Prenom' => 'LANCE', 'Nom' => 'STROLL', 'Equipe' => 'Aston Martin', 
        'img_pays' => '../images/Canada.avif', 'img_numero' => '../images/LANSTR18.avif', 'img_portrait' => '../images/LANCE.avif'],
        ['Classement' => '14', 'Points' => '23', 'Prenom' => 'ESTEBAN', 'Nom' => 'OCON', 'Equipe' => 'Alpine', 
        'img_pays' => '../images/France.avif', 'img_numero' => '../images/ESTOCO31.avif', 'img_portrait' => '../images/ESTEBAN.avif'],
        ['Classement' => '15', 'Points' => '16', 'Prenom' => 'KEVIN', 'Nom' => 'MAGNUSSEN', 'Equipe' => 'Haas', 
        'img_pays' => '../images/Denmark.avif', 'img_numero' => '../images/KEVMAG20.avif', 'img_portrait' => '../images/KEVIN.avif'],
        ['Classement' => '16', 'Points' => '12', 'Prenom' => 'ALEXANDER', 'Nom' => 'ALBON', 'Equipe' => 'Williams', 
        'img_pays' => '../images/Thailand.avif', 'img_numero' => '../images/ALEALB23.avif', 'img_portrait' => '../images/ALEX.avif'],
        ['Classement' => '17', 'Points' => '12', 'Prenom' => 'DANIEL', 'Nom' => 'RICCIARDO', 'Equipe' => 'RB', 
        'img_pays' => '../images/Australia.avif', 'img_numero' => '../images/DANRIC3.avif', 'img_portrait' => '../images/DANIEL.avif'],
        ['Classement' => '18', 'Points' => '7', 'Prenom' => 'OLIVER', 'Nom' => 'BEARMAN', 'Equipe' => 'Haas', 
        'img_pays' => '../images/UK.avif', 'img_numero' => '../images/OLIBEA50.avif', 'img_portrait' => '../images/OLIVER.avif'],
        ['Classement' => '19', 'Points' => '5', 'Prenom' => 'FRANCO', 'Nom' => 'COLAPINTO', 'Equipe' => 'Williams', 
        'img_pays' => '../images/Argentina.avif', 'img_numero' => '../images/FRACOL43.avif', 'img_portrait' => '../images/FRANCO.avif'],
        ['Classement' => '20', 'Points' => '4', 'Prenom' => 'GUANYU', 'Nom' => 'ZHOU', 'Equipe' => 'Kick Sauber', 
        'img_pays' => '../images/China.avif', 'img_numero' => '../images/GUAZHO24.avif', 'img_portrait' => '../images/ZHOU.avif'],
        ['Classement' => '21', 'Points' => '4', 'Prenom' => 'LIAM', 'Nom' => 'LAWSON', 'Equipe' => 'RB', 
        'img_pays' => '../images/NewZealand.avif', 'img_numero' => '../images/LIALAW30.avif', 'img_portrait' => '../images/LIAM.avif'],
        ['Classement' => '22', 'Points' => '0', 'Prenom' => 'VALTTERI', 'Nom' => 'BOTTAS', 'Equipe' => 'Kick Sauber', 
        'img_pays' => '../images/Finland.avif', 'img_numero' => '../images/VALBOT77.avif', 'img_portrait' => '../images/VALTTERI.avif'],
        ['Classement' => '23', 'Points' => '0', 'Prenom' => 'LOGAN', 'Nom' => 'SARGEANT', 'Equipe' => 'Williams', 
        'img_pays' => '../images/US.avif', 'img_numero' => '../images/LOGSAR2.avif', 'img_portrait' => '../images/LOGAN.avif'],
        ['Classement' => '24', 'Points' => '0', 'Prenom' => 'JACK', 'Nom' => 'DOOHAN', 'Equipe' => 'Alpine', 
        'img_pays' => '../images/Australia.avif', 'img_numero' => '../images/JACDOO61.avif', 'img_portrait' => '../images/JACK.avif']

    ];
    ?>
    <div id="group">

        <?php foreach ($pilotes as $pilote):
        ?>
            <div>
                <table class="pilote">
                    <tr>
                        <th class="pilote"><?= $pilote['Classement']; ?></th>
                        <th class="pilote"><?= $pilote['Points']; ?> points</th>
                    </tr>
                    <tr>
                        <td><?= $pilote['Prenom']; ?><br><b><?= $pilote['Nom']; ?></b></td>
                        <td><img class="pays" src=<?= $pilote['img_pays']; ?> alt=""></td>
                    </tr>
                    <tr>
                        <td class="pilote_equipe" colspan="2"><?= $pilote['Equipe']; ?></td>
                    </tr>
                    <tr>
                        <td><img class="numero" src=<?= $pilote['img_numero']; ?> alt=""></td>
                        <td><img class="portrait" src=<?= $pilote['img_portrait']; ?> alt=""></td>
                    </tr>
                </table>
            </div>
        <?php 
            endforeach;
        ?>

    </div>
    <?php include "footer.php"; ?>
</body>

</html>