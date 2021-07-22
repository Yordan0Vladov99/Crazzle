-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: crazzle
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `album_title` varchar(45) NOT NULL,
  `album_artist` varchar(45) NOT NULL,
  `album_length` int NOT NULL,
  `album_release_year` int NOT NULL,
  `album_genre` varchar(50) NOT NULL,
  `album_tracklist` varchar(1000) NOT NULL,
  `album_rating_sum` int DEFAULT '0',
  `album_rating_votes` int DEFAULT '0',
  `album_cover` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'January Flower','Mat Kearney',42,2021,'Pop/Rock','[\"Powerless,3:27\", \"Can\'t Look Back,3:57\", \"Grand Canyon,2:55\", \"Pontiac,3:06\", \"They Don\'t Know,2:59\", \"Anywhere With You,3:22\", \"Say It Now,3:22\", \"Stuck In The Moment,3:19\", \"I Don\'t Really Care,2:58\", \"Running In Circles,3:37\", \"Boulder,2:55\", \"Blame,3:17\", \"Something Beautiful,3:04\"]',162,18,'january_flower.jpg'),(2,'Scaled and Icy','Twenty One Pilots',37,2021,'Pop/Rock','[\"Good Day,3:24\", \"Choker,3:43\", \"Shy Away,2:55\", \"The Outside,3:36\", \"Saturday,2:52\", \"Never Take It,3:32\", \"Mulberry Street,3:44\", \"Formidable,2:56\", \"Bounce Man,3:05\", \"No Chances,3:46\", \"Redecorate,4:05\"]',85,10,'Scaled_and_Icy.png'),(3,'Copycat Killer','Phoebe Bridgers',13,2021,'Pop/Rock','[\"Kyoto,3:01\", \"Savior Complex,3:24\", \"Chinese Satellite,3:30\", \"Punisher,2:56\"]',402,56,'copycat_killer.jpg'),(4,'Power Up','AC/DC',41,2020,'Pop/Rock','[\"Realize,3:37\", \"Rejection,4:06\", \"Shot in the Dark,3:06\", \"Through the Mists of Time,3:32\", \"Kick You When You\'re Down,3:10\", \"Witch\'s Spell,3:42\", \"Demon Fire,3:30\", \"Wild Reputation,2:54\", \"No Man\'s Land,3:39\", \"Systems Down,3:12\", \"Money Shot,3:05\", \"Code Red,3:31\"]',5338,628,'power_up.jpg'),(5,'Second Line','Dawn Richard',53,2021,'R&B','[\"King Creole (Intro),1:20\", \"Nostalgia,3:00\", \"Boomerang,3:04\", \"Bussifame,4:33\", \"Pressure,4:09\", \"Pilot (a lude),0:58\", \"Jacuzzi,3:20\", \"FiveOhFour (a lude),1:14)\", \"Voodoo (Intermission),1:37\", \"Mornin | Streetlights,6:46\", \"Le Petit Morte (a lude),1:30\", \"Radio Free,2:01\", \"The Potter,2:53\", \"Perfect Storm,5:37\", \"Voodoo (Outermission),2:12\", \"SELFish (Outro),6:59\"]',425,50,'second_line.jpg'),(6,'Future Nostalgia','Dua Lipa',37,2020,'Pop/Rock','[\"Future Nostalgia,3:04\", \"Don\'t Start Now,3:03\", \"Cool,3:29\", \"Physical,3:13\", \"Levitating,3:23\", \"Pretty Please,3:14\", \"Hallucinate,3:28\", \"Love Again,4:18\", \"Break My Heart,3:41\", \"Good in Bed,3:38\", \"Boys Will Be Boys,2:46\"]',6751,736,'future_nostalgia.png'),(7,'Positions','Ariana Grande',41,2020,'Pop/Rock','[\"Shut Up,2:37\", \"34+35,2:53\", \"Motive,2:47\", \"Just Like Magic,2:29\", \"Off the Table,3:59\", \"Six Thirty,3:04\", \"Safety Net,3:28\", \"My Hair,2:38\", \"Nasty,3:20\", \"West Side,2:12\", \"Love Language,2:59\", \"Positions,2:52\", \"Obvious,2:28\", \"POV,3:21\"]',1660,260,'positions.png'),(8,'Plastic Hearts','Miley Cyrus',38,2020,'Pop/Rock','[\"Wtf Do I Know,2:51\", \"Plastic Hearts,3:25\", \"Angels Like You,3:16\", \"Prisoner,2:49\", \"Gimme What I Want,2:31\", \"Night Crawling,3:09\", \"Midnight Sky,3:43\", \"High,3:16\", \"Hate Me,2:37\", \"Bad Karma,3:08\", \"Never Be Me,3:35\", \"Golden G String,3:55\"]',2570,270,'plastic_hearts.png'),(9,'Manic','Halsey',47,2020,'Pop/Rock','[\"Ashley,3:06\", \"Clementine,3:54\", \"Graveyard,3:01\", \"You Should Be Sad,3:25\", \"Forever… (Is A Long Time),2:47\", \"Dominic’s Interlude,1:16\", \"I Hate Everybody,2:51\", \"3 AM,3:54\", \"Without Me,3:21\", \"Finally // Beautiful Stranger,3:41\", \"Alanis’ Interlude,2:41\", \"Killing Boys,2:23\", \"Suga’s Interlude,2:18\", \"More,2:33\", \"Still Learning,3:31\", \"929,2:55\"]',2598,300,'manic.png'),(10,'Good News','Megan Thee Stallion',49,2020,'Rap','[\"Shots Fired,2:50\", \"Circles,2:50\", \"Cry Baby,2:17\", \"Do It On The Tip,2:47\", \"Sugar Baby,2:26\", \"Movie,3:47\", \"Freaky Girls,2:46\", \"Body,2:51\", \"What’s New,2:35\", \"Work That,2:14\", \"Intercourse,3:17\", \"Go Crazy,3:45\", \"Don’t Rock Me To Sleep,3:03\", \"Outside,2:31\", \"Savage Remix,4:02\", \"Girls in the Hood,2:34\", \"Don’t Stop,3:07\"]',630,90,'good_news.png'),(11,'After Hours','The Weekend',56,2020,'R&B','[\"Alone Again,4:10\", \"Too Late,3:59\", \"Hardest To Love,3:31\", \"Scared To Live,3:11\", \"Snowchild,4:07\", \"Escape From L.A.,5:55\", \"Heartless,3:21\", \"Faith,4:43\", \"Blinding Lights,3:21\", \"In Your Eyes,3:57\", \"Save Your Tears,3:35\", \"Repeat After Me (Interlude),3:15\", \"After Hours,6:01\", \"Until I Bleed Out,3:12\"]',5780,620,'after_hours.png'),(12,'McCartney III','Paul McCartney',44,2020,'Pop/Rock','[\"Long Tailed Winter Bird,5:16\", \"Find My Way,3:54\", \"Pretty Boys,3:00\", \"Women and Wives,2:52\", \"Lavatory Lil,2:22\", \"Deep Deep Feeling,8:25\", \"Slidin,3:23\", \"The Kiss of Venus,3:06\", \"Seize the Day,3:20\", \"Deep Down,5:52\", \"Winter Bird / When Winter Comes,3:12\"]',8024,886,'McCartney_III.jpg');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `ann_id` int NOT NULL AUTO_INCREMENT,
  `ann_author` varchar(45) NOT NULL,
  `ann_description` varchar(10000) NOT NULL,
  `ann_publication_date` date NOT NULL,
  PRIMARY KEY (`ann_id`),
  UNIQUE KEY `ann_id_UNIQUE` (`ann_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (1,'1','Don\'t forget to check out my new film \'Don\'t Look Up\', coming later this year on Netflix.','2020-01-01'),(2,'2','So happy to win the Grammy for Best Record. This one is for all my fans :X.','2020-01-26');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `author` varchar(45) NOT NULL,
  `title_pic` varchar(100) NOT NULL,
  `description` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idarticles_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Tenet coming to HBO Max','Emmet Bloom','tenet_poster.0.jpg','Tenet was decided to be premiered previous July in theatres. However, its releasing date got delayed many a time because of the coronavirus pandemic. ‘Christopher Nolan’ wishes for the idea of watching movies on the big screen. Therefore, he is bluntly critical of Warner Bros’ step to premiere its 2021 films in theatres and on HBO Max. Also, he mentions in a statement saying that movie makers like him dream about getting their films released on the big screens and platforms. But at last, they end up streaming on ordinary platforms.'),(2,'Whole Lotta Red released','Madisson Lee','Playboi_Carti_-_Whole_Lotta_Red.png','It\'s a Christmas miracle long in the making — Playboi Carti released his oft-delayed second studio album, Whole Lotta Red, in the early hours of Friday.\nAfter dropping \"@MEH\" and an accompanying music video in April, his first solo work in two years, Carti teased fans with the album by tweeting, \"i hAv3 a gift 4 u :0\" on Dec. 2. He officially announced Whole Lotta Red\'s release date with an album cover and preorder link via Twitter and Instagram on Dec. 22.\nOn the new 24-track album, Carti continues with his signature unearthly sound. He opts out of being a traditional lyricist and instead acts a conductor of fun. His bars bounce among synthy, fractured beats from various producers like Pi\'erre Bourne, Art Dealer, F1lthy, the end result showcasing how comfortable he is toeing the line between riveting and repetitive. Carti takes on an aggressive edge as he turns away from his usual baby-like cadence on tracks like \"M3tamorphosis\" featuring Kid Cudi.'),(3,'Cyberpunk 2077 1.2 released','John Watson','cyberpunk.jpeg','\nPatch 1.2 for Cyberpunk 2077 is coming to PC, consoles, and Stadia soon! Here’s a list of the most notable changes coming in this update:\n\nPlease note that the issues listed below did not affect all players.\n\nGameplay\n\nThe NCPD spawn radius for when the player commits a crime has been increased.\nNew Steering Sensitivity slider added to Controls settings. Allows reducing steering speed for all vehicles, on all input devices. Particularly useful for keyboard users.\nAdjusted the vehicle steering code to work better in low and extreme high frame rate situations to produce more consistent results. Improves steering on base consoles noticeably.\nUnstuck Rocking/Rotating feature added to all vehicles. Use Left Stick or A/D W/S or LShift/LCtrl to engage rocking and rotating to stuck/beached vehicles to try and free them.');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_link_people`
--

DROP TABLE IF EXISTS `articles_link_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles_link_people` (
  `link_id` int NOT NULL AUTO_INCREMENT,
  `link_article` int NOT NULL,
  `link_person` int NOT NULL,
  PRIMARY KEY (`link_id`),
  UNIQUE KEY `link_id_UNIQUE` (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_link_people`
--

LOCK TABLES `articles_link_people` WRITE;
/*!40000 ALTER TABLE `articles_link_people` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_link_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_link_products`
--

DROP TABLE IF EXISTS `articles_link_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles_link_products` (
  `link_id` int NOT NULL AUTO_INCREMENT,
  `link_article` int NOT NULL,
  `link_product` int NOT NULL,
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_link_products`
--

LOCK TABLES `articles_link_products` WRITE;
/*!40000 ALTER TABLE `articles_link_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_link_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `book_id` int unsigned NOT NULL AUTO_INCREMENT,
  `book_title` varchar(45) NOT NULL,
  `book_author` varchar(45) NOT NULL,
  `book_release_year` int NOT NULL,
  `book_page_count` int NOT NULL,
  `book_genre` varchar(50) NOT NULL,
  `book_description` varchar(1000) NOT NULL,
  `book_cover` varchar(100) DEFAULT NULL,
  `book_ratings_sum` int NOT NULL,
  `book_ratings_votes` int NOT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Project Hail Mary','Andy Weir',2021,476,'Science Fiction','Ryland Grace is the sole survivor on a desperate, last-chance mission--and if he fails, humanity and the earth itself will perish.\n\nExcept that right now, he doesn\'t know that. He can\'t even remember his own name, let alone the nature of his assignment or how to complete it.\n\nAll he knows is that he\'s been asleep for a very, very long time. And he\'s just been awakened to find himself millions of miles from home, with nothing but two corpses for company.\n\nHis crewmates dead, his memories fuzzily returning, he realizes that an impossible task now confronts him. Alone on this tiny ship that\'s been cobbled together by every government and space agency on the planet and hurled into the depths of space, it\'s up to him to conquer an extinction-level threat to our species.\n\nAnd thanks to an unexpected ally, he just might have a chance.','project_hail_mary.jpg',850,100),(2,'To Kill a Mockingbird','Harper Lee',1960,324,'Classics','The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.\nCompassionate, dramatic, and deeply moving, this book takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.','to_kill_a_mockingbird.jpg',700,80),(3,'Harry Potter and the Sorcerer\'s','J.K. Rowling',2003,309,'Fantasy','Harry Potter\'s life is miserable. His parents are dead and he\'s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he\'s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.\n\nAfter a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.\n\nThough Harry\'s first year at Hogwarts is the best of his life, not everything is perfect.','harry_potter_and_the_sorcerers_stone.jpg',500,65),(4,'Pride and Prejudice',' Jane Austen',1813,279,'Classics','Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\" The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.','pride_and_prejudice.jpg',1225,155),(5,'The Diary of a Young Girl','Anne Frank',1947,283,'Nonfiction','Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.\n\nIn 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding.','the_diary_of_a_young_girl.jpg',1005,120),(6,'Animal Farm','George Orwell',1945,141,'Classics','A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.\nWhen Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.','animal_farm.jpg',1649,200),(7,'The Little Prince','Antoine de Saint-Exupéry',1943,93,'Classics','Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince. Richard Howard\'s translation of the beloved classic beautifully reflects Saint-Exupéry\'s unique and gifted style. Howard, an acclaimed poet and one of the preeminent translators of our time, has excelled in bringing the English text as close as possible to the French, in language, style, and most important, spirit. The artwork in this edition has been restored to match in detail and in color Saint-Exupéry\'s original artwork. Combining Richard Howard\'s translation with restored original art, this definitive English-language edition of The Little Prince will capture the hearts of readers of all ages.','the_little_prince.jpg',420,53),(8,'1984','George Orwell',1949,328,'Classics','The year 1984 has come and gone, but George Orwell\'s prophetic, nightmarish vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic of \"negative utopia\"—a startlingly original and haunting novel that creates an imaginary world that is completely convincing, from the first sentence to the last four words. No one can deny the novel\'s hold on the imaginations of whole generations, or the power of its admonitions—a power that seems to grow, not lessen, with the passage of time.','1984.jpg',523,71),(9,'The Great Gatsby','F. Scott Fitzgerald',1925,200,'Classics','The Great Gatsby, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.\n\nThe Great Gatsby is one of the great classics of twentieth-century literature.','the_great_gatsby.jpg',1695,190),(10,'The Catcher in the Rye','J.D. Salinger',1951,277,'Classics','The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it. There are many voices in this novel: children\'s voices, adult voices, underground voices-but Holden\'s voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself.','the_catcher_in_the_rye.jpg',1102,129),(11,'The Lord of the Rings','J.R.R. Tolkien',1955,1216,'Fantasy','In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.\n\nFrom Sauron\'s fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.\n\nWhen Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.','the_lord_of_the_rings.jpg',882,98);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment_author` int NOT NULL,
  `comment_description` varchar(1000) NOT NULL,
  `comment_upvotes` int NOT NULL DEFAULT '0',
  `comment_downvotes` int NOT NULL DEFAULT '0',
  `comment_discussion` int NOT NULL,
  PRIMARY KEY (`comment_id`),
  UNIQUE KEY `comment_id_UNIQUE` (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,7,'First.',0,0,5),(2,7,'Second.',0,0,5),(3,7,'Hello world!',0,0,5),(4,7,'Hello, there.',0,0,16),(5,7,'hi',0,0,16),(6,7,'hi',0,0,16),(7,7,'No',0,0,20),(8,43,'Nobody knows who Heisenberg is.',0,0,27),(9,43,'Three.',0,0,5),(10,43,'Nobody knows.',0,0,5);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contracts`
--

DROP TABLE IF EXISTS `contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contracts` (
  `contract_id` int NOT NULL AUTO_INCREMENT,
  `contract_length` varchar(45) NOT NULL,
  `contract_role` varchar(45) NOT NULL,
  PRIMARY KEY (`contract_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contracts`
--

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;
INSERT INTO `contracts` VALUES (1,'62','1'),(2,'62','2'),(3,'62','3');
/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discussions`
--

DROP TABLE IF EXISTS `discussions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discussions` (
  `dis_id` int NOT NULL AUTO_INCREMENT,
  `dis_author` varchar(100) NOT NULL,
  `dis_related_product` int DEFAULT NULL,
  `dis_description` varchar(10000) DEFAULT NULL,
  `dis_upvotes` int NOT NULL DEFAULT '0',
  `dis_downvotes` int NOT NULL DEFAULT '0',
  `dis_comments` int DEFAULT '0',
  `dis_publication_date` date NOT NULL,
  `dis_img` varchar(100) DEFAULT NULL,
  `dis_related_person` int DEFAULT NULL,
  `dis_related_product_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`dis_id`,`dis_author`),
  UNIQUE KEY `dis_id_UNIQUE` (`dis_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discussions`
--

LOCK TABLES `discussions` WRITE;
/*!40000 ALTER TABLE `discussions` DISABLE KEYS */;
INSERT INTO `discussions` VALUES (1,'user123',1,'What was your favoutite Easter egg?',150,0,63,'2020-09-05',NULL,NULL,'film'),(2,'JBfan23',2,'Favourite song on Justice?',120,0,30,'2021-03-19',NULL,NULL,'album'),(3,'hLect679',NULL,'Fav Anthony Hopkins role? Mine was Hannibal Lecter in Silence of the Lambs.',30,0,13,'2021-02-15',NULL,6,NULL),(4,'SorenSik',3,'So I put Heracles into the game',50,0,5,'2021-02-15','heracles.jpg',NULL,'video_game'),(5,'_omin0us',2,'In s01e07/s02e01 Jesse wears a top that has a Bulgarian flag on it. Later in s02e01, while talking about ricin, Walter mentions that it was used to kill a Bulgarian journalist',80,10,18,'2021-05-15','jasqy3nq0a271.jpg',NULL,'tv_shows'),(6,'user123',4,'What was your favoutite Easter egg?',150,0,63,'2020-09-05',NULL,NULL,'films'),(7,'user123',1,'Just watched the Snyder Cut and I\'m really confused about something\nSo five thousand years ago, Darkseid attacks Earth and finds the Anti-Life Equation there, but he\'s defeated and the mother boxes are left behind in the retreat.\n\nFast forward five thousand years. Apparently nobody bothered to write down which planet the Anti-Life Equation was on, so Darkseid doesn\'t know that Earth has it. But surely he knows that the Anti-Life Equation is on the same planet as the lost motherboxes, the site of his greatest defeat? Why doesn\'t Darkseid immediately realize that the ALE is on Earth when Steppenwolf calls and tells him that he found the motherboxes on Earth?\n\nHas Darkseid been just losing motherboxes left and right on tons of planets? does everyone on Apokolips have serious amnesia? am I missing something? I\'m so confused.\n\n?',10,0,0,'2021-05-20',NULL,NULL,'films'),(8,'user234',2,'Tenet is confusing\nTenet is either a really thorough developed mindfuck of a story or it is a poorly written mindfuck of a story I am not knowledgeable enough to know which it is',15,0,0,'2021-05-25',NULL,NULL,'films'),(9,'user234',10,'Anyone here who think everything about Inception makes sense and can defend it?',8,0,0,'2021-05-19',NULL,NULL,'films'),(10,'user234',3,'Harry Potter and the Skin Tone Debate. Ahh yes. You clicked on this post and went: \"Here we go again. Some random stranger on the internet arguing what skin tone a character is, and why everyone else is wrong.\" No. That\'s not why I\'m here. Bring on the backlash. Let\'s begin.\n\nIt is not clearly stated in the books what some character\'s skin tones are. Take Hermione Granger. One post showing fan art of Hermione Granger made by the talented u/ofcabbagesandkings14 had it[\'s comments locked due to... well, you can see for yourself cough sort by controversial cough cough. In the books, Hermione is described as a girl with bushy brown hair and overlarge front teeth (that yes, does get fixed when she turned15). She does not have her skin colour described. You might argue that at the start of PoA she is described as brown. But describing someone as brown in the context she was put in (Hermione had come back from a holiday) it would mean a tan. You may argue that at the end of PoA she was described as \"Hermione\'s white face\". In this context, it would mean, drained of colour, scared, drained of blood because she is anxious or worried. It does not mean she is white, or the former she is black. On the front cover of the books, official art approved by JKR show she is white. But that means nothing if you, the reader, don\'t imagine her that way. Everyone imagines characters in different ways - you cannot control how everyone else imagines them. Take Harry Potter himself. In the books he is described with messy, jet black hair, green eyes and round glasses. In the first book and all of the cover art, he is pale. Now you may take that as his skin tone, or just him being malnourished.\n\nUnnecessarily gatekeeping character descriptions to the extra mile isn\'t a great thing to do, so TL;DR, imagine characters how you want to imagine them, and don\'t tell anyone else that they can\'t imagine it differently, after all, Harry Potter is everyone\'s\' world and we should all be able to enjoy it.',9,0,0,'2021-05-23',NULL,NULL,'books'),(11,'user234',8,'Speculations in julia\'s room 101\nAfter entering room 101, we learn that in it they use something unbearable and distressing for each individual. In Winston\'s case, they use rats against him, but the book, doesn\'t mention anything about julia\'s experience inside the room. What would they have showed her?',9,0,0,'2021-05-23',NULL,NULL,'books'),(12,'jsvladov',2,'Who is your favorite character? Mine is Walter.',0,0,0,'2021-07-01',NULL,NULL,'tv_shows'),(26,'jsvladov',1,'Hello.',0,0,0,'2021-07-01',NULL,NULL,'films'),(27,'trayan_iliev',2,'Who is Heisenberg irl?',0,0,1,'2021-07-01',NULL,NULL,'tv_shows');
/*!40000 ALTER TABLE `discussions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `film_id` int NOT NULL AUTO_INCREMENT,
  `film_title` varchar(100) NOT NULL,
  `film_description` varchar(500) NOT NULL,
  `film_release_year` int NOT NULL,
  `film_length` int NOT NULL,
  `film_rating_sum` int NOT NULL DEFAULT '0',
  `film_rating_votes` int NOT NULL DEFAULT '0',
  `film_poster` varchar(45) NOT NULL,
  PRIMARY KEY (`film_id`),
  UNIQUE KEY `film_id_UNIQUE` (`film_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES (1,'Zack Snyder\'s Justice League','Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',2021,242,13500,1654,'Zack_Snyders_Justice_League.png'),(2,'Tenet','Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',2020,150,2647,357,'Tenet.jpg'),(3,'The Shawshank Redemption','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',1994,142,22450,2350,'Shawshank_Redemption.jpg'),(4,'Avengers: Endgame','After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',2018,181,14856,1712,'Avengers_Endgame.jpg'),(5,'Joker','In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',2019,122,10059,1249,'Joker.jpg'),(6,'The Dark Knight','When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',2008,152,22591,2357,'Dark_Knight.jpg'),(7,'The Father','A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',2020,157,5026,608,'The_Father.jpg'),(8,'Parasite','Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',2019,132,5680,610,'Parasite.png'),(9,'Interstellar','A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',2014,169,14250,1560,'Interstellar.jpg'),(10,'Inception','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',2010,148,20035,2115,'Inception.jpg'),(11,'Soul','After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',2020,160,2033,243,'Soul.jpeg');
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_description` varchar(100) NOT NULL,
  `project_person` int NOT NULL,
  `project_product` int NOT NULL,
  `project_type` varchar(20) NOT NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE KEY `role_id_UNIQUE` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'creator',3,2,'tv_show'),(2,'actor',4,2,'tv_show'),(3,'actor',5,2,'tv_show'),(4,'actor',6,2,'tv_show');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `rating_id` int unsigned NOT NULL AUTO_INCREMENT,
  `rating_user` int NOT NULL,
  `rating_product` int NOT NULL,
  `product_type` varchar(50) NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`rating_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,7,2,'tv_shows',9),(2,7,2,'tv_shows',9),(3,7,2,'tv_shows',4),(4,7,5,'films',4),(5,7,5,'films',4);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replies` (
  `reply_id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int NOT NULL DEFAULT '0',
  `reply_description` varchar(1000) DEFAULT NULL,
  `reply_author` int NOT NULL,
  `reply_upvotes` int NOT NULL DEFAULT '0',
  `reply_downvoets` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`reply_id`),
  UNIQUE KEY `reply_id_UNIQUE` (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `review_title` varchar(100) NOT NULL,
  `review_author` varchar(100) NOT NULL,
  `review_description` varchar(10000) NOT NULL,
  `review_rating` int NOT NULL,
  `review_related_product` int NOT NULL,
  `review_media` varchar(50) NOT NULL,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'The 10/10 show','d_sa','If there is any show deserves a 10/10, it\'s Breaking Bad, Simply the greatest.',10,2,'tv_shows'),(2,'Decent','jsvladov','This show is okay.',5,2,'tv_shows'),(3,'jgfjf','jsvladov','fjhgf',4,5,'books'),(4,'Very nice','jsvladov','ljhklh',9,6,'tv_shows'),(5,'cnvc','jsvladov','cnvc',4,5,'films'),(6,'Great Show!','trayan_iliev','This show is great, but too long.',8,2,'tv_shows');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_project` int NOT NULL,
  `role_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,2,'Walter White'),(2,3,'Jesse Pinkman'),(3,4,'Skylar White');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tv_shows`
--

DROP TABLE IF EXISTS `tv_shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tv_shows` (
  `tv_id` int NOT NULL AUTO_INCREMENT,
  `tv_title` varchar(45) DEFAULT NULL,
  `tv_description` varchar(1000) NOT NULL,
  `tv_episode_length` int NOT NULL,
  `tv_release_year` int NOT NULL,
  `tv_ending_year` int DEFAULT NULL,
  `tv_ratings_sum` int DEFAULT '0',
  `tv_ratings_votes` int DEFAULT NULL,
  `tv_poster` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tv_shows`
--

LOCK TABLES `tv_shows` WRITE;
/*!40000 ALTER TABLE `tv_shows` DISABLE KEYS */;
INSERT INTO `tv_shows` VALUES (1,'Silicon Valley','In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge\'s own experiences as a Silicon Valley engineer in the late 1980s.',30,2014,2019,10433,1257,'silicon-valley.jpg'),(2,'Breaking Bad','A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',49,2008,2013,13696,1457,'breaking_bad_poster.jpg'),(3,'To the Lake','A terrible plague strikes and a group decides to risk their lives. Humanity struggles to survive as they face the end of their civilization.',50,2020,NULL,3268,451,'To_the_Lake.jpg'),(4,'Luchshe, chem lyudi','A family on the brink of splitting up become the owners of a cutting-edge robot being sought by a corporation, homicide investigators and terrorists.',52,2018,2019,2599,359,'better_than_us.jpg'),(5,'La Révolution','In a reimagined history of the French Revolution, the guillotine\'s future inventor uncovers a disease that drives the aristocracy to murder commoners.',48,2020,2020,1486,233,'La_Révolution.jpg'),(6,'The Haunting of Bly Manor ','After an au pair’s tragic death, Henry hires a young American nanny to care for his orphaned niece and nephew who reside at Bly Manor with the chef Owen, groundskeeper Jamie and housekeeper, Mrs. Grose.',55,2020,2020,1848,748,'The_Haunting_Of_Bly_Manor.jpg'),(7,'Barbarians','The famous battle of the Teutoburg Forest, in which Germanic warriors united by a strong woman, halted the northward advance of the Roman Empire in AD 9.',45,2020,NULL,2895,385,'Barbarians.jpg'),(8,'Lupin','Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.',47,2021,NULL,5206,635,'Lupin.png'),(9,'Equinox','Astrid was traumatized by the mysterious disappearance of a school class in 1999. Twenty years later, when she finds out that the only survivor from 1999 mysteriously died, Astrid sets off to discover what really happened.',45,2020,NULL,1525,250,'Equinox.jpg'),(10,'Pereval Dyatlova ','January 1959, Soviet Union. In the icy Ural Mountains, a group of nine students sets out on a ski trek. Even though they all are well-experienced hikers, they never reach their destination. As their bodies turn up a month later, it leaves local investigators puzzled.',50,2020,NULL,1040,140,'Pereval_Dyatlova.jpg'),(11,'Invincible','An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet.',45,2021,NULL,9250,1014,'Invincible.jpg'),(12,'Biohackers','A fast-paced thriller following medical student Mia Akerlund who discovers the use of highly advanced biohacking technology in her university town.',44,2020,NULL,2265,306,'Biohackers.jpg');
/*!40000 ALTER TABLE `tv_shows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_description` varchar(140) DEFAULT NULL,
  `user_birthdate` date DEFAULT NULL,
  `user_profile_pic` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'jsvladov','Crazzle1234','Creator of Crazzle','1999-08-09','1622806416204.jpeg'),(42,'gjhgjh','jhgjhg','ghjg','2021-07-07','placeholder.png'),(43,'trayan_iliev','1234567','','2021-06-17','placeholder.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_games`
--

DROP TABLE IF EXISTS `video_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_games` (
  `vg_id` int NOT NULL AUTO_INCREMENT,
  `vg_release_year` int NOT NULL,
  `vg_image` varchar(100) NOT NULL,
  `vg_ratings_sum` int NOT NULL DEFAULT '0',
  `vg_votes` int NOT NULL DEFAULT '0',
  `vg_description` varchar(1000) NOT NULL,
  `vg_studio` varchar(50) NOT NULL,
  PRIMARY KEY (`vg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_games`
--

LOCK TABLES `video_games` WRITE;
/*!40000 ALTER TABLE `video_games` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votes` (
  `vote_id` int unsigned NOT NULL AUTO_INCREMENT,
  `vote_author` int NOT NULL,
  `vote_type` varchar(45) NOT NULL,
  `vote_place` varchar(45) NOT NULL,
  PRIMARY KEY (`vote_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `working_persons`
--

DROP TABLE IF EXISTS `working_persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `working_persons` (
  `wp_id` int NOT NULL AUTO_INCREMENT,
  `wp_name` varchar(45) NOT NULL,
  `wp_birthdate` datetime NOT NULL,
  `wp_description` varchar(1000) NOT NULL,
  `wp_profile_pic` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`wp_id`),
  UNIQUE KEY `idworking_persons_UNIQUE` (`wp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `working_persons`
--

LOCK TABLES `working_persons` WRITE;
/*!40000 ALTER TABLE `working_persons` DISABLE KEYS */;
INSERT INTO `working_persons` VALUES (1,'Leonardo DiCaprio','1974-11-11 00:00:00','Few actors in the world have had a career quite as diverse as Leonardo DiCaprio\'s. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as Критърси 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Ромео и Жулиета (1996) and Титаник (1997), to then become a leading man in Hollywood blockbusters, made by internationally renowned directors such as Martin Scorsese and Christopher Nolan.','leo.jpg'),(2,'Billie Eilish','2001-12-18 00:00:00','Billie Eilish Pirate Baird O\'Connell  is an American singer and songwriter. She first gained attention in 2015 when she uploaded the song \"Ocean Eyes\" to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom. The song was written and produced by her brother Finneas O\'Connell, with whom she collaborates on music and live shows. Her debut EP, Don\'t Smile at Me (2017), became a sleeper hit, reaching the top 15 in the US, UK, Canada, and Australia.','Billie_Eilish.jpg'),(3,'Vince Gilligan','1970-01-01 00:00:00','Creator of Breaking Bad','placeholder.png'),(4,'Bryan Cranston','1970-01-01 00:00:00','Actor in Breaking Bad','placeholder.png'),(5,'Aaron Paul','1970-01-01 00:00:00','Actor in Breaking Bad','placeholder.png'),(6,'Anna Gunn','1970-01-01 00:00:00','Actor in Breaking Bad','placeholder.png');
/*!40000 ALTER TABLE `working_persons` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-22 23:49:52
