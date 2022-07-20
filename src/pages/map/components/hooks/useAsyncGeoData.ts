import { GeoData, GeoDataWrapper } from '@nec-disaster/dis-leaflet'
import { useEffect, useState } from 'react'

export type GeoDataFetcher = () => Promise<GeoData>

export const useAsyncGeoData = (
    overlay: GeoDataWrapper,
    fetcher: GeoDataFetcher,
) => {
    const [geoData, setGeoData] = useState<GeoData | undefined>(overlay.data)
    useEffect(() => {
        ;(async () => {
            const data = await fetcher()
            setGeoData(data)
        })()
    }, [fetcher])

    return {
        ...overlay,
        data: geoData,
    }
}
