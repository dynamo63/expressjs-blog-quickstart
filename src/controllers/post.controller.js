/*
    Creation des controllers pour nos routes
    - Ils prennent en parametre un objet request et response
*/


// Listing des notes
const getAllNotes = (_req, res) => {
    const notes = [
        {
            title: "Un nouveau Post",
            description: "Mon Premier Post avec mon app express js",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus elit ut iaculis vehicula. Suspendisse dapibus laoreet purus ut tincidunt. Duis tempor ultrices ex, et congue nibh consequat non. Mauris tincidunt magna nulla, luctus dictum urna porttitor sed. Phasellus in mauris imperdiet, fermentum nunc et, vehicula lectus. Praesent sit amet ante ut odio eleifend tempus ut ut massa. Suspendisse non libero sollicitudin, blandit massa vitae, pellentesque est. Ut at magna a massa varius ultrices non in risus. Suspendisse potenti. Cras quis ex sit amet nibh gravida hendrerit. Cras et dui ante",
            tags:['Funny', 'Hello World'],
            id: 2320832018
        }
    ]

    return res.render('listing.njk', { notes })
}

// Ajout d'une mention j'aime a une note
const addLikeToNote = (req, res) => {
    const idNote = req.params.idNote
    console.log(req.body)
    return res.json({ id: idNote })
}

module.exports = {
    getAllNotes,
    addLikeToNote
}