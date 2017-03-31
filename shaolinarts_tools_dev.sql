-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 31, 2017 at 09:27 AM
-- Server version: 5.6.21
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shaolinarts_tools_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `meridians`
--

CREATE TABLE IF NOT EXISTS `meridians` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `summary` varchar(512) DEFAULT NULL,
  `abr` varchar(16) NOT NULL,
  `size` int(11) NOT NULL,
  `YinYang` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `abr` (`abr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Chinese Meridians';

--
-- Dumping data for table `meridians`
--

INSERT INTO `meridians` (`id`, `name`, `description`, `summary`, `abr`, `size`, `YinYang`) VALUES
(1, 'Lung', 'The Lung meridian of Hand-Taiyin.', 'Shoulder to thumb.', 'LU', 11, 0),
(2, 'Large Intestine', 'The large intestine Meridian of Hand-Yangming.', 'Index finger to nose.', 'LI', 20, 1),
(3, 'Stomach', 'The Stomach Meridian of Foot-Yangming.', 'Below eyes to tip of middle toe', 'ST', 45, 1),
(4, 'Spleen', 'The Spleen Meridian of Foot-Taiyin', 'From the tip of the big toe to top of the chest down to armpit.', 'SP', 21, 0),
(5, 'Heart', 'The Heart Meridian of Hand-Shaoyin', 'From the armpit to the tip of the pinky', 'HT, HE', 9, 0),
(6, 'Small Intestine', 'The Small intestine Meridian of Hand-Taiyang', 'From tip of pinky to back of scapulas to face and ears.', 'SI', 19, 1),
(7, 'Bladder', 'The Bladder Meridican of Foot-Taiyang', 'From tear-ducts up over the head, down the back following the vertibrae all the way down.  Under the buttocks down to the knees.  Then back to the scapulas following the vertibrae down again (farther to the side) all the way down to the pinky toe.', 'BL, UB', 67, 1),
(8, 'Kidney', 'The Kidney Meridian of Foot-Shaoyin', 'Bottom of foot (bubbling springs) up to the collar bone.', 'KI', 27, 0),
(9, 'Pericardium', 'The Pericardium meridian of Hand-Jueyin', 'Just outside of the nipples up the shoulder down the arm to the tip of the middle finger.', 'P, PC', 9, 0),
(10, 'Triple Warmer', 'The Triple Warmer (San Jiao) meridian of hand-Shaoyang', 'From the tip of the ring finger up over shoulders around the back of the ears to the outside of the eyebrow.', 'TW, SJ, TE, TB', 23, 1),
(11, 'Glallbladder', 'The Gallbladder meridian of Foot-Shaoyang', 'From outside corner of the eye, all around the skull, shoulders, armpit, down the side and on the outside of the legs to the ring toe.', 'GB', 44, 1),
(12, 'Liver', 'The Liver Meridian of Foot-Jueyin', 'From the top of the big toe to groin to just below the pectoralis.', 'LV', 14, 0),
(13, 'Conception Vessel', 'The Conception Vessel Meridian', 'From under the hipbone on the outside straight up the center line in the front up to the chin just under the lower lip.', 'CV, Ren', 24, NULL),
(14, 'Governing', 'The Governing Vessel Meridian', 'From the tailbone up the back right on the spine up over the skull down the center of the face to the lip and gums above the fron two teeth.', 'GV, DU', 28, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `meridian_points`
--

CREATE TABLE IF NOT EXISTS `meridian_points` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `meridian_id` int(10) unsigned NOT NULL DEFAULT '1',
  `name` varchar(32) NOT NULL,
  `num` varchar(4) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `location` varchar(512) NOT NULL,
  `indications` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`,`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `meridian_points`
--

INSERT INTO `meridian_points` (`id`, `meridian_id`, `name`, `num`, `description`, `location`, `indications`) VALUES
(1, 1, 'Zhongfu', '1', 'Front-Mu Point of Lung', '6 cun lateral to anterior midline level with the 1st intercostal space.', 'Cough; Asthma; Fullness of the chest; Pain in the chest, shoulder and back'),
(2, 1, 'Yunmen', '2', NULL, '6 cun lateral to the anterior midline below the clavicle in the depression medial to the coracoids process.', 'Caugh; Asthma; Pin in the chest, should and arm'),
(3, 1, 'Tianfu', '3', NULL, '3 cun inferior to the anterior axillary fold on the radial side of bicepts brachii muscle.', 'Cough; Asthma; Epistaxis; Pin in the medial aspect of the upper arm; Hyperthyroidism'),
(4, 1, 'Xiabai', '4', NULL, '4 cun inferior to the anterior axillary fold or 5cun above the cubital crease, on the radial side of biceps brachii muscle.', 'Cough; Asthma; pain in the medial aspect of the upper arm; Retching'),
(5, 1, 'Chize', '5', 'He-Sea, Water Point', 'On the cubital crease, in the depression lateral to biceps brachii tendon.', 'Cough; Hemoptysis; Sore throat; Spasmodic pain of the elbow and arm; Infantile convulsions'),
(6, 1, 'Kongzui', '6', 'Xi-Cleft Point', '7 cun above the transverse crease of the wrist', 'Hemoptysis; Cough; Asthma; Sore throat; Spasmodic pain of the elbow and arm'),
(7, 1, 'Lieque', '7', 'Luo-Connecting Point, Confluent Point', '1.5 cun above the transverse crease of the wrist, superior to the styloid process of the radius', 'cough; Asthma; Sore throat; Headache; Migraine; Neck rigidity; Enuresis; Toothache; Pain and weakness of the wrist.'),
(8, 1, 'Jingqu', '8', 'Jing-River, Metal Point', '1 cun above the transverse crease of the wrist in the hollow on the lateral side of the radial artery.', 'Cough; Asthma; Pain in the chest; Sore throat; Pain in the wrist'),
(9, 1, 'Taiyuan', '9', 'Shu-Stream, Earth Point, Yuan-Primary Point, Influential point of Vessels', 'On transverse crease of the wrist on the lateral side of the radial artery.', 'Cough; Asthma; hemoptysis; Palpitation; pain in the wrist and arm'),
(10, 1, 'Yuji', '10', 'Ying-Spring, Fire Point', 'On the palmer side of the hand, at the midpoint of the 1st metacarpal bone at the junction of the red and white skin.', 'Cough; Hemoptysis; Sore throat; Loss of voice; Feverish sensation in the palm; Rubella; Infantile convulsions; Mastitis'),
(11, 1, 'Shaoshang', '11', 'Jing-Well, Wood Point', '0.1 cun posterior to the nail on the radial side of the nail', 'Sore throat; Epistaxis; Fever; Loss of conciousness; Mental disorders; Cough; Spasmodic of the thumb'),
(12, 2, 'Shangyang', '1', 'Jing-Well, Metal Point', '0.1 cun posterior to the corner of the nail on the radial side of the index finger', 'Toothache, Sore throat, Febrile diseases, Loss of consciousness'),
(13, 2, 'Erjian', '2', 'Ying-Spring, Water Point', 'When a loos fist is made, on the radial side of the index finger distal to the 2nd metacarpophalangeal joint in a depression at the junction of the red and white skin.', 'Epistaxis, Toothache, Febrile diseases'),
(14, 2, 'Sanjian', '3', 'Shu-Stream, Wood Point', 'When a loose fist is made, on the radial side of the index finger proximal to the head of the 2nd metacarpal bone.', 'Toothache; Sore throat; Alxlominal pain and distension'),
(15, 2, 'Hegu', '4', 'Yuan-Primary Point', 'On the dorsum of the hand between the 1st and 2nd metacarpal bones, approximately in the middle of the 2nd metacarpal bone on the radial side', 'Headache; Toothache; Swelling and pain of the eye; Epistaxis; Deafness; Facial paralysis; nasal obstruction; Febrile diseases; Dysentery; Constipation; Abdominal pain; Convulsion; Trismus'),
(16, 2, 'Yangxi', '5', 'Jing-River, Fire Point', 'On the radial side of the wrist between the extensor pollicis longus and brevis tendons in a depression formed when the thumb is tilted upward.', 'Poin of the wrist; Headache; Swelling and pain of the eye; Deafness'),
(17, 2, 'Pianli', '6', 'Luo-Connecting Point', 'With the elbow flexed, 3 cun above the transverse crease of the wrist (LI5) on the radial side of the forearm', 'Deafness Epistaxis; Aching of the hand and arm; Abdominal pain and distension; Edema'),
(18, 2, 'Wenliu', '7', 'Xi-Cleft Point', 'With the elbow flexed, 5 cun above the transverse crase of the wrist (LI5) on the radial side of the forearm.', 'Abdominal pain, Borborygnus; Furuncle; Headache; Swelling of the faice; Pain in the shoulder and back'),
(19, 2, 'Xialian', '8', NULL, '4 cun below LI11 on the radial side of the forearm on the line connecting LI5 and LI11', 'Pain in the elbow and arm, Motor impairment of the upper limbs; Headache; Vertigo; Abdominal pain'),
(20, 2, 'Shanglian', '9', NULL, '3 cun below LI11 on the radial side of the forearm on the line connecting LI5 and LI11', 'numbness of the hand and arm, Aching of the shoulder and arm, Motor impairment of the upper limbs, Headache, Borborygmus'),
(21, 2, 'Shousanli', '10', NULL, '2 cun below LI11 on the radial side of the forearm on the line connecting LI5 and LI11', 'Motor impairment of the upper limbs; Pain and weakness of the upper limbs, Abdominal pain, Diarrhea, Toothache, Parotitis'),
(22, 2, 'Quchi', '11', 'He-Sea, Earth Point', 'With a bent elbow, the point lies in the depression at the lateral end of the transverse cubital crease, midway between LU5 and the lateral epicondyle of the humerous', 'Motor impairment of the upper limbs; Pain and weakness of the upper limbs; Febrile diseases; Hypertension; Abdominal pain; Diarrhea; Toothache; Sore throat; Skin diseases'),
(23, 2, 'Zhouliao', '12', NULL, 'With the elbow flexed, on the radial side of the upper arm 1 cun above the lateral posterior border of the humerous', 'Motor impairment of the upper limbs; Pain and weakness of the upper limbs'),
(24, 2, 'Shouwuli', '13', 'Caution: Avoid injuring artery when needling.', '3 cun above LI11on the line connecting LI11 and LI15 line.', 'Motor impairment of the upper limbs; Pain and contracture of the upper limbs; Scrofula '),
(25, 2, 'Binao', '14', NULL, '7 cun above LI11 at the insertion of deltoid, on the line connecting LI11 and LI15', 'Motor impairment of the upper limbs; Pain and weakness of the upper limbs; Pain in the neck; Scrofula; Eye disease'),
(26, 2, 'Jianyu', '15', NULL, 'Antero-inferior to the acromion, on the upper portion of deltoid muscle.  When the arm is in full abduction, th epoint is in the depression appearing at the anterior border of the acromioclavicular joint.', 'Motor impariment of the upper limbs; Pain and contracture of the upper limbs; Urticara'),
(27, 2, 'Jugo', '16', NULL, 'Slightly posterior to the shoulder; in the depression between the acromion process and the scaupular spine.', 'Pain and contracture of the upper limbs; Scrofula; Goiter'),
(28, 2, 'Tianding', '17', NULL, 'On the lateral side of the neck, 1 cun below LI18 on th eposterior border of the sternocleidomastoid muscle.', 'Suddon loss of voice; Sore throat; Scrofula; Goiter'),
(29, 2, 'Futu', '18', NULL, 'On the lateral side of the neck, level with the tip of the adam''s apple between the sternal head and the clavicular head of the sternocleidomastoid muscle.', 'Sore throat; Sudden loss of voice; Scrofula; Goiter; Cough; Asthma; Pain in the upper arm'),
(30, 2, 'Kouheliao', '19', NULL, 'Directly below the lateral margin of the nostril 0.5 cun lateral to GV26.', 'Nasal obstruction; Epistaxis; Facial paralysis; Trismus; Deviation of the mouth'),
(31, 2, 'Yingxiang', '20', NULL, 'In the nasolabial sulcus, level with the midpoint of the lateral border of the ala nasi.', 'Nasal obstruction; Epistaxis; Hypsomia; Facial paralysis; Itching of the face; Deviation of the mouth; Biliary ascariasis'),
(32, 3, 'Chengqi', '1', NULL, 'Directly below the pipil between the eyeball and the infraorbital ridge.', 'Twitching of eyelids; Lacrimation; Night blindness; Swelling and pain of the eye; Facial paralysis'),
(33, 3, 'Sibai', '2', NULL, 'Directly below the pupil in a depression at the infraorbital foramen.', 'Pain and itching of the eye; Twithcing of they eye lids; Pain in the face; Redness; Facial paralysis; Headache; vertigo; Biliary ascariasis; Pain in the trigeminal nerve'),
(34, 3, 'Juliao', '3', NULL, 'Directly below the pupil, at the level of the lower border of ala nasi, on the lateral side of the nasolabial groove.', 'Facial paralysis; Twitching of the eye; Epistaxis; Toothache; Swelling of lips and cheek'),
(35, 3, 'Dicang', '4', NULL, 'Directly below the pupil, lateral to the corner of the mouth.', 'Facial paralysis; Salivation; Pain in the trigeminal nerve'),
(36, 3, 'Daying', '5', NULL, 'Anterior to the angle of the mandible, on the anterior border of the attached portion of masseter where in the pulsation of facial artery is palpable, in the groove-like depression appearing when the cheek is bulged.', 'Facial paralysis; Swelling of the cheek; Toothache'),
(37, 3, 'Jiache', '6', NULL, 'One finger width anterior and superior to the lower angle of the mandible, at the prominence of masseter muscle.', 'Toothache; Trismus; Swelling of the cheek; Facil paralysis; Mumps'),
(38, 3, 'Xiaguan', '7', NULL, 'Anterior to the ear, with mouth closed, in the depression at the lower border of the zygomatic arch, anterior to the condyloid process of the mandible.  The point is located with the mouth closed.', 'Trismus; Pain in the trigeminal nerve; Toothache; Facial paralysis; Deafness; tinnitus; Otorrhea'),
(39, 3, 'Touwei', '8', NULL, 'At the corner of the forehead, 0.5 cun within the hairline at the corner of the forehead, 4.5 cun lateral to the midline at GV24', 'Headache; Vertigo; Pain of the eye; Blurring of vision');
