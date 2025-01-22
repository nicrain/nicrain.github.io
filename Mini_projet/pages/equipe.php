<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Équipes de F1</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../styles/style.css">
</head>

<body>

    <?php include "nav.php"; ?>
    <br>
    <h2>Équipes de F1 2024</h2>
    <?php
    $equipes = [
        ['Classement' => '1', 'Points' => '666', 'Equipe' => 'McLaren', 'img_equipe' => '../images/mclaren-logo.avif', 
        'Prenom_1' => 'LANDO', 'Nom_1' => '  NORRIS',  'img_portrait_1' => '../images/LANDO.avif',
        'Prenom_2' => 'OSCAR', 'Nom_2' => '  PIASTRI',  'img_portrait_2' => '../images/OSCAR.avif',
        'img_car' => '../images/mclaren.avif'],

        ['Classement' => '2', 'Points' => '652', 'Equipe' => 'Ferrari', 'img_equipe' => '../images/ferrari-logo.avif', 
        'Prenom_1' => 'CHARLES', 'Nom_1' => '  LELERC',  'img_portrait_1' => '../images/CHARLES.avif',
        'Prenom_2' => 'CARLOS', 'Nom_2' => '  SAINZ',  'img_portrait_2' => '../images/CARLOS.avif',
        'img_car' => '../images/ferrari.avif'],

        ['Classement' => '3', 'Points' => '589', 'Equipe' => 'Red Bull Racing', 'img_equipe' => '../images/red-bull-racing-logo.avif', 
        'Prenom_1' => 'MAX', 'Nom_1' => '  VERSTAPPEN', 'img_portrait_1' => '../images/MAX.avif',
        'Prenom_2' => 'SERGIO', 'Nom_2' => '  PEREZ',  'img_portrait_2' => '../images/SERGIO.avif',
        'img_car' => '../images/red-bull-racing.avif'],

        ['Classement' => '4', 'Points' => '468', 'Equipe' => 'Mercedes', 'img_equipe' => '../images/mercedes-logo.avif', 
        'Prenom_1' => 'LEWIS', 'Nom_1' => '  HAMILTON',  'img_portrait_1' => '../images/LEWIS.avif',
        'Prenom_2' => 'GEORGE', 'Nom_2' => '  RUSSELL',  'img_portrait_2' => '../images/GEORGE.avif',
        'img_car' => '../images/mercedes.avif'],

        ['Classement' => '5', 'Points' => '94', 'Equipe' => 'Aston Martin', 'img_equipe' => '../images/aston-martin-logo.avif', 
        'Prenom_1' => 'FERNANDO', 'Nom_1' => '  ALONSO',  'img_portrait_1' => '../images/FERNANDO.avif',
        'Prenom_2' => 'LANCE', 'Nom_2' => '  STROLL',  'img_portrait_2' => '../images/LANCE.avif',
        'img_car' => '../images/aston-martin.avif'],

        ['Classement' => '6', 'Points' => '65', 'Equipe' => 'Alpine', 'img_equipe' => '../images/alpine-logo.avif', 
        'Prenom_1' => 'PIERRE', 'Nom_1' => '  GASLY',  'img_portrait_1' => '../images/PIERRE.avif',
        'Prenom_2' => 'ESTEBAN', 'Nom_2' => '  OCON',  'img_portrait_2' => '../images/ESTEBAN.avif',
        'img_car' => '../images/alpine.avif'],

        ['Classement' => '7', 'Points' => '58', 'Equipe' => 'Haas', 'img_equipe' => '../images/haas-logo.avif', 
        'Prenom_1' => 'NICO', 'Nom_1' => '  HULKENBERG',  'img_portrait_1' => '../images/NICO.avif',
        'Prenom_2' => 'KEVIN', 'Nom_2' => '  MAGNUSSEN',  'img_portrait_2' => '../images/KEVIN.avif',
        'img_car' => '../images/haas.avif'],

        ['Classement' => '8', 'Points' => '46', 'Equipe' => 'RB', 'img_equipe' => '../images/rb-logo.avif', 
        'Prenom_1' => 'YUKI', 'Nom_1' => '  TSUNODA',  'img_portrait_1' => '../images/YUKI.avif',
        'Prenom_2' => 'LIAM', 'Nom_2' => '  LAWSON',  'img_portrait_2' => '../images/LIAM.avif',
        'img_car' => '../images/rb.avif'],

        ['Classement' => '9', 'Points' => '17', 'Equipe' => 'Williams', 'img_equipe' => '../images/williams-logo.avif', 
        'Prenom_1' => 'ALEXANDER', 'Nom_1' => '  ALBON',  'img_portrait_1' => '../images/ALEX.avif',
        'Prenom_2' => 'FRANCO', 'Nom_2' => '  COLAPINTO',  'img_portrait_2' => '../images/FRANCO.avif',
        'img_car' => '../images/williams.avif'],

        ['Classement' => '10', 'Points' => '4', 'Equipe' => 'Kick Sauber', 'img_equipe' => '../images/kick-sauber-logo.avif', 
        'Prenom_1' => 'VALTTERI', 'Nom_1' => '  BOTTAS',  'img_portrait_1' => '../images/VALTTERI.avif',
        'Prenom_2' => 'GUANYU', 'Nom_2' => '  ZHOU',  'img_portrait_2' => '../images/ZHOU.avif',
        'img_car' => '../images/kick-sauber.avif']

    ];
    ?>
    <div id="group">

        <?php foreach ($equipes as $equipe):
        ?>
            <div>
                <table class="equipe">
                    <tr>
                        <th class="pilote"><?= $equipe['Classement']; ?></th>
                        <th class="pilote"><?= $equipe['Points']; ?> points</th>
                    </tr>
                    <tr>
                        <td class="equipe" colspan="2"><?= $equipe['Equipe']; ?><img class="pays" src=<?= $equipe['img_equipe']; ?> alt=""></td>
                    </tr>
                    <tr>
                        <td class="equipe_pilote" ><?= $equipe['Prenom_1']; ?><b><?= $equipe['Nom_1']; ?></b><img class="equipe_portrait" src=<?= $equipe['img_portrait_1']; ?> alt=""></td>
                        <td class="equipe_pilote" ><?= $equipe['Prenom_2']; ?><b><?= $equipe['Nom_2']; ?></b><img class="equipe_portrait" src=<?= $equipe['img_portrait_2']; ?> alt=""></td>
                    </tr>
                    <tr>
                        <td colspan="2" ><img src=<?= $equipe['img_car']; ?> alt=""></td>
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