/* Asynchronous */
const fetchPuzzle = async (wordCount)  => {
    const resp = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(resp.status === 200) {
        const data = await resp.json();
        return data.puzzle
    } else {
        throw new Error('unable to fetch data')
    }
}

/* synchronous */
/* const getPuzzleSync = () => {
    
    const request = new XMLHttpRequest()
    request.open('GET','http://puzzle.mead.io/puzzle?wordCount=1',false)
    request.send()

    if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
    } else if(request.readyState === 4) {
        throw new Error('Not working')
    }
} */

//Country
/* 
http://puzzle.mead.io/puzzle?wordCount=1 
iso 3166-2 india : will get the country code
*/

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await fetchCountry(location.country)
    return country
}

const fetchCountry = async (code) => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    if(resp.status === 200) {
        const data = await resp.json();
        return data.name
    } else {
        throw new error('unable to load data');
    }
}

/* const fetchCountryOld = (code) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new error('unable to load data');
        }
    }).then((data) => data.name
    //const country = data.find((country) => country.alpha2Code === countryCode)
    )
} */

const getLocation = async () => {
    const resp = await fetch(`http://ipinfo.io/json?token=c2b7610317a6f1`);
    if(resp.status === 200) {
        const data = await resp.json();
        return data;
    } else {
        throw new error('unable to load data');
    }
}
