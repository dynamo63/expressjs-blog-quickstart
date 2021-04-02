const likeBtns = document.querySelectorAll('.card-link.like')

likeBtns.forEach(likeBtn => {
    likeBtn.onclick = e => {
        e.preventDefault()
        const URL = e.target.parentElement.href
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ like: true }),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.error(error)
        })
    }
});