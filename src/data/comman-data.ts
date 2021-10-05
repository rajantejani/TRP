export const favoriteColorList: string[] = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "red",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua"
];

export const enrichmentsList = [
  { id: "1", itemName: "Read aloud", name: "Read aloud" },
  { id: "2", itemName: "Animated", name: "Animated" },
  { id: "3", itemName: "Interactive", name: "Interactive" },
  { id: "4", itemName: "Background music", name: "Background music" }
];

export const editionList = [
  { id: "1", name: "1st" },
  { id: "2", name: "2nd" },
  { id: "3", name: "3th" },
  { id: "4", name: "4th" }
];

export const publishersList: { id: string | number; description: string }[] = [
  { id: "NML", description: "Nomelome" },
  { id: "TRP", description: "Tiny Readers Publising" },
  { id: "BAM", description: "Books A Million" },
  { id: "BAN", description: "Barns and Noble" },
  { id: "BBS", description: "Bordes Books" },
  { id: "SBS", description: "Spanish Bookstore" }
];

export const favoriteHobbiesList: string[] = [
  "Reading",
  "Collecting",
  "Music",
  "Television",
  "Gardening",
  "Video Games",
  "Fishing",
  "Walking",
  "Shopping",
  "Traveling",
  "Golf",
  "Playing Cards",
  "Eating Out",
  "Running",
  "Dancing",
  "Painting",
  "Cooking"
];

export const partnerTypesList: { id: string | number; description: string }[] = [
  { id: 1, description: "Business" },
  { id: 2, description: "Individual" },
  { id: 3, description: "Non-profit" },
  { id: 4, description: "Library" },
  { id: 5, description: "Government" }
];

export const partnerFunctionsList: { id: string | number; description: string }[] = [
  { id: "at", description: "Author" },
  { id: "ed", description: "Editor" },
  { id: "re", description: "Reviewing Editor" },
  { id: "il", description: "Illustrator" },
  { id: "ae", description: "Art editor" },
  { id: "ga", description: "Graphic Artist" },
  { id: "ge", description: "Graphics Editor" },
  { id: "an", description: "Animator" },
  { id: "me", description: "Animation Editor" },
  { id: "tr", description: "Translator" },
  { id: "rt", description: "Reviewing Translator" },
  { id: "nt", description: "Narrator" },
  { id: "rn", description: "Reviewing Narrator" },
  { id: "se", description: "Sound Editor" },
  { id: "sr", description: "Sound Reviewer" },
  { id: "pb", description: "Publisher" },
  { id: "fy", description: "Foundry" },
  { id: "dv", description: "Developer" },
  { id: "ad", description: "Administrator" },
  { id: "bc", description: "Book Composer" },
  { id: "none", description: "" }
];

export const socialTypeList: { name: string; icon: string }[] = [
  { name: "Facebook", icon: "fa-facebook" },
  { name: "Twitter", icon: "fa-twitter" },
  { name: "Pintrest", icon: "fa-pinterest" },
  { name: "Instagram", icon: "fa-instagram" },
  { name: "LinkedIn", icon: "fa-linkedin" },
  { name: "Webpage", icon: "fa-rss" }
];

export const socialIconsList = {
  Facebook: "fa-facebook",
  Twitter: "fa-twitter",
  Pintrest: "fa-pinterest",
  Instagram: "fa-instagram",
  LinkedIn: "fa-linkedin",
  Webpage: "fa-rss"
};

export const salesOrganizationsList: { id: string | number; description: string }[] = [
  { id: 1001, description: "Libraries" },
  { id: 1002, description: "Retailers" },
  { id: 1003, description: "Content Providers" },
  { id: 1004, description: "Publishers" }
];
export const distributionChannelsList: { id: string | number; description: string }[] = [
  { id: 10, description: "CCE VS" },
  { id: 11, description: "Ingram" },
  { id: 12, description: "Amazon" },
  { id: 13, description: "Kobo" }
];
export const divisionsList: { id: string | number; description: string }[] = [
  { id: 10, description: "Books" },
  { id: 20, description: "Audio books" },
  { id: 30, description: "Singalong" },
  { id: 40, description: "Games" },
  { id: 50, description: "Movies" }
];

export const rightTypes: { id: string | number; description: string }[] = [
  { id: 1, description: "Total" },
  { id: 2, description: "Script" },
  { id: 3, description: "Image" },
  { id: 4, description: "Audio" }
];

export const titlesList: (string | number)[] = [
  100001, 100002, 100003, 100004, 100005, 100006, 100007, 100008, 100009, 100010, 100011, 100012, 100013, 100014, 100015, 100016, 100017, 100018,
  100019, 100020, 100021, 100022
];

