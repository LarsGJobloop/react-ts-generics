/**
 * This is not complete
 */
export type PokemonData = {
  "abilities":
    {
      "ability": {
        "name": string,
        "url": string
      },
      "is_hidden": boolean,
      "slot": number
    }[],
  "base_experience": number,
  "forms": [
    { "name": string, "url": string }
  ],
  "height": number,
  "id": number,
  "is_default": boolean,
  "location_area_encounters": string,
  "name": string,
  "order": number,
  "past_types": unknown[],
  "species": {
    "name": string,
    "url": string
  },
  "sprites": {
    "back_default": string,
    "back_shiny": string,
    "front_default": string,
    "front_shiny": string,
  },
  "stats": {
      "base_stat": number,
      "effort": number,
      "stat": { "name": string, "url": string }
    }[],
  "types": [
    {
      "slot": number,
      "type": { "name": string, "url": string }
    }
  ],
  "weight": number
}
