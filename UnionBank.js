import React from 'react'
import AndhraBank from './components/AndhraBank'
import CorporationBank from './components/CorporationBank'

export default function() {
    return (
        <div>
            <h1>Union Bank</h1>
            <AndhraBank location="Nellore"/>
            <CorporationBank location="Tirupathi"/>
        </div>
    )
}
