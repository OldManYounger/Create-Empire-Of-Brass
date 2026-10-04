// Remove invalid Integrated Dungeons and Structures byg tags
ServerEvents.tags('worldgen/biome', event => {
  // BYG biomes
  event.remove('idas:has_structure/byg_redwood_biomes', 'byg:redwood_thicket')
  event.remove('idas:has_structure/bygmohogany_biomes', 'byg:tropical_rainforest')

  // BOP biomes
  event.remove('idas:has_structure/bopmohogany_biomes', 'biomesoplenty:rainforest')
  event.remove('idas:has_structure/bopredwood_biomes', 'biomesoplenty:redwood_forest')
})