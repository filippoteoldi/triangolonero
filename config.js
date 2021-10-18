var config = {
    style: 'mapbox://styles/fteoldi/ckuwoevbv2jqq17p5ydd0w5hn',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoiZnRlb2xkaSIsImEiOiJja2p5ZWUzd2wxMWY1MnBsY2x0cWk2YWw4In0.qzvwKE0afRGEZQZFekuqDw',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    alignment: 'left',
    title: 'Affari neri',
    subtitle: '',
    byline: '',
    footer: 'Fonte: ',
    chapters: [
        {
            id: 'slide',
            alignment: 'center',
            hidden: false,
            title: 'Intro',
            image: '',
            location: {
                center: [12.71232, 42.52873],
                zoom: 4.19,
                pitch: 0.00,
                bearing: -1.99
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 1,
                    },  
            ],
            onChapterExit: [
             ], 
        },
        {
            id: 'slide-0',
            alignment: 'left',
            hidden: false,
            title: 'Saint George Educational Trust',
            image: 'nick_griffin.png',
            description: 'Il Saint George Educational Trust è stato fondato nel 1989 dal terrorista italiano Roberto Fiore assieme ai leader dei movimenti neofascisti britannici, animatori della International Third Position, la versione internazionale dell’organizzazione terroristica Terza Posizione. Il nome richiama il partito neofascista britannico <a href="http://www.leaguestgeorge.org/">League of Saint George</a>.<br><br>Oggi l’organizzazione ha sede a Andover, una cittadina di 60mila abitanti, a un’ora di treno da Londra. Il trust ha un <a href="https://sget.info/">portale dedicato</a> alla propaganda cristiano-fascista che rimanda alla libreria cattolica tradizionale Carmel Brooks, domiciliata allo stesso indirizzo, per raccogliere fondi per gli arrestati nelle manifestazioni di Roma del 9 ottobre.',
            location: {
                center: [-1.47711, 51.21206],
                zoom: 10.78,
                pitch: 1.00,
                bearing: -0.13
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                layer: '',
                opacity: 0,
                }, 
]
        },
        {
            id: 'slide-2',
            alignment: 'left',
            title: 'The Trust of Saint Michael The Archangel',
            image: '',
            hidden: false,
            description: 'Nel 1995 viene fondato a Londra il trust di St Michael The Archangel teoricamente per “promuovere la religione cattolica romana e specialmente l’insegnamento sociale tradizionale della religione Cattolica Romana”. Tra i suoi amministratori troviamo <b>Beniamino Iannace</b>, socio del leader di Forza Nuova, e <b>Roberto Fiore</b>. <br><br>Dal trust partono bonifici verso l’associazione missionaria Opera di San Michele Arcangelo, in realtà amministrata da un altro socio di Fiore, Mario Zurlo, verso la Da.Do. Srl una società di ristorazione romana e verso la Super Mario Gestioni Srl, altra società di Zurlo.',
            location: {
                center: [-0.08546, 51.57438],
                zoom: 8.88,
                pitch: 0.00,
                bearing: 7.87                
            },  
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
             ],
        },
        {
            id: 'slide-tris',
            title: '',
            image: 'stmarkus.png',
            alignment: 'left',
            title: 'Trust Saint Mark the Evangelist',
            description: 'Il trust di <a href="https://stmarkevangelist.wordpress.com/">San Marco l’Evangelista </a>, che si celebra il 25 aprile come la liberazione dal nazifascismo, è il più misterioso dei trust legati alla rete neofascista. Primo: fondato nel 2015, non ha mai destato attenzioni. Secondo: al contrario degli altri, il trust Saint Mark dichiara di operare “in Italia attraverso Londra”. Terzo: dopo aver finanziato per centinaia di migliaia di euro società italiane riferibili a Zurlo è stato chiuso a giugno 2020. Ha come amministratore Christian Albert Lindgreen, socio di Zurlo,<a href="https://www.europarl.europa.eu/contracts-and-grants/files/political-parties-and-foundations/audit-reports-and-donations/foundations/etn/etn-report-2017.pdf"> finanziatore della fondazione Europa Terra Nostra</a>, delle estreme destre europee a partire dal partito tedesco Afp.', 
              location: {
                center: [-0.08546, 51.57438],
                zoom: 8.88,
                pitch: 0.00,
                bearing: 7.87                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'giallo-genova',
                    opacity: 0.70,
                    },       
                    {
                        layer: 'rossa-genova',
                        opacity: 0.70,
                        },       
                ],
            onChapterExit: [  
                {
                    layer: 'giallo-genova',
                    opacity: 0,
                    },       
                    {
                        layer: 'rossa-genova',
                        opacity: 0,
                        },            
                ],
        },
        {
            id: 'slide-3bis',
            title: 'Tutte le strade portano a Roma da Zurlo',
            hidden: false,
            image: 'Forz_Nuova_Roma.jpg',
            alignment: 'left',
            description: 'L’ultima volta che gli italiani hanno sentito nominare <b>Mario Zurlo</b> è negli atti dell’inchiesta <b>Mafia Capitale</b>, dove commentava le vicende dell’amico ed ex terrorista nero Luigi Ciavardini. Zurlo è l’uomo a cui arrivano attraverso una ampia rete di società, dall’opera San Michele Arcangelo che gestisce una missione in Brasile a società della ristorazione e immobiliari, quasi due milioni di euro dai tre trust britannici riferibili al leader di Forza Nuova. <img src="Roberto_Fiore.jpg"><br><br>Zurlo abita in via Coletti 39 e lì hanno sede anche molte delle imprese beneficiarie dei fondi a partire dalla Super Mario Gestioni immobiliari, di cui è amministratore e che è controllata da una fantomatica Fondazione San Marco.',
            location: {
                center: [12.56988, 41.87880],
                zoom: 10.37,
                pitch: 60.00,
                bearing: 0.21
            },  
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {
                    layer: 'rossa-estremi',
                    opacity: 1,
                    },       
                ],
            onChapterExit: [ 
                {
                    layer: 'rossa-estremi',
                    opacity: 0,
                    },   
                ],
        }, 
        {
            id: 'slide-3ter',
            title: 'Lions Marketing Ltd ',
            hidden: false,
            alignment: 'left',
            description:' ',
            description: 'Il flusso dei finanziamenti della rete neofascista parte dai trust inglesi  arriva a Roma, ai conti correnti che fanno riferimento a Mario Zurlo e poi torna a Londra, al 485 di Fulham Palace Road, dove aveva sede la società <b>Lions Marketing Ltd</b>. <br><br> </br>Attiva per 4 anni, dal dicembre 2015 al novembre 2019, circa lo stesso periodo di vita del trust of Saint Mark the Evangelist, la Lions Marketing Ltd è la terza punta del triangolo. Gli amministratori erano Zurlo e Stefano Pistilli, socio della famiglia Fiore e fondatore assieme al belga Escada del partito integralista cattolico, anti papa Francesco, “Coalition pour la vie et la famille”.',
            image: '',
            location: {
                center: [-0.21521, 51.47965],
                zoom: 9.04,
                pitch: 0.00, 
                bearing: 7.87
                                },  
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {
                    layer: 'rossa-estremi',
                    opacity: 1,
                    },  
                {
                    layer: 'giallo-estremi',
                    opacity: 1,
                    },       
                ],
                onChapterExit: [ 
                    {
                        layer: 'rossa-estremi',
                        opacity: 0,
                        },   
                        {
                            layer: 'giallo-estremi',
                            opacity: 0,
                            }, 
                    ],
        }, 
        {
            id: 'slide',
            alignment: 'center',
            hidden: false,
            title: 'conclusione',
            image: '',
            location: {
                center: [12.71232, 42.52873],
                zoom: 4.19,
                pitch: 0.00,
                bearing: -1.99
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 1,
                    },  
            ],
            onChapterExit: [
             ], 
        },
    ]
};