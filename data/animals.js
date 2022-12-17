const animals = [
  "Aardvark",
  "Abyssinian",
  "Adelie Penguin",
  "Affenpinscher",
  "Afghan Hound",
  "African Bush Elephant",
  "African Civet",
  "African Clawed Frog",
  "African Forest Elephant",
  "African Palm Civet",
  "African Penguin",
  "African Tree Toad",
  "African Wild Dog",
  "Ainu Dog",
  "Airedale Terrier",
  "Akbash",
  "Akita",
  "Alaskan Malamute",
  "Albatross",
  "Aldabra Giant Tortoise",
  "Alligator",
  "Alpine Dachsbracke",
  "American Bulldog",
  "American Cocker Spaniel",
  "American Coonhound",
  "American Eskimo Dog",
  "American Foxhound",
  "American Pit Bull Terrier",
  "American Staffordshire Terrier",
  "American Water Spaniel",
  "Amur Leopard",
  "Anatolian Shepherd Dog",
  "Angelfish",
  "Ant",
  "Anteater",
  "Antelope",
  "Appenzeller Dog",
  "Arctic Fox",
  "Arctic Hare",
  "Arctic Wolf",
  "Armadillo",
  "Asian Elephant",
  "Asian Giant Hornet",
  "Asian Palm Civet",
  "Asiatic Black Bear",
  "Australian Cattle Dog",
  "Australian Kelpie Dog",
  "Australian Mist",
  "Australian Shepherd",
  "Australian Terrier",
  "Avocet",
  "Axolotl",
  "Aye Aye",
  "Baboon",
  "Bactrian Camel",
  "Badger",
  "Balinese",
  "Banded Palm Civet",
  "Bandicoot",
  "Barb",
  "Barn Owl",
  "Barnacle",
  "Barracuda",
  "Basenji Dog",
  "Basking Shark",
  "Basset Hound",
  "Bat",
  "Bavarian Mountain Hound",
  "Beagle",
  "Bear",
  "Bearded Collie",
  "Bearded Dragon",
  "Beaver",
  "Bedlington Terrier",
  "Beetle",
  "Bengal Tiger",
  "Bernese Mountain Dog",
  "Bichon Frise",
  "Binturong",
  "Bird",
  "Birds Of Paradise",
  "Birman",
  "Bison",
  "Black Rhinoceros",
  "Black Russian Terrier",
  "Black Widow Spider",
  "Bloodhound",
  "Blue Lacy Dog",
  "Blue Whale",
  "Bluetick Coonhound",
  "Bobcat",
  "Bolognese Dog",
  "Bombay",
  "Bongo",
  "Bonobo",
  "Booby",
  "Border Collie",
  "Border Terrier",
  "Bornean Orang-utan",
  "Borneo Elephant",
  "Boston Terrier",
  "Bottlenose Dolphin",
  "Boxer Dog",
  "Boykin Spaniel",
  "Brazilian Terrier",
  "Brown Bear",
  "Budgerigar",
  "Buffalo",
  "Bull Mastiff",
  "Bull Shark",
  "Bull Terrier",
  "Bulldog",
  "Bullfrog",
  "Bumble Bee",
  "Burmese",
  "Burrowing Frog",
  "Butterfly",
  "Butterfly Fish",
  "Caiman",
  "Caiman Lizard",
  "Cairn Terrier",
  "Camel",
  "Canaan Dog",
  "Capybara",
  "Caracal",
  "Carolina Dog",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Catfish",
  "Cavalier King Charles Spaniel",
  "Centipede",
  "Cesky Fousek",
  "Chameleon",
  "Chamois",
  "Cheetah",
  "Chesapeake Bay Retriever",
  "Chicken",
  "Chihuahua",
  "Chimpanzee",
  "Chinchilla",
  "Chinese Crested Dog",
  "Chinook",
  "Chinstrap Penguin",
  "Chipmunk",
  "Chow Chow",
  "Cichlid",
  "Clouded Leopard",
  "Clown Fish",
  "Clumber Spaniel",
  "Coati",
  "Cockroach",
  "Collared Peccary",
  "Collie",
  "Common Buzzard",
  "Common Frog",
  "Common Loon",
  "Common Toad",
  "Coral",
  "Cottontop Tamarin",
  "Cougar",
  "Cow",
  "Coyote",
  "Crab",
  "Crab-Eating Macaque",
  "Crane",
  "Crested Penguin",
  "Crocodile",
  "Cross River Gorilla",
  "Curly Coated Retriever",
  "Cuscus",
  "Cuttlefish",
  "Dachshund",
  "Dalmatian",
  "Darwins Frog",
  "Deer",
  "Desert Tortoise",
  "Deutsche Bracke",
  "Dhole",
  "Dingo",
  "Discus",
  "Doberman Pinscher",
  "Dodo",
  "Dog",
  "Dogo Argentino",
  "Dogue De Bordeaux",
  "Dolphin",
  "Donkey",
  "Dormouse",
  "Dragonfly",
  "Drever",
  "Duck",
  "Dugong",
  "Dunker",
  "Dusky Dolphin",
  "Dwarf Crocodile",
  "Eagle",
  "Earwig",
  "Eastern Gorilla",
  "Eastern Lowland Gorilla",
  "Echidna",
  "Edible Frog",
  "Egyptian Mau",
  "Electric Eel",
  "Elephant",
  "Elephant Seal",
  "Elephant Shrew",
  "Emperor Penguin",
  "Emperor Tamarin",
  "Emu",
  "English Cocker Spaniel",
  "English Shepherd",
  "English Springer Spaniel",
  "Entlebucher Mountain Dog",
  "Epagneul Pont Audemer",
  "Eskimo Dog",
  "Estrela Mountain Dog",
  "Falcon",
  "Fennec Fox",
  "Ferret",
  "Field Spaniel",
  "Fin Whale",
  "Finnish Spitz",
  "Fire-Bellied Toad",
  "Fish",
  "Fishing Cat",
  "Flamingo",
  "Flat Coat Retriever",
  "Flounder",
  "Fly",
  "Flying Squirrel",
  "Fossa",
  "Fox",
  "Fox Terrier",
  "French Bulldog",
  "Frigatebird",
  "Frilled Lizard",
  "Frog",
  "Fur Seal",
  "Galapagos Penguin",
  "Galapagos Tortoise",
  "Gar",
  "Gecko",
  "Gentoo Penguin",
  "Geoffroys Tamarin",
  "Gerbil",
  "German Pinscher",
  "German Shepherd",
  "Gharial",
  "Giant African Land Snail",
  "Giant Clam",
  "Giant Panda Bear",
  "Giant Schnauzer",
  "Gibbon",
  "Gila Monster",
  "Giraffe",
  "Glass Lizard",
  "Glow Worm",
  "Goat",
  "Golden Lion Tamarin",
  "Golden Oriole",
  "Golden Retriever",
  "Goose",
  "Gopher",
  "Gorilla",
  "Grasshopper",
  "Great Dane",
  "Great White Shark",
  "Greater Swiss Mountain Dog",
  "Green Bee-Eater",
  "Greenland Dog",
  "Grey Mouse Lemur",
  "Grey Reef Shark",
  "Grey Seal",
  "Greyhound",
  "Grizzly Bear",
  "Grouse",
  "Guinea Fowl",
  "Guinea Pig",
  "Guppy",
  "Hammerhead Shark",
  "Hamster",
  "Hare",
  "Harrier",
  "Havanese",
  "Hawaiian Crow",
  "Hedgehog",
  "Hercules Beetle",
  "Hermit Crab",
  "Heron",
  "Highland Cattle",
  "Himalayan",
  "Hippopotamus",
  "Honey Bee",
  "Horn Shark",
  "Horned Frog",
  "Horse",
  "Horseshoe Crab",
  "Howler Monkey",
  "Human",
  "Humboldt Penguin",
  "Hummingbird",
  "Humpback Whale",
  "Hyena",
  "Ibis",
  "Ibizan Hound",
  "Iguana",
  "Impala",
  "Indian Elephant",
  "Indian Palm Squirrel",
  "Indian Rhinoceros",
  "Indian Star Tortoise",
  "Indochinese Tiger",
  "Indri",
  "Insect",
  "Irish Setter",
  "Irish WolfHound",
  "Jack Russel",
  "Jackal",
  "Jaguar",
  "Japanese Chin",
  "Japanese Macaque",
  "Javan Rhinoceros",
  "Javanese",
  "Jellyfish",
  "Kakapo",
  "Kangaroo",
  "Keel Billed Toucan",
  "Killer Whale",
  "King Crab",
  "King Penguin",
  "Kingfisher",
  "Kiwi",
  "Koala",
  "Komodo Dragon",
  "Kudu",
  "Labradoodle",
  "Labrador Retriever",
  "Ladybug",
  "Leaf-Tailed Gecko",
  "Lemming",
  "Lemur",
  "Leopard",
  "Leopard Cat",
  "Leopard Seal",
  "Leopard Tortoise",
  "Liger",
  "Lion",
  "Lionfish",
  "Little Penguin",
  "Lizard",
  "Llama",
  "Lobster",
  "Long-Eared Owl",
  "Lynx",
  "Macaroni Penguin",
  "Macaw",
  "Magellanic Penguin",
  "Magpie",
  "Maine Coon",
  "Malayan Civet",
  "Malayan Tiger",
  "Maltese",
  "Manatee",
  "Mandrill",
  "Manta Ray",
  "Marine Toad",
  "Markhor",
  "Marsh Frog",
  "Masked Palm Civet",
  "Mastiff",
  "Mayfly",
  "Meerkat",
  "Millipede",
  "Minke Whale",
  "Mole",
  "Molly",
  "Mongoose",
  "Mongrel",
  "Monitor Lizard",
  "Monkey",
  "Monte Iberia Eleuth",
  "Moorhen",
  "Moose",
  "Moray Eel",
  "Moth",
  "Mountain Gorilla",
  "Mountain Lion",
  "Mouse",
  "Mule",
  "Neanderthal",
  "Neapolitan Mastiff",
  "Newfoundland",
  "Newt",
  "Nightingale",
  "Norfolk Terrier",
  "North American Black Bear",
  "Norwegian Forest",
  "Numbat",
  "Nurse Shark",
  "Ocelot",
  "Octopus",
  "Okapi",
  "Old English Sheepdog",
  "Old English Sheepdog",
  "Olm",
  "Opossum",
  "Orang-utan",
  "Ostrich",
  "Otter",
  "Oyster",
  "Pademelon",
  "Panther",
  "Parrot",
  "Patas Monkey",
  "Peacock",
  "Pekingese",
  "Pelican",
  "Penguin",
  "Pere Davids Deer",
  "Persian",
  "Pheasant",
  "Pied Tamarin",
  "Pig",
  "Pika",
  "Pike",
  "Pink Fairy Armadillo",
  "Piranha",
  "Platypus",
  "Pointer",
  "Poison Dart Frog",
  "Polar Bear",
  "Pond Skater",
  "Poodle",
  "Pool Frog",
  "Porcupine",
  "Possum",
  "Prawn",
  "Proboscis Monkey",
  "Puffer Fish",
  "Puffin",
  "Pug",
  "Puma",
  "Purple Emperor",
  "Puss Moth",
  "Pygmy Hippopotamus",
  "Pygmy Marmoset",
  "Quail",
  "Quetzal",
  "Quokka",
  "Quoll",
  "Rabbit",
  "Raccoon",
  "Raccoon Dog",
  "Radiated Tortoise",
  "Ragdoll",
  "Rat",
  "Rattlesnake",
  "Red Knee Tarantula",
  "Red Panda",
  "Red Wolf",
  "Red-handed Tamarin",
  "Reindeer",
  "Rhinoceros",
  "River Dolphin",
  "River Turtle",
  "Robin",
  "Rock Hyrax",
  "Rockhopper Penguin",
  "Roseate Spoonbill",
  "Rottweiler",
  "Royal Penguin",
  "Russian Blue",
  "Sabre-Toothed Tiger",
  "Saint Bernard",
  "Salamander",
  "Sand Lizard",
  "Saola",
  "Scimitar-horned Oryx",
  "Scorpion",
  "Scorpion Fish",
  "Sea Dragon",
  "Sea Lion",
  "Sea Otter",
  "Sea Slug",
  "Sea Squirt",
  "Sea Turtle",
  "Sea Urchin",
  "Seahorse",
  "Seal",
  "Serval",
  "Sheep",
  "Shih Tzu",
  "Shrimp",
  "Siamese",
  "Siamese Fighting Fish",
  "Siberian",
  "Siberian Husky",
  "Siberian Tiger",
  "Silver Dollar",
  "Skunk",
  "Sloth",
  "Slow Worm",
  "Snail",
  "Snake",
  "Snapping Turtle",
  "Snowshoe",
  "Snowy Owl",
  "Somali",
  "South China Tiger",
  "Spadefoot Toad",
  "Sparrow",
  "Spectacled Bear",
  "Sperm Whale",
  "Spider Monkey",
  "Spiny Dogfish",
  "Spixs Macaw",
  "Sponge",
  "Squid",
  "Squirrel",
  "Squirrel Monkey",
  "Sri Lankan Elephant",
  "Staffordshire Bull Terrier",
  "Stag Beetle",
  "Starfish",
  "Stellers Sea Cow",
  "Stick Insect",
  "Stingray",
  "Stoat",
  "Striped Rocket Frog",
  "Sumatran Elephant",
  "Sumatran Orang-utan",
  "Sumatran Rhinoceros",
  "Sumatran Tiger",
  "Sun Bear",
  "Swan",
  "Tang",
  "Tapanuli Orang-utan",
  "Tapir",
  "Tarsier",
  "Tasmanian Devil",
  "Tawny Owl",
  "Termite",
  "Tetra",
  "Thorny Devil",
  "Tibetan Mastiff",
  "Tiffany",
  "Tiger",
  "Tiger Salamander",
  "Tiger Shark",
  "Tortoise",
  "Toucan",
  "Tree Frog",
  "Tropicbird",
  "Tuatara",
  "Turkey",
  "Turkish Angora",
  "Uakari",
  "Uguisu",
  "Umbrellabird",
  "Vampire Bat",
  "Vervet Monkey",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Warthog",
  "Wasp",
  "Water Buffalo",
  "Water Dragon",
  "Water Vole",
  "Weasel",
  "Welsh Corgi",
  "West Highland Terrier",
  "Western Gorilla",
  "Western Lowland Gorilla",
  "Whale Shark",
  "Whippet",
  "White Faced Capuchin",
  "White Rhinoceros",
  "White Tiger",
  "Wild Boar",
  "Wildebeest",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodlouse",
  "Woodpecker",
  "Woolly Mammoth",
  "Woolly Monkey",
  "Wrasse",
  "Wyoming Toad",
  "X-Ray Tetra",
  "Yak",
  "Yellow-Eyed Penguin",
  "Yorkshire Terrier",
  "Zebra",
  "Zebra Shark",
  "Zebu",
  "Zonkey",
  "Zorse",
];

module.exports = animals;
