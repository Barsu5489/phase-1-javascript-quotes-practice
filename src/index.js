const quotes = 'http://localhost:3000/quotes?_embed=likes'

function fetchQuotes(){
    fetch(quotes)
    .then(res=> res.json())
    .then(quotes=>{
        console.log(quotes)
        quoteStructure(quotes)
    })
}

function quoteStructure(data){
    data.forEach(data=>{

    const quoteList = document.getElementById('quote-list');

    const quoteCard = document.createElement('li');
    quoteCard.classList.add('quoteCard');

    const blockQuote = document.createElement('blockquote');
    blockQuote.classList.add('blockquote');

    const p = document.createElement('p');
    p.classList.add('mb-0');
    p.textContent = data.quote;

    const footer = document.createElement('footer');
    footer.classList.add('blockquote-footer');
    footer.textContent = data.author

    const br = document.createElement('br');

    const likeBtn = document.createElement('button');
    likeBtn.classList.add('btn-success');
    likeBtn.textContent = `Likes: ` 

    const span = document.createElement('span');
    span.textContent = 0;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.textContent = 'Delete';

    blockQuote.appendChild(p)
    blockQuote.appendChild(footer)
    blockQuote.appendChild(br)
    likeBtn.appendChild(span)
    blockQuote.appendChild(likeBtn)
    blockQuote.appendChild(deleteBtn)
    quoteCard.appendChild(blockQuote)
    quoteList.appendChild(quoteCard)   
    console.log(data.id)     
    const id = data.id
    deleteBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/quotes/${data.id}`,
        {
            method:'delete'
        })
    })

  likeBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    span.textContent ++
    like(id)
  })
})

}
function tst(){

    const addNewQuote = document.getElementById('new-quote-form');
    addNewQuote.addEventListener('submit',(e)=>{
        e.preventDefault()
      const postQ = new FormData(addNewQuote)
      const postQuote =  new URLSearchParams(postQ)
      console.log([...postQuote])
      
        fetch('http://localhost:3000/quotes',
        {
            method:'post',
            body:postQuote
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    })
}

async function like(){


    const likesUpStream = {
        method:'post',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
            quoteId: 5,
            createdAt: Date.now()
        })
    }
    const res = await fetch('http://localhost:3000/likes', likesUpStream)
    const data = await res.json()
    console.log(data)
}



tst()

fetchQuotes()
