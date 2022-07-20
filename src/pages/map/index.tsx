import '@/global.css'
import { topo2geoJSON } from '@/utils'
import { Button, Icon, Upload } from '@nec-disaster/dis-antd'
import {
    FeatureGroup,
    Map,
    useGeoData,
    useMap,
} from '@nec-disaster/dis-leaflet'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet/dist/leaflet.css'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { DEFAULT_BASE_LAYERS, getOverlays } from './services/data'

export default (props: React.ComponentProps<any>) => {
    const {
        mapState: {
            center,
            zoom,
            zoomControlSize,
            baseLayers,
            fitBoundFeatures,
        },
        resetView,
        changeZoom,
        changeBaseLayer,
        changeZoomControlSize,
    } = useMap({
        center: [139.638, 35.4437],
        zoom: 10,
        zoomControlSize: 'standard',
        baseLayers: DEFAULT_BASE_LAYERS,
    })

    const { geoData: overlays, changeOverlay, editGeoDataWrapper } = useGeoData(
        getOverlays(),
    )

    const featureGroups = useMemo(() => {
        return overlays.map((t) => {
            console.log(t)
            return (
                <FeatureGroup
                    key={t.geoDataId}
                    dataSource={t}
                    uninteractable={t.uninteractable}
                    onChange={() => {}}
                    onFeatureMouseOver={() => {}}
                    onFeatureMouseOut={() => {}}
                    onFeatureSelect={() => {}}
                    onFeatureDeselect={() => {}}
                />
            )
        })
    }, [overlays])

    const MapComponent = useMemo(() => {
        return (
            <div style={{ width: '100%', height: '1200px' }}>
                <Map
                    overlays={overlays}
                    baseLayers={baseLayers}
                    center={center}
                    zoom={{ level: zoom, size: zoomControlSize }}
                    onBaseLayerChange={changeBaseLayer}
                    onZoomChange={changeZoom}
                >
                    {featureGroups}
                </Map>
            </div>
        )
    }, [
        changeZoom,
        changeBaseLayer,
        center,
        baseLayers,
        zoom,
        zoomControlSize,
        featureGroups,
    ])

    const [geoData, setGeoData] = useState<any>()

    const geoDataUploadProps = {
        name: 'geodata',
        beforeUpload: () => {
            return false
        },

        onChange: (info: any) => {
            console.log(info)
            const { file } = info
            const reader = new FileReader()
            reader.onloadend = () => {
                setGeoData(JSON.parse(String(reader.result)))
            }
            reader.readAsText(file)
        },
    }

    useEffect(() => {
        if (!geoData) return
        const toGeoData = (obj: any) => {
            if ('gisdata' in obj) {
                if (obj['gisdata'].data.type === 'Topology') {
                    const rst = topo2geoJSON(
                        obj.gisdata.data,
                        obj.gisdata.keyObject,
                        obj.gisdata.uniqueKey,
                    )
                    return rst
                }
                return obj.gisdata
            }
            if (obj.type === 'Topology') {
                return topo2geoJSON(obj)
            } else {
                return obj
            }
        }
        editGeoDataWrapper({
            add: [
                {
                    groupId: 'geodata',
                    groupName: 'グループ',
                    geoDataId: 'geodata',
                    geoDataName: 'geodata',
                    selected: true,
                    editable: false,
                    data: toGeoData(geoData),
                    featureIdKey: 'uniKey',
                },
            ],
        })
    }, [geoData])

    console.log('render map page')
    return (
        <Fragment>
            <h1>Map page</h1>
            <Upload {...geoDataUploadProps}>
                <Button>
                    <Icon type="upload" /> GeoDataアップロード
                </Button>
            </Upload>
            {MapComponent}
        </Fragment>
    )
}
