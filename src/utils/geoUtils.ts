import { cloneDeep } from 'lodash'
import * as tjson from 'topojson-client'
import { v4 } from 'uuid'

export function topo2geoJSON(data: any, keyObject = '', uniKey = 'uniKey') {
    const geojsonProperties = !!keyObject
        ? data.objects[keyObject]
        : data.objects[Object.keys(data.objects)[0]]

    //@ts-ignore
    const geojson = tjson.feature(
        data,
        geojsonProperties,
    ) as GeoJSON.FeatureCollection
    geojson.features = geojson.features.map((feat) => {
        const fm = cloneDeep(feat)
        if (!fm.properties) {
            fm.properties = {} as GeoJSON.GeoJsonProperties
        }
        fm.properties!.uniKey = feat.properties![uniKey] || v4()
        return fm
    })
    return geojson.features
}
