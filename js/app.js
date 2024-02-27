const data10 =require("./data10")
const yargs = require("yargs")
yargs.command({
    command:"add",
    describe:"add item",
    builder:{
        id:{
            descripe:"first name",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
        data10.addPerson(x.id ,x.fname ,x.lname,x.city,x.age)
    }
    
})

// yargs.command({
//     command:"delete",
//     describe:"delete an item",
//     // builder:{
//     //     id:{
//     //         describe:"uniqe key",
//     //         demandOption:true,
//     //         type:"number"
//     //     }
//     // },
//     handler:(x)=>{
//         data10.Delete(x.id)
//     }
// })


yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler:(x)=> {
       data10.deleteData(x.id)
    }
  
  }) 

  
yargs.command({
    command:"read",
    describe:"read item",
    builder:{
        id:{
            descripe:"id",
            demandOption:true,
            type:"number"
        },
    },
    handler:(x)=>{
        data10.Read(x.id)
    }
    
})

yargs.command({
    command:"list",
    describe:"list items",
    handler:()=>{
        data10.List()
    }
    
})
yargs.parse()
