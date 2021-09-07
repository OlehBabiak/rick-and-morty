export const endPoints = {
    CHARACTERS: 'character',
    EPISODES: 'episode',
    LOCATIONS: 'location',
}

export const status = ['', 'alive', 'dead', 'unknown']
export const gender = ['', 'female', 'male', 'genderless', 'unknown']
export const species = ['', 'human', 'alien', 'mytholog', 'Animal', 'Cronenberg', 'Humanoid', 'Disease', 'Robot', 'unknown', 'Poopybutthole']


export const urls = [
    {url: '/' , title: "HOME"},
    {url: "/character" , title: "CHARACTERS"},
    {url: "/episode" , title: "EPISODES"},
    {url: "/location" , title: "LOCATIONS"},
    {url: "/watch_list" , title: "WHATCH LIST"},
]

export const url ={
    api: 'https://rickandmortyapi.com/api'
}
