// Error Handling  -- try , catch , finnally , throw

try {
    var i = 1;
    var data = 2;
    var data1 = data === i ;
    xys.name
}
catch (error)
{
    console.log("catch message :" + " " + error.message);
}
finally {
    console.log("Finished");
}

var i = 1;
if(i !== 0) {
    throw new Error ("Rejected");
}


// CallBAck Functions

function downloadfile(callback) {
    setTimeout(() => {
        console.log("File Downloaded");
        callback();
    },5000);
    }

    function openfile() {
        console.log("File Opened");
    }
    downloadfile(openfile);


// Promises

var delivery = new Promise ((resolve,reject) =>
{
    var order = true ;
    if(order) {
        resolve("Product Deliverd")
    }
    else{
        reject("Order Failed")
    }
});


delivery
.then(result => console.log(result))
.catch(failed => console.log(failed));

// Async And Await

function bankrequest()
{
    return new Promise((resolve) => {
        
     setTimeout(() => {
        resolve("Bank Responsing...");
        console.log("request sended"); },
    3000)});
    
     
     }
async function sendrequest() {
    console.log("Please Wait Request Sending...")
    let request = await bankrequest();
    console.log(request);

    console.log("Request Updated ??");
}

sendrequest();