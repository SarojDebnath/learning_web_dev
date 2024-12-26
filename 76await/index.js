console.log("Async Await");

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 10500)
    })
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