export const isbns: string[] = [
  "978-1-63800-098-3",
  "978-1-63800-098-1",
  "978-1-63800-098-2",
  "978-1-63800-098-4",
  "978-1-63800-098-5",
  "978-1-63800-098-6",
  "978-1-63800-098-7",
  "978-1-63800-098-5",
  "978-1-63800-098-6"
];

export const seriesList: (string | number)[] = [1, 2, 4, 20, 22, 25, 26, 27, 34, 42, 51, 55, 61, 64, 65, 69];

export const episodesList: (string | number)[] = [1, 2, 4, 20, 22, 25, 26, 27, 34, 42, 51, 55, 61, 64, 65, 69];

export const gradeList: { id: string | number; description: string }[] = [
  { id: 1, description: "1-3" },
  { id: 2, description: "1-5" },
  { id: 3, description: "2-4" },
  { id: 4, description: "2-7" },
  { id: 5, description: "3" },
  { id: 6, description: "K-2" },
  { id: 7, description: "PreK-1" },
  { id: 8, description: "Pre-K" },
  { id: 9, description: "Up to 5th grade" },
  { id: 10, description: "Middle School" },
  { id: 11, description: "High School" }
];
export const ageGroupList: { id: string | number; description: string }[] = [
  { id: "1", description: "2-3" },
  { id: "2", description: "2-4" },
  { id: "3", description: "3-5" },
  { id: "4", description: "3-7" },
  { id: "5", description: "3-8" },
  { id: "6", description: "4" },
  { id: "7", description: "4-6" },
  { id: "8", description: "4-9" },
  { id: "9", description: "5" },
  { id: "10", description: "5-7" },
  { id: "11", description: "6-8" }
];

export const fileFormatList: { id: string; description: string }[] = [
  { id: "1", description: "EPUB" },
  { id: "2", description: "MOBI" },
  { id: "3", description: "MP3" },
  { id: "4", description: "MP4" },
  { id: "5", description: "PDF" },
  { id: "6", description: "MOV" },
  { id: "7", description: "WAV" },
  { id: "8", description: "AEP" },
  { id: "9", description: "PSD" },
  { id: "10", description: "PNG" },
  { id: "11", description: "PDF" },
  { id: "12", description: "JPG" }
];

export const contentFormatList: { id: string; description: string }[] = [
  { id: "1", description: "Audio Book" },
  { id: "2", description: "Ebook" },
  { id: "3", description: "Vbook" },
  { id: "4", description: "Print" },
  { id: "5", description: "Song" },
  { id: "6", description: "Singalong" },
  { id: "7", description: "Quiz" },
  { id: "8", description: "Puzzle" }
];

export const salesOfficeList: { id: string | number; description: string }[] = [
  { id: "sl1", description: "Sales office 1" },
  { id: "sl2", description: "Sales office 1" },
  { id: "sl3", description: "Sales office 1" },
  { id: "sl4", description: "Sales office 1" }
];
export const salesGroupList: { id: string | number; description: string }[] = [
  { id: "sg1", description: "Sales Group 1" },
  { id: "sg2", description: "Sales Group 2" },
  { id: "sg3", description: "Sales Group 3" },
  { id: "sg4", description: "Sales Group 4" }
];
export const salesDistrictList: { id: string | number; description: string }[] = [
  { id: "sd1", description: "Sales District 1" },
  { id: "sd2", description: "Sales District 2" },
  { id: "sd3", description: "Sales District 3" },
  { id: "sd4", description: "Sales District 4" }
];

export const languagesList: { id: string; name: string }[] = [
  { id: "en", name: "English" },
  { id: "fr", name: "French" },
  { id: "zh", name: "Chinese" },
  { id: "ar", name: "Arabic" },
  { id: "fa", name: "Farsi" },
  { id: "hi", name: "Hindi" },
  { id: "he", name: "Hebrew" },
  { id: "ru", name: "Russian" },
  { id: "sp", name: "Spanish" }
];

