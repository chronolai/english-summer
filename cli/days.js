// basic1200: http://www.fhjh.tn.edu.tw/academic/contest/%E8%8B%B1%E8%AA%9E1200%E5%AD%97.pdf
// advance800: https://www.chshs.ntpc.edu.tw/uploads/1594691235941rkmrvWuB.pdf
// phrase: http://htmfiles.englishhome.org/grammar/phrasalverbs.htm

const mapFunc = (n, r) => {
  return (d) => {
    return {
      name: n,
      round: r,
      page: `${n}/round${r}`,
      ...d,
    };
  };
};

const ianRound1 = [{
  date: '2021-06-15',
  rows: [40, 128, 165, 400, 477, 689, 880, 1124, 1094, 1197].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-16',
  rows: [1085, 215, 1154, 1014, 369, 382, 444, 211, 154, 389].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-17',
  rows: [731, 961, 210, 736, 900, 1184, 1198, 828, 679, 569].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-18',
  rows: [459, 113, 216, 701, 1092, 320, 685, 160, 228, 597].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-19',
  rows: [1156, 767, 275, 310, 180, 48, 807, 102, 470, 922].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-20',
  rows: [654, 834, 73, 650, 371, 673, 514, 87, 795, 765].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-21',
  rows: [1174, 608, 711, 23, 662, 359, 1183, 1099, 1168, 120].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-22',
  rows: [99, 319, 619, 897, 938, 114, 884, 342, 998, 408].map(id => `basic1200_${id}`),
}].map(mapFunc('ian', 1));

const ianRound2 = [{
  date: '2021-06-23',
  rows: [894, 35, 649, 1176, 660, 26, 468, 251, 859, 737].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-24',
  rows: [348, 212, 65, 539, 460, 933, 1177, 8, 643, 1145].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-25',
  rows: [1139, 229, 358, 1007, 616, 193, 218, 13, 466, 1127].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-28',
  rows: [802, 741, 862, 1175, 412, 926, 304, 373, 724, 384].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-29',
  rows: [1190, 573, 646, 1036, 136, 255, 21, 845, 19, 952].map(id => `basic1200_${id}`),
}, {
  date: '2021-06-30',
  rows: [930, 1187, 370, 984, 129, 513, 259, 753, 383, 1044].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-01',
  rows: [959, 143, 1137, 94, 637, 302, 858, 1015, 294, 312].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-02',
  rows: [1159, 886, 686, 622, 766, 617, 727, 770, 820, 653].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-05',
  rows: [555, 1161, 365, 343, 166, 339, 181, 378, 356, 483].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-06',
  rows: [118, 955, 747, 780, 663, 836, 642, 793, 830, 668].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-07',
  rows: [719, 403, 258, 238, 246, 250, 298, 253, 81, 77].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-08',
  rows: [230, 1148, 842, 821, 764, 772, 700, 906, 779, 811].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-09',
  rows: [996, 915, 59, 176, 578, 442, 879, 971, 347, 428].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-12',
  rows: [18, 427, 866, 641, 287, 508, 1199, 790, 832, 558].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-13',
  rows: [532, 740, 651, 407, 799, 406, 133, 399, 490, 614].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-14',
  rows: [316, 881, 308, 495, 645, 844, 496, 983, 541, 992].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-15',
  rows: [379, 533, 349, 1194, 542, 273, 198, 292, 295, 557].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-16',
  rows: [593, 1072, 1121, 713, 175, 804, 761, 263, 547, 252].map(id => `basic1200_${id}`),
}].map(mapFunc('ian', 2));

