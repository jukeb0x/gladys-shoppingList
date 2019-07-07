var fs = require("fs");
var shared = require("./../shared.js");

module.exports = {



    findElement:(arr, propName, propValue)=> {
        for (var i=0; i < arr.length; i++){
            if ((arr[i][propName]).toLowerCase().indexOf(propValue.toLowerCase()) >= 0){
                return arr[i];

                // will return undefined if not found; you could return a default instead
            }
        }
    },

    // Get the client
    readAllItems: () => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, "utf-8", (err, data) => {
                if (err) {console.log(err);
                    // if something fails
                    reject(err);
                }

                var json = JSON.parse(data);

                resolve(json);
                console.log("Successfully read to File."+JSON.stringify(data));
            });




        })
    },


    // maybe you want to reset client's instance
    writeItems: (dataToAppend) => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, function (err, data) {

                if (err) {
                    console.log(err);
                    // if something fails
                    reject(err);
                } else {


                    var json = JSON.parse(data);
                    json.push(dataToAppend);
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve(data);
                            console.log("Successfully Written to File.");
                        }
                    });
                }
            })

        })
    },



    // maybe you want to reset client's instance
    deleteItem: (name) => {
        return new Promise(function (resolve, reject) {
            fs.readFile(shared.jsonfile, function (err, data) {

                if (err) {
                    console.log(err);
                    // if something fails
                    reject(err);
                } else {


                    var json = JSON.parse(data);
                    var element=module.exports.findElement(json, "item", name);
                    if(element==null){
                        reject('Aucun item avec ce nom');
                    }
                    var index = json.indexOf(element);
                    json.splice(index, 1)
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve(data);
                            console.log("Successfully Written to File.");
                        }
                    });
                }
            })

        })
    },


    // maybe you want to reset client's instance
    flush: (name, prop,newData) => {
        return new Promise(function (resolve, reject) {
                                var json = "[]";
                    fs.writeFile(shared.jsonfile, JSON.stringify(json), 'utf8', function (err) {
                        if (err) {
                            console.log(err);
                            // if something fails
                            reject(error);
                        } else {
                            resolve();
                            console.log("Successfully Written to File.");
                        }
                    });

        })
    }
}
