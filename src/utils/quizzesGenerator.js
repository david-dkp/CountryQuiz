import {shuffle} from "./arrayUtils";

const getResponses = (countries, currentCountry) => {
    const leftCountries = [...countries]
    const responses = []

    const generateRandomIndex = (arrayLength) => {
        return Math.floor(Math.random() * arrayLength)
    }

    while (responses.length < 3) {
        const randIndex = generateRandomIndex(leftCountries.length)
        const country = leftCountries[randIndex]

        if (currentCountry === country.name.common) {
            continue
        }

        leftCountries.splice(randIndex, 1)
        responses.push(country.name.common)
    }
    const randIndex = generateRandomIndex(responses.length)

    responses.splice(randIndex, 0, currentCountry)

    return responses
}

const generateQuizzes = (countriesStore) => {
    const shuffledlist = shuffle(countriesStore)
    return shuffledlist.map((e, i, countries) => {
        return (i % 2 === 0 ? {
                question: `${e.capital[0]} is the capital of`,
                flagUrl: null,
                flagAlt: null,
                responses: getResponses(countries, e.name.common),
                answer: e.name.common
            } : {
                question: "Which country does this flag belong to ?",
                flagUrl: e.flags.svg ?? e.flags.png,
                flagAlt: "",
                responses: getResponses(countries, e.name.common),
                answer: e.name.common
            }
        )
    })
}

export {generateQuizzes}