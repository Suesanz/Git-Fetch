const inputUser_name = document.querySelector("#search")
const Button = document.querySelector(".searchButton")
const nameContainer = document.querySelector(".main__profile-name")
const repos = document.querySelector(".main__profile-repos")
const urlContainer = document.querySelector(".main__profile-url")
const picContainer = document.querySelector("#pic")
const followers = document.querySelector(".main__profile-followers")
const following = document.querySelector(".main__profile-following")
const unContainer = document.querySelector(".main__profile-username")

const client_id = " Iv1.be7ffdefcc701382";
const client_secret = "1e49463509a901e51a0207cf97a8dc0b8d00a258";

const fetchUser = async (user) => {

    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
    const data = await api_call.json()
    return {data}
}

const showdata = () => {

    fetchUser(inputUser_name.value).then((res) => {
        console.log(res)
        picContainer.innerHTML = ` <span class="main__profile-value"><img width="110" height="110" src=" ${res.data.avatar_url}"</img></span>`
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`
        repos.innerHTML = `Repository: <span class="main__profile-value">${res.data.public_repos}</span>`
        urlContainer.innerHTML = `Url: <span class="main__profile-value">${res.data.html_url}</span>`
        followers.innerHTML = `Followers: <span class="main__profile-value">${res.data.followers}</span>`
        following.innerHTML = `Following: <span class="main__profile-value">${res.data.following}</span>`
    })

}
Button.addEventListener("click", () => {
    showdata()
})

// app.listen(3232,()=>console.log("Server is started at 3232"))