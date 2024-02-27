const fs=require("fs")
const addPerson=(id,fname ,lname,city,age) =>{
    const allData= loadData()
    const dublicatedData = allData.filter((obj)=>{
        return obj.id ===id
    })
 
    if(dublicatedData.length==0){
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age
        
    })
     saveData(allData)
    
     }else{
    console.log("!! eror dublicated DATA")
}
   
}

const loadData=()=>{
    try{
     const jsonData =fs.readFileSync("data10.json")
    return JSON.parse(jsonData)
      } catch{
        return []
      }
    
}

const saveData=(allData)=>{
    const objData = JSON.stringify(allData)
    fs.writeFileSync("data10.json" ,objData)
}



// const Delete=(id)=>{
//     const allData= loadData()
//     const dataToKeep = allData.filter((obj)=>{
//         return obj.id !==id
//     })
//     saveData(dataToKeep)
//     console.log("already delete an item")
// }


const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
       return obj.id !== id 
      
    })
    saveData(dataToKeep)
    
    console.log("you have already deleted an Item")
 } 

const Read=(id)=>{
    const allData =loadData()

    const readedData=allData.find((obj)=>{
          return obj.id==id
    })
    console.log (readedData)
}
 
const List =()=>{
    const allData=loadData()
     const listedData =allData.forEach((obj) => {
        console.log(obj.fname)
     });
}

module.exports={
    addPerson,
    deleteData,
    Read,
    List
}
