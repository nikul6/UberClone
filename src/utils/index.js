const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmlrdW5qOSIsImEiOiJjbDFxNDBqNnEwOHl5M2ZvM3FkdXY2b2ozIn0.eo0Z2na2wRJuzcZfB67yKw'

export const searchLocation = (query) => {
    return new Promise((resolve, reject) => {
        fetch(`http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(query.trim())}.json?access_token=${MAPBOX_ACCESS_TOKEN}`)
            .then(res => res.json())
            .then(data => {
                const address = []
                data.features.map(feature => {
                    address.push({
                        id: feature.id,
                        place_name: feature.place_name,
                        center: feature.center
                    })
                })
                resolve(address)
            })
            .catch(err => reject(err))
    })
}