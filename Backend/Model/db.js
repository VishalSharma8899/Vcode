const mongoose = require('mongoose');

const connection = async ()=>{

    try{
        mongoose.connect("mongodb://localhost:27017/Skillgenic" ,{

        } );
        console.log("Data base connected happy use");
    }
    catch(err){
        console.log("error in connection" , err);
        Process.exit(1);
    }

};
module.exports = connection;