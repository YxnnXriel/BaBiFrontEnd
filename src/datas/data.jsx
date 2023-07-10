import axios from 'axios'

export const getCategories = async() => {
    await axios.get('http://127.0.0.1:8000/api/categorie/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then((response) => {
        console.log(response.data)
        return response.data
    }).catch((error) => {
        console.error(error)
    })
}

// make the dat i another file
// user
// afficher les données par catégorie