const ianRound3 = [{
  date: '2021-07-19',
  rows: [499, 299, 877, 333, 787, 632, 115, 1063, 691, 219].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-20',
  rows: [12, 1021, 164, 268, 449, 1089, 388, 1052, 487, 733].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-21',
  rows: [903, 247, 284, 768, 194, 562, 1057, 561, 224, 296].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-22',
  rows: [174, 997, 1163, 749, 852, 827, 440, 1173, 434, 177].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-23',
  rows: [769, 833, 1020, 524, 195, 531, 800, 826, 1087, 286].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-26', // +1 天
  rows: [464, 1178, 300, 235, 390, 352, 367, 377, 98, 125].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-27',
  rows: [748, 233, 178, 93, 1048, 357, 336, 585, 60, 277].map(id => `basic1200_${id}`),
  // }, {
  //     date: '2021-07-28', // +3 天
  //     rows: [].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-29',
  rows: [591, 423, 548, 543, 515, 1084, 976, 375, 240, 576].map(id => `basic1200_${id}`),
}, {
  date: '2021-07-30',
  rows: [695, 567, 720, 579, 682, 414, 170, 486, 831, 1035].map(id => `basic1200_${id}`),
  // }, {
  // date: '2021-08-02', // +1 天
  // rows: [324, 66, 145, 1133, 895, 1149, 511, 297, 943, 774].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-03',
  rows: [324, 66, 145, 1133, 895, 1149, 511, 297, 943, 774].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-04', // +2 天
  rows: [876, 1106, 437, 1112, 186, 805, 782, 935, 681, 387].map(id => `basic1200_${id}`),
  // }, { // +2 天
  //     date: '2021-08-05',
  //     rows: [].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-06',
  rows: [918, 1029, 1061, 1157, 448, 119, 718, 500, 1182, 261, 186, 387].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-09',
  rows: [563, 757, 168, 556, 1152, 142, 326, 417, 322, 582].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-10',
  rows: [325, 1001, 1010, 1083, 421, 52, 853, 155, 857, 207].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-11',
  rows: [70, 484, 603, 84, 994, 458, 759, 85, 837, 944].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-12',
  rows: [1128, 715, 916, 1039, 439, 1144, 454, 121, 951, 1006].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-13',
  rows: [589, 76, 1042, 386, 1031, 350, 392, 738, 678, 928].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-16',
  rows: [479, 396, 167, 150, 755, 314, 882, 1030, 1126, 536].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-17',
  rows: [1171, 130, 684, 854, 1002, 707, 447, 3, 159, 788].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-18',
  rows: [1033, 1055, 196, 71, 843, 1013, 351, 743, 824, 243].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-19',
  rows: [239, 956, 1118, 878, 1200, 520, 20, 149, 54, 344].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-20',
  rows: [1116, 636, 1196, 580, 838, 498, 667, 612, 422, 1115].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-23',
  rows: [279, 226, 134, 481, 550, 220, 789, 981, 332, 927].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-24',
  rows: [635, 869, 5, 1131, 1103, 131, 256, 265, 109, 360].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-25',
  rows: [116, 871, 885, 91, 610, 818, 776, 494, 346, 676].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-26',
  rows: [592, 692, 588, 147, 1160, 425, 615, 111, 891, 1034].map(id => `basic1200_${id}`),
}, {
  date: '2021-08-27',
  rows: [266, 27, 620, 436, 590, 1065, 917, 162, 729, 910].map(id => `basic1200_${id}`),
}].map(mapFunc('ian', 3));