export const countriesList: { id: string; name: string }[] = [
  { id: "AFG", name: "Afghanistan" },
  { id: "ALB", name: "Albania" },
  { id: "DZA", name: "Algeria" },
  { id: "AND", name: "Andorra" },
  { id: "AGO", name: "Angola" },
  { id: "ATG", name: "Antigua and Barbuda" },
  { id: "ARG", name: "Argentina" },
  { id: "ARM", name: "Armenia" },
  { id: "AUS", name: "Australia" },
  { id: "AUT", name: "Austria" },
  { id: "AZE", name: "Azerbaijan" },
  { id: "BHR", name: "Bahrain" },
  { id: "BGD", name: "Bangladesh" },
  { id: "BRB", name: "Barbados" },
  { id: "BLR", name: "Belarus" },
  { id: "BEL", name: "Belgium" },
  { id: "BLZ", name: "Belize" },
  { id: "BEN", name: "Benin" },
  { id: "BTN", name: "Bhutan" },
  { id: "BOL", name: "Bolivia" },
  { id: "BIH", name: "Bosnia and Herzegovina" },
  { id: "BWA", name: "Botswana" },
  { id: "BRA", name: "Brazil" },
  { id: "BRN", name: "Brunei Darussalam" },
  { id: "BGR", name: "Bulgaria" },
  { id: "BFA", name: "Burkina Faso" },
  { id: "BDI", name: "Burundi" },
  { id: "CPV", name: "Cabo Verde" },
  { id: "KHM", name: "Cambodia" },
  { id: "CMR", name: "Cameroon" },
  { id: "CAN", name: "Canada" },
  { id: "CAF", name: "Central African Republic" },
  { id: "TCD", name: "Chad" },
  { id: "CHL", name: "Chile" },
  { id: "CHN", name: "China" },
  { id: "COL", name: "Colombia" },
  { id: "COM", name: "Comoros" },
  { id: "COD", name: "Congo, Democratic Republic of the" },
  { id: "COG", name: "Congo, Republic of the" },
  { id: "CRI", name: "Costa Rica" },
  { id: "CIV", name: "Côte d’Ivoire" },
  { id: "HRV", name: "Croatia" },
  { id: "CUB", name: "Cuba" },
  { id: "CYP", name: "Cyprus" },
  { id: "DNK", name: "Denmark" },
  { id: "DJI", name: "Djibouti" },
  { id: "DMA", name: "Dominica" },
  { id: "DOM", name: "Dominican Republic" },
  { id: "ECU", name: "Ecuador" },
  { id: "EGY", name: "Egypt" },
  { id: "SLV", name: "El Salvador" },
  { id: "GNQ", name: "Equatorial Guinea" },
  { id: "ERI", name: "Eritrea" },
  { id: "EST", name: "Estonia" },
  { id: "SWZ", name: "Eswatini" },
  { id: "ETH", name: "Ethiopia" },
  { id: "FJI", name: "Fiji" },
  { id: "FIN", name: "Finland" },
  { id: "FRA", name: "France" },
  { id: "GAB", name: "Gabon" },
  { id: "GEO", name: "Georgia" },
  { id: "DEU", name: "Germany" },
  { id: "GHA", name: "Ghana" },
  { id: "GRC", name: "Greece" },
  { id: "GRD", name: "Grenada" },
  { id: "GTM", name: "Guatemala" },
  { id: "GIN", name: "Guinea" },
  { id: "GNB", name: "Guinea-Bissau" },
  { id: "GUY", name: "Guyana" },
  { id: "HTI", name: "Haiti" },
  { id: "HND", name: "Honduras" },
  { id: "HUN", name: "Hungary" },
  { id: "ISL", name: "Iceland" },
  { id: "IND", name: "India" },
  { id: "IDN", name: "Indonesia" },
  { id: "IRN", name: "Iran" },
  { id: "IRQ", name: "Iraq" },
  { id: "IRL", name: "Ireland" },
  { id: "ISR", name: "Israel" },
  { id: "ITA", name: "Italy" },
  { id: "JAM", name: "Jamaica" },
  { id: "JPN", name: "Japan" },
  { id: "JOR", name: "Jordan" },
  { id: "KAZ", name: "Kazakhstan" },
  { id: "KEN", name: "Kenya" },
  { id: "KIR", name: "Kiribati" },
  { id: "PRK", name: "Korea, North" },
  { id: "KOR", name: "Korea, South" },
  { id: "KWT", name: "Kuwait" },
  { id: "KGZ", name: "Kyrgyzstan" },
  { id: "LVA", name: "Latvia" },
  { id: "LBN", name: "Lebanon" },
  { id: "LSO", name: "Lesotho" },
  { id: "LBR", name: "Liberia" },
  { id: "LBY", name: "Libya" },
  { id: "LIE", name: "Liechtenstein" },
  { id: "LTU", name: "Lithuania" },
  { id: "LUX", name: "Luxembourg" },
  { id: "MDG", name: "Madagascar" },
  { id: "MWI", name: "Malawi" },
  { id: "MYS", name: "Malaysia" },
  { id: "MDV", name: "Maldives" },
  { id: "MLI", name: "Mali" },
  { id: "MLT", name: "Malta" },
  { id: "MHL", name: "Marshall Islands" },
  { id: "MRT", name: "Mauritania" },
  { id: "MUS", name: "Mauritius" },
  { id: "MEX", name: "Mexico" },
  { id: "FSM", name: "Micronesia, Federated States of" },
  { id: "MDA", name: "Moldova" },
  { id: "MCO", name: "Monaco" },
  { id: "MNG", name: "Mongolia" },
  { id: "MNE", name: "Montenegro" },
  { id: "MAR", name: "Morocco" },
  { id: "MOZ", name: "Mozambique" },
  { id: "MMR", name: "Myanmar (Burma)" },
  { id: "NAM", name: "Namibia" },
  { id: "NRU", name: "Nauru" },
  { id: "NPL", name: "Nepal" },
  { id: "NLD", name: "Netherlands" },
  { id: "NZL", name: "New Zealand" },
  { id: "NIC", name: "Nicaragua" },
  { id: "NER", name: "Niger" },
  { id: "NGA", name: "Nigeria" },
  { id: "NOR", name: "Norway" },
  { id: "OMN", name: "Oman" },
  { id: "PAK", name: "Pakistan" },
  { id: "PLW", name: "Palau" },
  { id: "PAN", name: "Panama" },
  { id: "PNG", name: "Papua New Guinea" },
  { id: "PRY", name: "Paraguay" },
  { id: "PER", name: "Peru" },
  { id: "PHL", name: "Philippines" },
  { id: "POL", name: "Poland" },
  { id: "PRT", name: "Portugal" },
  { id: "QAT", name: "Qatar" },
  { id: "ROU", name: "Romania" },
  { id: "RUS", name: "Russian Federation (the)" },
  { id: "RWA", name: "Rwanda" },
  { id: "KNA", name: "Saint Kitts and Nevis" },
  { id: "LCA", name: "Saint Lucia" },
  { id: "VCT", name: "Saint Vincent and the Grenadines" },
  { id: "WSM", name: "Samoa" },
  { id: "SMR", name: "San Marino" },
  { id: "STP", name: "Sao Tome and Principe" },
  { id: "SAU", name: "Saudi Arabia" },
  { id: "SEN", name: "Senegal" },
  { id: "SRB", name: "Serbia" },
  { id: "SYC", name: "Seychelles" },
  { id: "SLE", name: "Sierra Leone" },
  { id: "SGP", name: "Singapore" },
  { id: "SVK", name: "Slovakia" },
  { id: "SVN", name: "Slovenia" },
  { id: "SLB", name: "Solomon Islands" },
  { id: "SOM", name: "Somalia" },
  { id: "ZAF", name: "South Africa" },
  { id: "ESP", name: "Spain" },
  { id: "LKA", name: "Sri Lanka" },
  { id: "SDN", name: "Sudan" },
  { id: "SUR", name: "Suriname" },
  { id: "SWE", name: "Sweden" },
  { id: "CHE", name: "Switzerland" },
  { id: "SYR", name: "Syrian Arab Republic" },
  { id: "TWN", name: "Taiwan (Province of China)" },
  { id: "TJK", name: "Tajikistan" },
  { id: "TZA", name: "Tanzania, United Republic of" },
  { id: "THA", name: "Thailand" },
  { id: "TGO", name: "Togo" },
  { id: "TON", name: "Tonga" },
  { id: "TTO", name: "Trinidad and Tobago" },
  { id: "TUN", name: "Tunisia" },
  { id: "TUR", name: "Turkey" },
  { id: "TKM", name: "Turkmenistan" },
  { id: "TUV", name: "Tuvalu" },
  { id: "UGA", name: "Uganda" },
  { id: "UKR", name: "Ukraine" },
  { id: "ARE", name: "United Arab Emirates" },
  { id: "GBR", name: "United Kingdom of Great Britain and Northern Ireland (the)" },
  { id: "USA", name: "United States of America" },
  { id: "URY", name: "Uruguay" },
  { id: "UZB", name: "Uzbekistan" },
  { id: "VUT", name: "Vanuatu" },
  { id: "VEN", name: "Venezuela (Bolivarian Republic of)" },
  { id: "VNM", name: "Vietnam" },
  { id: "YEM", name: "Yemen" },
  { id: "ZMB", name: "Zambia" },
  { id: "ZWE", name: "Zimbabwe" },
  { id: "ALA", name: "Åland Islands" }
];
