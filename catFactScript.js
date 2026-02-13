let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

let para = document.querySelector("#factPara");

let h4 = document.querySelector("h4");

btn.addEventListener("click", answer);

 function  answer(output) {

    console.log("button clicked");
    console.log("calling quote function");
    // btn.innerText = "Search New Fact";
    /*add here if else code for if button click for second time or more, then just change button text to Search New Fact else just 
    search fact*/

    quote();
}



async function quote() {
    try {
        let res = await axios.get(url);
        //   console.log(res.data.joke);
        let output = res.data.fact;
        console.log("API status: ", res.status);
        para.innerText = output;
        btn.innerText = "Search New Fact";
        h4.innerText = "How about next Fact? let's try!..";
        return (output);

        // let res2 = await axios.get(url);
        // console.log("fact is :", res2.data.fact);
    }
    catch (err) {
        console.log(err)
    }
}