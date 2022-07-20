import { GeoDataWrapper, MapLayer } from '@nec-disaster/dis-leaflet'
// import { getDistrict } from '@/model/geodata'

// export const getHazardAreaSimulationData = () => {
//     return GeoDataUtils.map([river], (feature) => {
//         return {
//             ...feature,
//             properties: {...feature.properties, uniKey: uuid() }
//         }
//     })
// }
export const DEFAULT_BASE_LAYERS: MapLayer[] = [
    {
        name: '淡色地図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        selected: false,
        zoomLevel: {
            max: 18,
            min: 5,
        },
    },
    {
        name: '標準地図',
        url: 'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        selected: false,
        zoomLevel: {
            max: 18,
            min: 5,
        },
    },
    {
        name: '白地図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
        selected: false,
        zoomLevel: {
            max: 18,
            min: 5,
        },
    },
    {
        name: 'OpenStreetMap',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        selected: true,
    },
    {
        name: '空中写真',
        url:
            'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        selected: false,
    },
]

export const getOverlays: () => GeoDataWrapper[] = () => [
    {
        groupId: 'editable',
        groupName: '編集レイヤー',
        geoDataId: 'editable1',
        geoDataName: '新規レイヤー1',
        selected: false,
        editable: true,
        data: [],
        featureIdKey: 'uniKey',
    },
    {
        groupId: 'districts',
        groupName: '区市町村',
        geoDataId: 'yokohama',
        geoDataName: '横浜市',
        selected: false,
        editable: false,
        data: [],
        featureIdKey: 'KEY_CODE',
    },
    {
        groupId: 'districts',
        groupName: '区市町村',
        geoDataId: 'kawasaki',
        geoDataName: '川崎市',
        selected: false,
        editable: false,
        data: [],
        featureIdKey: 'KEY_CODE',
    },
    {
        groupId: 'simulations',
        groupName: '各種予測（シミュレーション）',
        geoDataId: 'hazardAreaSimulation',
        geoDataName: '氾濫エリア予測',
        selected: false,
        editable: false,
        featureIdKey: 'uniKey',
        // @ts-ignore
        data: [],
    },
]

export const getHazardMap: () => GeoDataWrapper[] = () => [
    {
        groupId: 'districts',
        groupName: '区市町村',
        geoDataId: 'yokohama',
        geoDataName: '横浜市',
        selected: false,
        editable: false,
        featureIdKey: 'KEY_CODE',
    },
    {
        groupId: 'districts',
        groupName: '区市町村',
        geoDataId: 'kawasaki',
        geoDataName: '川崎市',
        selected: false,
        editable: false,
        featureIdKey: 'KEY_CODE',
    },
    {
        groupId: 'simulations',
        groupName: '各種予測（シミュレーション）',
        geoDataId: 'hazardAreaSimulation',
        geoDataName: '氾濫エリア予測',
        selected: false,
        editable: true,
        featureIdKey: 'uniKey',
    },
]
