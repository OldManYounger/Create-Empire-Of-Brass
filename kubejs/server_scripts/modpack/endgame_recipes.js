// Placeholder endgame recipes
ServerEvents.recipes(event => {
    // Placeholder endgame item #1
    event.custom({
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        key: {
            T: {
                item: "create:railway_casing"
            },
            B: {
                item: "create:brass_sheet"
            },
            S: {
                item: "create:sturdy_sheet"
            },
            C: {
                item: "create:precision_mechanism"
            },
            M: {
                item: "create:mechanical_mixer"
            },
            O: {
                item: "create:spout"
            },
            R: {
                item: "create:mechanical_press"
            },
            D: {
                item: "create:deployer"
            }
        },
        pattern: [
            " TTTTT ",
            "TTSBSTT",
            "TSBMBST",
            "TBDCOBT",
            "TSBRBST",
            "TTSBSTT",
            " TTTTT "
        ],
        result: {
            count: 1,
            id: "kubejs:create_endgame_item_1"
        },
        show_notification: false
    }).id("kubejs:mechanical_crafting/create_endgame_item_1")

    event.custom({
        // Placeholder endgame item #2
        type: "create:mechanical_crafting",
        accept_mirrored: false,
        category: "misc",
        key: {
            T: {
                item: "createcasing:creative_casing"
            },
            B: {
                item: "create_new_age:overcharged_iron_sheet"
            },
            S: {
                item: "create_things_and_misc:rose_quartz_sheet"
            },
            C: {
                item: "createteleporters:quantum_mechanism"
            },
            M: {
                item: "createthrusters:advanced_navigation_table"
            },
            O: {
                item: "create_optical:hologram_source"
            },
            R: {
                item: "createaddition:tesla_coil"
            },
            D: {
                item: "createdieselgenerators:chemical_turret"
            }
        },
        pattern: [
            " TTTTT ",
            "TTSBSTT",
            "TSBMBST",
            "TBDCOBT",
            "TSBRBST",
            "TTSBSTT",
            " TTTTT "
        ],
        result: {
            count: 1,
            id: "kubejs:create_endgame_item_2"
        },
        show_notification: false
    }).id("kubejs:mechanical_crafting/create_endgame_item_2")
})