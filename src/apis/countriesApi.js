const fieldsWanted = [
    "name",
    "flags",
    "capital"
]

const getCountries = async () => {
    return fetch("https://restcountries.com/v3.1/all?fields=" + fieldsWanted.join(",")).then(r => r.json())
}

export {getCountries}