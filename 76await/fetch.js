console.log("Fetch API");

async function getData() {
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    console.log(data)
    return 455
}
async function main() {

    console.log("Loading Modules")
    console.log("Do something here")

    let data = await getData()
    console.log(data)
    console.log("Process it")
    console.log("Process it further")
}
main()