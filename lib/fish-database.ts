export interface Fish {
    id: string
    level: number
    name: string
    location: string
    type: string
    shadow: string
    weather: string
    time: string
    stars: {
        [key: number]: number | string
    }
    note?: string
}

export const fishDatabase: Fish[] = [
    // Level 1 Fishing
    { id: "beltfish", level: 1, name: "Beltfish", location: "Zephyr Sea", type: "Sea", shadow: "Large", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 105, 2: 157, 3: 210, 4: "N/A", 5: "N/A" } },
    { id: "common_barbel", level: 1, name: "Common Barbel", location: "Shallow River", type: "River", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 75, 2: 112, 3: 150, 4: "N/A", 5: "N/A" } },
    { id: "common_bleak", level: 1, name: "Common Bleak", location: "Any Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "common_chub", level: 1, name: "Common Chub", location: "Any Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 75, 2: 112, 3: 150, 4: "N/A", 5: "N/A" } },
    { id: "common_shrimp", level: 1, name: "Common Shrimp", location: "East Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "common_whitefish", level: 1, name: "Common Whitefish", location: "Onsen Mountain Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 105, 2: 157, 3: 210, 4: "N/A", 5: "N/A" } },
    { id: "crucian_carp", level: 1, name: "Crucian Carp", location: "Suburban Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 75, 2: 112, 3: 150, 4: "N/A", 5: "N/A" } },
    { id: "european_perch", level: 1, name: "European Perch", location: "Any River", type: "River", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 75, 2: 112, 3: 150, 4: "N/A", 5: "N/A" } },
    { id: "european_smelt", level: 1, name: "European Smelt", location: "Meadow Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "horse_mackerel", level: 1, name: "Horse Mackerel", location: "Whale Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "minnow", level: 1, name: "Minnow", location: "Tranquil River", type: "River", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "oriental_shrimp", level: 1, name: "Oriental Shrimp", location: "Any River", type: "River", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "sardine", level: 1, name: "Sardine", location: "Ocean (Any Sea)", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "schneider", level: 1, name: "Schneider", location: "Suburban Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "sea_bass", level: 1, name: "Sea Bass", location: "Ocean (Any Sea)", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 75, 2: 112, 3: 150, 4: "N/A", 5: "N/A" } },
    { id: "sea_stickleback", level: 1, name: "Sea Stickleback", location: "Old Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "seahorse", level: 1, name: "Seahorse", location: "Whale Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "skipjack_tuna", level: 1, name: "Skipjack Tuna", location: "Ocean (Any Sea)", type: "Sea", shadow: "Large", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 210, 2: 315, 3: 420, 4: 840, 5: "N/A" } },
    { id: "spined_loach", level: 1, name: "Spined Loach", location: "Giantwood River", type: "River", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },
    { id: "striped_red_mullet", level: 1, name: "Striped Red Mullet", location: "Sea Fishing Event", type: "Sea", shadow: "Medium (Golden)", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },
    { id: "tench", level: 1, name: "Tench", location: "Forest Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 50, 2: 75, 3: 100, 4: 200, 5: 400 } },

    // Level 2 Fishing
    { id: "anglerfish", level: 2, name: "Anglerfish", location: "Sea Fishing", type: "Sea", shadow: "Large (Golden)", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },
    { id: "atlantic_pygmy_octopus", level: 2, name: "Atlantic Pygmy Octopus", location: "Zephyr Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "common_octopus", level: 2, name: "Common Octopus", location: "Sea Fishing", type: "Sea", shadow: "Medium (Golden)", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },
    { id: "false_scad", level: 2, name: "False Scad", location: "Zephyr Sea", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 155, 2: 232, 3: 310, 4: 620, 5: "N/A" } },
    { id: "largemouth_bass", level: 2, name: "Largemouth Bass", location: "Forest Lake", type: "Lake", shadow: "Medium", weather: "☀️🌈", time: "🌙🌅☀️🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "stone_loach", level: 2, name: "Stone Loach", location: "Suburban Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },

    // Level 3 Fishing
    { id: "atlantic_salmon", level: 3, name: "Atlantic Salmon", location: "Whale Sea", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙☀️🌇", stars: { 1: 155, 2: 232, 3: 310, 4: 620, 5: "N/A" } },
    { id: "clownfish", level: 3, name: "Clownfish", location: "Old Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" }, note: "Possible but rare until level 5" },
    { id: "edible_frog", level: 3, name: "Edible Frog", location: "Any Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" }, note: "Mermaid Attractor Required" },
    { id: "hermit_crab", level: 3, name: "Hermit Crab", location: "East Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "mud_sunfish", level: 3, name: "Mud Sunfish", location: "Forest Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "ruffe", level: 3, name: "Ruffe", location: "Onsen Mountain Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "tadpole", level: 3, name: "Tadpole", location: "Onsen Mountain Lake", type: "Lake", shadow: "Small", weather: "🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "tilapia", level: 3, name: "Tilapia", location: "Any River", type: "River", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" }, note: "Mermaid Attractor Required" },

    // Level 4 Fishing
    { id: "burbot", level: 4, name: "Burbot", location: "Tranquil River", type: "River", shadow: "Large", weather: "☀️🌧️🌈", time: "☀️🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "butterfly_koi", level: 4, name: "Butterfly Koi", location: "Meadow Lake", type: "Lake", shadow: "Large", weather: "🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },
    { id: "common_carp", level: 4, name: "Common Carp", location: "Rosy River", type: "River", shadow: "Medium", weather: "☀️🌈", time: "☀️🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "european_plaice", level: 4, name: "European Plaice", location: "Old Sea", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌇🌙🌅", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "goby", level: 4, name: "Goby", location: "East Sea", type: "Sea", shadow: "Small", weather: "☀️🌧️🌈", time: "🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "rabbit_fish", level: 4, name: "Rabbit Fish", location: "Ocean", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" }, note: "Mermaid Attractor Recommended" },
    { id: "red_bellied_piranha", level: 4, name: "Red-Bellied Piranha", location: "Giantwood River", type: "River", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "river_crab", level: 4, name: "River Crab", location: "Suburban Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 100, 2: 150, 3: 200, 4: "N/A", 5: "N/A" } },
    { id: "turbot", level: 4, name: "Turbot", location: "Sea Fishing", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },

    // Level 5 Fishing
    { id: "atlantic_mackerel", level: 5, name: "Atlantic Mackerel", location: "Whale Sea", type: "Sea", shadow: "Small", weather: "🌈☀️", time: "☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "common_rudd", level: 5, name: "Common Rudd", location: "Suburban Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "european_flying_squid", level: 5, name: "European Flying Squid", location: "Sea Fishing", type: "Sea", shadow: "Golden", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 320, 2: 480, 3: 640, 4: 1280, 5: "N/A" } },
    { id: "european_lobster", level: 5, name: "European Lobster", location: "Zephyr Sea", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌇🌙", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "freshwater_blenny", level: 5, name: "Freshwater Blenny", location: "Rosy River", type: "River", shadow: "Small", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "trout", level: 5, name: "Trout", location: "Meadow Lake", type: "Lake", shadow: "Medium", weather: "☀️🌈", time: "🌇🌙🌅", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },

    // Level 6 Fishing
    { id: "chum_salmon", level: 6, name: "Chum Salmon", location: "Tranquil River", type: "River", shadow: "Medium", weather: "🌈", time: "All Day", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "grayling", level: 6, name: "Grayling", location: "Suburban Lake", type: "Lake", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "large_pearl_mussel", level: 6, name: "Large Pearl Mussel", location: "Forest Lake", type: "Lake", shadow: "Medium", weather: "🌈", time: "All Day", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "nursehound", level: 6, name: "Nursehound", location: "Sea Fishing", type: "Sea", shadow: "Large", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 535, 2: 802, 3: 1070, 4: 2140, 5: 4280 } },
    { id: "puffer_fish", level: 6, name: "Puffer Fish", location: "Old Sea", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "tub_gurnard", level: 6, name: "Tub Gurnard", location: "East Sea", type: "Sea", shadow: "Medium", weather: "🌈", time: "🌙🌅☀️🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },

    // Level 7 Fishing
    { id: "blackspot_seabream", level: 7, name: "Blackspot Seabream", location: "Zephyr Sea", type: "Sea", shadow: "Medium", weather: "🌧️🌈", time: "🌙🌇", stars: { 1: 230, 2: 345, 3: 460, 4: "N/A", 5: "N/A" } },
    { id: "european_eel", level: 7, name: "European Eel", location: "Old Sea", type: "Sea", shadow: "Medium", weather: "🌈", time: "🌅☀️🌇", stars: { 1: 380, 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "giant_oarfish", level: 7, name: "Giant Oarfish", location: "Sea Fishing", type: "Sea", shadow: "Huge", weather: "☀️🌧️🌈", time: "🌅☀️", stars: { 1: 535, 2: 802, 3: 1070, 4: 2140, 5: 4280 } },
    { id: "mediterranean_killifish", level: 7, name: "Mediterranean Killifish", location: "Suburban Lake", type: "Lake", shadow: "Small", weather: "☀️🌈", time: "☀️🌇🌙", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "mottled_sculpin", level: 7, name: "Mottled Sculpin", location: "Onsen Mountain Lake", type: "Lake", shadow: "Small", weather: "🌧️🌈", time: "🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },
    { id: "three_spined_stickleback", level: 7, name: "Three-Spined Stickleback", location: "Shallow River", type: "River", shadow: "Small", weather: "🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 150, 2: 225, 3: 300, 4: 600, 5: "N/A" } },

    // Level 8 Fishing
    { id: "blue_ero_crayfish", level: 8, name: "Blue Ero Crayfish", location: "Forest Lake", type: "Lake", shadow: "Small", weather: "☀️🌧️🌈", time: "🌇🌙", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "european_mudminnow", level: 8, name: "European Mudminnow", location: "Suburban Lake", type: "Lake", shadow: "Small", weather: "☀️🌈", time: "🌙🌅", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "golden_king_crab", level: 8, name: "Golden King Crab", location: "Sea Fishing", type: "Sea", shadow: "Large", weather: "🌈", time: "🌙🌅☀️🌇", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "goldfish", level: 8, name: "Goldfish", location: "Meadow Lake", type: "Lake", shadow: "Small", weather: "🌧️🌈", time: "🌅☀️🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "haddock", level: 8, name: "Haddock", location: "East Sea", type: "Sea", shadow: "Medium", weather: "☀️🌈", time: "☀️🌇🌙", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },

    // Level 9 Fishing
    { id: "bluefin_tuna", level: 9, name: "Bluefin Tuna", location: "Deep Ocean", type: "Sea", shadow: "Large", weather: "🌈", time: "All Day", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "huchen", level: 9, name: "Huchen", location: "Giantwood River", type: "River", shadow: "Large", weather: "🌈", time: "🌙🌅☀️🌇", stars: { 1: "Rare", 2: 570, 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "moonfish", level: 9, name: "Moonfish", location: "Sea Fishing", type: "Sea", shadow: "Medium", weather: "☀️🌧️🌈", time: "🌙🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "northern_pike", level: 9, name: "Northern Pike", location: "Suburban Lake", type: "Lake", shadow: "Large", weather: "🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "ocean_sunfish", level: 9, name: "Ocean Sunfish", location: "East Sea", type: "Sea", shadow: "Huge", weather: "☀️🌧️🌈", time: "🌙🌅☀️🌇", stars: { 1: 850, 2: 1275, 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "pumpkinseed", level: 9, name: "Pumpkinseed", location: "Onsen Mountain Lake", type: "Lake", shadow: "Small", weather: "☀️🌈", time: "🌙🌅☀️🌇", stars: { 1: 250, 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },

    // Level 10 Fishing
    { id: "arctic_char", level: 10, name: "Arctic Char", location: "Forest Lake", type: "Lake", shadow: "Medium", weather: "🌧️🌈", time: "☀️🌇", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "bluegill", level: 10, name: "Bluegill", location: "Onsen Mountain Lake", type: "Lake", shadow: "Small", weather: "☀️🌈", time: "🌙🌇", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "king_crab", level: 10, name: "King Crab", location: "Whale Sea", type: "Sea", shadow: "Large", weather: "🌈", time: "All Day", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "seabream", level: 10, name: "Seabream", location: "Zephyr Sea", type: "Sea", shadow: "Medium", weather: "🌧️🌈", time: "🌇🌙", stars: { 1: "Rare", 2: "Rare", 3: "Rare", 4: "Rare", 5: "Rare" } },
    { id: "shortfin_mako_shark", level: 10, name: "Shortfin Mako Shark", location: "Deep Ocean", type: "Sea", shadow: "Huge", weather: "🌈", time: "All Day", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "smooth_hammerhead", level: 10, name: "Smooth Hammerhead", location: "Deep Ocean", type: "Sea", shadow: "Huge", weather: "🌈", time: "All Day", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "swordfish", level: 10, name: "Swordfish", location: "Deep Ocean", type: "Sea", shadow: "Huge", weather: "🌈", time: "All Day", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
    { id: "wels_catfish", level: 10, name: "Wels Catfish", location: "Meadow Lake", type: "Lake", shadow: "Large", weather: "☀️🌈", time: "🌙🌇", stars: { 1: "Legendary", 2: "Legendary", 3: "Legendary", 4: "Legendary", 5: "Legendary" } },
]

// Helper function to group fish by level
export function getFishByLevel(level: number) {
    return fishDatabase.filter(fish => fish.level === level)
}

// Helper function to get all levels
export function getAllLevels() {
    return [...new Set(fishDatabase.map(fish => fish.level))].sort((a, b) => a - b)
}
