import '@/global.css'
import React from 'react'
import { Link } from 'umi'
export default (props: React.ComponentProps<any>) => {
    return (
        <section>
            <h1>Leaflet Map page</h1>
            <Link to="/map">map</Link>
        </section>
    )
}
