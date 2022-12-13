function fetchData()
{
    fetch('http://localhost:3000/quotes?_embed=likes')
    .then(res=>
        {
            return res.json();
        })
    .then(data=>
        {
            quotes(data)
            console.log(data)
        })
    
}

// function liker()
// {
//     let likes = document.querySelector('.btn-success');
//     likes.addEventListener('click', ()=>
//     {
//         let plus = likes.textContent+1
    
//     fetch('http://localhost:3000/likes',
//     {
//         method: 'POST',
//         headers:
//         {
//             'Accept': 'Application/json'
//         },
//         body: JSON.stringify({quoteId:plus})
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// })
//}
function postQuote()
{
    const form = document.getElementById('new-quote-form')
    form.addEventListener('submit', (e)=>
    {
        e.preventDefault()
        const quotes = e.target.quote.value 
        const name = e.target.author.value
        const addData = document.getElementById('quote-list')
        addData.innerHTML += `<li class='quote-card'>
                    <blockquote class="blockquote">
                      <p class="mb-0">${quotes}</p>
                      <footer class="blockquote-footer">${name}</footer>
                      <br>
                      <button class='btn-success'>Likes: <span>0</span></button>
                      <button class='btn-danger'>Delete</button>
                    </blockquote>
                  </li>`
    })
    
}
function quotes(data)
{
   
        let data1 ="";
           data.map((dat)=>
           {
                data1 += `<li class='quote-card'>
                    <blockquote class="blockquote">
                      <p class="mb-0">${dat.quote}</p>
                      <footer class="blockquote-footer">${dat.id} ${dat.author}</footer>
                      <br>
                      <button class='btn-success'>Likes:${dat.likes} <span>0</span></button>
                      <button class='btn-danger'>Delete</button>
                    </blockquote>
                  </li>`
           })
           const quoteList = document.getElementById('quote-list')
           quoteList.innerHTML = data1

    
}
document.addEventListener('DOMContentLoaded',()=>
{
    fetchData()
    postQuote()
    
})
// 
//    const quoteList = document.getElementById('quote-list')
//    quoteList.innerHTML = data1
    // data.forEach((dat)=>
    // {
    //     const cards = document.getElementById('cards')
    //     const quoteList = document.getElementById('quote-list')
    //     quoteList.innerHTML += 
    //     `
    //     <li class='quote-card'>
    //     <blockquote class="blockquote">
    //       <p class="mb-0">${dat.quote}</p>
    //       <footer class="blockquote-footer">${dat.author}</footer>
    //       <br>
    //       <button class='btn-success'>Likes:${dat.likes} <span>0</span></button>
    //       <button class='btn-danger'>Delete</button>
    //     </blockquote>
    //   </li>
    //     `
    //     cards.appendChild(quoteList)
    //     return(dat)
    // })

//     quoteList.innerHTML = 
//     `
//     <li class='quote-card'>
//     <blockquote class="blockquote">
//       <p class="mb-0">${data[i].quote}</p>
//       <footer class="blockquote-footer">${data[i].author}</footer>
//       <br>
//       <button class='btn-success'>Likes:${data[i].likes} <span>0</span></button>
//       <button class='btn-danger'>Delete</button>
//     </blockquote>
//   </li>
//     `
//     cards.appendChild(quoteList)