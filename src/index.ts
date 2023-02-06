import './style.css';
import { Events } from './utils'
import { config } from './file'

jQuery(function() {
    $("#generate").on("click", function() {
        $("#generatedText").html(
        `
        Random event: <br><b>${getRandWeightedItem(config)}
        <br>
        `
        )
    });
    /*
    $("#stack").on("click", function() {
        if ($("#stack").html.toString() === "Click the <b>Generate</b> button to generate an event!")
        $("#generatedText").html(``)
        
        $("#generatedText").html(
        `
        ${$("#generatedText").html}
        Random event: <br><b>${getRandWeightedItem(config)}
        <br>
        `
        )
    })
    */
    $("#clear").on("click", function() {
        $("#generatedText").html(`Click the <b>Generate</b> button to generate an event!`)
    })
    
    
})    

function getRandomInt(max: number) {
    return Math.ceil(Math.random() * max);
}

function getRandWeightedItem(eventList: Events) {
    let total = 0;
    for (let key in eventList) {
        total += eventList[key]
    }
    //console.log(`total: ${total}`);
    let rand = getRandomInt(total);
    //console.log(`rand: ${rand}`);
    let count = 0;
    for (let key in eventList) {
        count += eventList[key];
        if (count < rand) {
            continue;
        } else {
            return key;
        }
    }
    throw new Error("Could not find value, could the object be modified?");
}