const doraRound1 = [{
  date: '2021-06-28',
  rows: [
    ...[6, 992, 530, 861, 1141].map(id => `basic1200_${id}`),
    ...[272, 32, 408, 508, 118, 659, 665, 193, 689, 317].map(id => `advance800_${id}`),
    ...[1, 2, 3, 4, 5].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-06-29',
  rows: [
    ...[344, 361, 367, 574, 960].map(id => `basic1200_${id}`),
    ...[654, 87, 552, 329, 395, 130, 608, 107, 560, 85].map(id => `advance800_${id}`),
    ...[6, 7, 8, 9, 10].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-06-30',
  rows: [
    ...[309, 1032, 804, 611, 687].map(id => `basic1200_${id}`),
    ...[394, 113, 222, 218, 155, 70, 114, 219, 738, 197].map(id => `advance800_${id}`),
    ...[11, 12, 13, 14, 15].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-01',
  rows: [
    ...[911, 712, 1046, 668, 716].map(id => `basic1200_${id}`),
    ...[319, 25, 741, 574, 729, 6, 569, 590, 465, 396].map(id => `advance800_${id}`),
    ...[16, 17, 18, 19, 20].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-02',
  rows: [
    ...[537, 425, 403, 1198, 572].map(id => `basic1200_${id}`),
    ...[57, 269, 94, 56, 513, 770, 451, 470, 457, 475].map(id => `advance800_${id}`),
    ...[93, 32, 77, 34, 72].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-05',
  rows: [
    ...[652, 254, 285, 278, 317].map(id => `basic1200_${id}`),
    ...[730, 162, 54, 383, 533, 308, 497, 236, 553, 507].map(id => `advance800_${id}`),
    ...[58, 83, 90, 79, 67].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-06',
  rows: [
    ...[393, 120, 505, 414, 434].map(id => `basic1200_${id}`),
    ...[781, 449, 433, 410, 469, 450, 435, 446, 490, 448].map(id => `advance800_${id}`),
    ...[36, 25, 22, 50, 27].map(id => `phrase_${id}`),
  ],
}, {
  // 沒背好往後挪一天
  //   date: '2021-07-07',
  //   rows: [
  //     ...[1183, 711, 449, 789, 331].map(id => `basic1200_${id}`),
  //     ...[706, 575, 491, 702, 431, 37, 564, 445, 443, 718].map(id => `advance800_${id}`),
  //     ...[52, 49, 55, 81, 60].map(id => `phrase_${id}`),
  //   ],
  // }, {
  date: '2021-07-08',
  rows: [
    ...[1183, 711, 449, 789, 331].map(id => `basic1200_${id}`),
    ...[706, 575, 491, 702, 431, 37, 564, 445, 443, 718].map(id => `advance800_${id}`),
    ...[52, 49, 55, 81, 60].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-09',
  rows: [
    ...[842, 1117, 706, 688, 500].map(id => `basic1200_${id}`),
    ...[271, 601, 156, 624, 294, 327, 768, 717, 322, 728].map(id => `advance800_${id}`),
    ...[21, 84, 40, 61, 73].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-12',
  rows: [
    ...[270, 29, 1066, 413, 1105].map(id => `basic1200_${id}`),
    ...[518, 306, 558, 147, 546, 78, 732, 599, 296, 151].map(id => `advance800_${id}`),
    ...[41, 80, 45, 39, 28].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-13',
  rows: [
    ...[1107, 671, 852, 678, 940].map(id => `basic1200_${id}`),
    ...[780, 339, 82, 325, 79, 696, 563, 645, 334, 243].map(id => `advance800_${id}`),
    ...[86, 24, 66, 53, 65].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-14',
  rows: [
    ...[577, 562, 35, 601, 545].map(id => `basic1200_${id}`),
    ...[358, 398, 256, 544, 343, 277, 666, 136, 606, 142].map(id => `advance800_${id}`),
    ...[91, 47, 23, 56, 64].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-15',
  rows: [
    ...[726, 448, 859, 1037, 767].map(id => `basic1200_${id}`),
    ...[573, 320, 185, 345, 258, 80, 390, 512, 30, 224].map(id => `advance800_${id}`),
    ...[63, 33, 59, 37, 29].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-16',
  rows: [
    ...[66, 102, 204, 25, 356].map(id => `basic1200_${id}`),
    ...[346, 585, 402, 674, 602, 372, 583, 763, 61, 124].map(id => `advance800_${id}`),
    ...[30, 54, 88, 87, 26].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-19',
  rows: [
    ...[160, 656, 673, 970, 776].map(id => `basic1200_${id}`),
    ...[672, 685, 50, 143, 529, 671, 375, 405, 65, 138].map(id => `advance800_${id}`),
    ...[38, 78, 85, 44, 31].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-20',
  rows: [
    ...[442, 440, 451, 64, 1177].map(id => `basic1200_${id}`),
    ...[97, 532, 205, 22, 3, 522, 356, 260, 81, 206].map(id => `advance800_${id}`),
    ...[43, 68, 94, 95, 74].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-21',
  rows: [
    ...[691, 631, 297, 701, 934].map(id => `basic1200_${id}`),
    ...[359, 235, 353, 34, 425, 98, 786, 67, 132, 152].map(id => `advance800_${id}`),
    ...[69, 82, 42, 92, 71].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-22',
  rows: [
    ...[159, 501, 365, 1133, 1005].map(id => `basic1200_${id}`),
    ...[298, 772, 775, 35, 495, 646, 281, 89, 571, 744].map(id => `advance800_${id}`),
    ...[62, 35, 76, 89, 46].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-23',
  rows: [
    ...[557, 109, 579, 366, 1093].map(id => `basic1200_${id}`),
    ...[687, 670, 74, 137, 412, 761, 16, 620, 265, 83].map(id => `advance800_${id}`),
    ...[57, 75, 51, 48, 70].map(id => `phrase_${id}`),
  ],
}, {
  date: '2021-07-26', // +1 天
  rows: [
    ...[271, 1174, 756, 223, 534].map(id => `basic1200_${id}`),
    ...[284, 268, 485, 255, 165, 494, 657, 652, 95, 141, 501, 313, 737, 554, 499].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-07-27',
  rows: [
    ...[539, 283, 564, 1123, 862].map(id => `basic1200_${id}`),
    ...[249, 407, 285, 617, 695, 99, 733, 86, 596, 632, 715, 134, 199, 72, 588].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-07-28',
  rows: [
    ...[672, 1172, 260, 737, 408].map(id => `basic1200_${id}`),
    ...[753, 59, 393, 365, 280, 664, 594, 489, 581, 468, 144, 787, 344, 498, 488].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-07-29',
  rows: [
    ...[926, 624, 1045, 913, 1100].map(id => `basic1200_${id}`),
    ...[229, 307, 242, 295, 391, 91, 466, 766, 53, 311, 223, 477, 376, 180, 217].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-07-30',
  rows: [
    ...[1160, 191, 404, 386, 1015].map(id => `basic1200_${id}`),
    ...[129, 4, 347, 126, 233, 458, 630, 253, 230, 514, 370, 411, 131, 483, 400].map(id => `advance800_${id}`),
  ],
}].map(mapFunc('dora', 1));

const doraRound2 = [{
  date: '2021-08-02',
  rows: [
    ...[328, 304, 242, 36, 855].map(id => `basic1200_${id}`),
    ...[10, 436, 148, 743, 576, 701, 593, 348, 211, 220, 779, 27, 187, 611, 545].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-03',
  rows: [
    ...[1145, 723, 1038, 194, 908].map(id => `basic1200_${id}`),
    ...[447, 422, 36, 473, 627, 204, 385, 267, 161, 300, 641, 5, 603, 782, 166].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-04',
  rows: [
    ...[239, 858, 788, 72, 119].map(id => `basic1200_${id}`),
    ...[39, 562, 655, 615, 748, 572, 707, 73, 705, 538, 48, 598, 120, 163, 662].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-05',
  rows: [
    ...[15, 1109, 941, 211, 1021].map(id => `basic1200_${id}`),
    ...[751, 774, 158, 504, 710, 351, 282, 198, 397, 712, 377, 584, 226, 159, 381].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-06',
  rows: [
    ...[578, 164, 1135, 762, 747].map(id => `basic1200_${id}`),
    ...[290, 228, 40, 413, 20, 549, 21, 116, 216, 186, 140, 714, 566, 736, 742].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-09',
  rows: [
    ...[990, 342, 423, 1140, 299].map(id => `basic1200_${id}`),
    ...[286, 540, 754, 251, 452, 428, 439, 767, 505, 415, 464, 69, 453, 245, 171].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-10',
  rows: [
    ...[836, 800, 617, 1112, 1055].map(id => `basic1200_${id}`),
    ...[191, 292, 746, 683, 88, 208, 58, 145, 31, 406, 192, 244, 196, 515, 231].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-11',
  rows: [
    ...[52, 570, 1200, 605, 286].map(id => `basic1200_${id}`),
    ...[681, 367, 330, 293, 582, 175, 331, 333, 401, 139, 537, 543, 614, 213, 149].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-12',
  rows: [
    ...[892, 864, 843, 1043, 888].map(id => `basic1200_${id}`),
    ...[111, 755, 380, 128, 24, 441, 181, 478, 629, 177, 526, 178, 699, 765, 9].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-13',
  rows: [
    ...[362, 924, 151, 820, 567].map(id => `basic1200_${id}`),
    ...[182, 534, 785, 209, 321, 531, 361, 240, 633, 726, 188, 112, 432, 424, 108].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-16',
  rows: [
    ...[715, 262, 988, 847, 1190].map(id => `basic1200_${id}`),
    ...[517, 750, 227, 384, 503, 682, 716, 461, 379, 84, 610, 527, 194, 663, 673].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-17',
  rows: [
    ...[1075, 821, 235, 576, 348].map(id => `basic1200_${id}`),
    ...[586, 341, 762, 764, 423, 474, 364, 254, 605, 17, 264, 539, 484, 479, 438].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-18',
  rows: [
    ...[976, 799, 989, 794, 920].map(id => `basic1200_${id}`),
    ...[409, 26, 700, 404, 215, 686, 110, 119, 301, 100, 71, 169, 304, 164, 587].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-19',
  rows: [
    ...[1065, 614, 511, 942, 1051].map(id => `basic1200_${id}`),
    ...[11, 697, 172, 769, 150, 502, 725, 47, 14, 650, 739, 493, 623, 49, 613].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-20',
  rows: [
    ...[407, 322, 30, 569, 48].map(id => `basic1200_${id}`),
    ...[368, 276, 378, 63, 773, 675, 105, 55, 548, 555, 7, 419, 52, 722, 437].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-23',
  rows: [
    ...[178, 803, 513, 201, 856].map(id => `basic1200_${id}`),
    ...[246, 250, 324, 355, 18, 756, 684, 75, 649, 19, 721, 167, 561, 467, 693].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-24',
  rows: [
    ...[922, 602, 406, 1120, 503].map(id => `basic1200_${id}`),
    ...[530, 297, 661, 13, 557, 440, 669, 757, 691, 541, 724, 556, 42, 523, 369].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-25',
  rows: [
    ...[384, 655, 23, 1009, 472].map(id => `basic1200_${id}`),
    ...[349, 524, 373, 154, 506, 15, 62, 263, 550, 252, 521, 173, 45, 337, 472].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-26',
  rows: [
    ...[729, 839, 1161, 738, 1013].map(id => `basic1200_${id}`),
    ...[103, 117, 760, 183, 752, 266, 342, 60, 371, 323, 115, 335, 525, 510, 399].map(id => `advance800_${id}`),
  ],
}, {
  date: '2021-08-27',
  rows: [
    ...[372, 1138, 877, 870, 523].map(id => `basic1200_${id}`),
    ...[727, 43, 190, 651, 170, 357, 96, 713, 133, 418, 288, 592, 234, 76, 656].map(id => `advance800_${id}`),
  ],
}].map(mapFunc('dora', 2));

const ianDays = [
  ...ianRound1,
  ...ianRound2,
  ...ianRound3,
];

const doraDays = [
  ...doraRound1,
  ...doraRound2,
];

const days = [
  ...ianDays,
  ...doraDays,
];

// console.error(days);

module.exports = days;