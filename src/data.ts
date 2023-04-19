import arshamomaque_cover from './assets/img/arshamomaque_cover.jpg'
import downs_farm_cover from './assets/img/downs_farm_cover.jpg'
import { Panorama, Location, LocationContent } from './types'
import arshamomaque_trailmap from './assets/img/arshamomaque_trailmap.png'
import downs_farm_trailmap from './assets/img/downs_farm_trailmap.png'

export const start: Panorama = {
    name: "start",
    panoramaURL: "src/assets/panoramas/GS__0164_04-07-2023_19_38_42.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 0,
            type: 'info',
            text: 'test',
        },
        {
            pitch: 200,
            yaw: 0,
            type: 'info',
            text: 'test'
        }
    ],
    location: "absolute z-20 left-[49%] top-[34%] w-[3%]"
}

export const pond: Panorama = {
    name: "pond",
    panoramaURL: "src/assets/panoramas/GS__0165_04-07-2023_19_36_21.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 100,
            type: 'info',
            text: 'test',
        }
    ],
    location: "absolute z-20 left-[25%] top-[53%] w-[3%]"
}

export const obs_tower: Panorama = {
    name: "observation tower",
    panoramaURL: "src/assets/panoramas/GS__0166_04-07-2023_19_35_32.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 200,
            type: 'info',
            text: 'test',
        }
    ],
    location: "absolute z-20 left-[39%] top-[89%] w-[3%]"
}

export const vernal_pool: Panorama = {
    name: "vernal pools",
    panoramaURL: "src/assets/panoramas/GS__0167_04-07-2023_19_34_37.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 300,
            type: 'info',
            text: 'test',
        }
    ],
    location: "absolute z-20 left-[35%] top-[54%] w-[3%]"
}

export const obs_tower2: Panorama = {
    name: "observation tower 2",
    panoramaURL: "src/assets/panoramas/GS__0168_04-07-2023_19_33_52.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 0,
            type: 'info',
            text: 'text'
        }
    ],
    location: ""
}

export const forest: Panorama = {
    name: "forest",
    panoramaURL: "src/assets/panoramas/GS__0171_04-07-2023_19_31_31.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 0,
            type: 'info',
            text: 'text'
        }
    ],
    location: ""
}

export const meadow: Panorama = {
    name: "meadow",
    panoramaURL: "src/assets/panoramas/GS__0169_04-07-2023_19_32_57.jpeg",
    hotspots: [
        {
            pitch: 0,
            yaw: 0,
            type: 'info',
            text: 'text'
        }
    ],
    location: ""
}

export const Arshamomaque_Preserve: LocationContent = {
    id: Location.Arshamomaque_Preserve,
    title: "Welcome to Arshamomaque Preserve",
    body: "placeholder",
    pic: arshamomaque_cover,
    location: "absolute top-[17%] left-[73.5%] w-[5%] h-[5%]",
    trailMap: arshamomaque_trailmap
}

export const DownsFarm_Preserve: LocationContent = {
    id: Location.DownsFarm_Preserve,
    title: "Welcome to Downs Farm Preserve",
    body: "placeholder",
    pic: downs_farm_cover,
    location: "absolute top-[30%] left-[69%] w-[5%] h-[5%]",
    trailMap: downs_farm_trailmap
}