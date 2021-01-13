const { API } = require("@the-orange-alliance/api")
async function main() {
    const toa = new API(process.env.TOA_API_KEY, "TOA Web Widget");

    const event = await toa.getEvent("1920-FIM-KFQ");
    console.log(event.eventName);

    // OR

    toa.getEvent("1920-FIM-KFQ").then(event => {
        console.log(event.eventName);
    });

    const event2 = await toa.getEvent("1920-FIM-KFQ");
    console.log(event.eventName);

    const test3 = await toa.getTeam("11918");
    console.log(test3);

    // const test4 = await toa.getTeams();
    // for (let index = 0; index < test4.length; index++) {
    //     const element = test4[index];
    //     console.log(element);
    // }
}
main();
