const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post)
            const error = false // if true, promise will be rejected and caught by .catch()
            if(!error){
                resolve()
            }else{
                reject('Error: something is not good')
            }
        }, 2000)
    })
}

/// using promise
createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err))

// async / await
// async function
async function init(){
    await createPost({ title: 'Post Three', body: 'This is post three' })
    getPosts()
    getUsers()
}

// async /await / fetch
async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}
// call 
init()

// Promise.all()

const promise1 = Promise.resolve('Promise 1')
const promise2 = 100
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Promise 3')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values))