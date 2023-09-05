const jsonData=require('../jsondata.json')
const Data=require('../models/Data');
module.exports.addData=async(req,res)=>{
    // console.log(jsonData);
    // for(let i of jsonData){
    //     console.log(i);
    // }
    jsonData.map(async(value,index)=>{
       const {end_year,intensity,
        sector,
        topic,
        insight,
        url,
        region,
        start_year,
        impact,
        added,
        published,
        country,
        relevance,
        pestle,
        source,
        title,
        likelihood}=value
       await Data.create({
        end_year,intensity,
        sector,
        topic,
        insight,
        url,
        region,
        start_year,
        impact,
        added,
        published,
        country,
        relevance,
        pestle,
        source,
        title,
        likelihood
        })
    })


    return res.status(200).json({
        message:"All Data",
    })
}

module.exports.getData=async(req,res)=>{
    let allData=await Data.find({}).limit(100);
    let dataCount=allData.length;
    return res.status(200).json({
        message:'All Data',
        data:allData
    })
}

module.exports.createData=async(req,res)=>{
       const {end_year,intensity,
        sector,
        topic,
        insight,
        url,
        region,
        start_year,
        impact,
        added,
        published,
        country,
        relevance,
        pestle,
        source,
        title,
        likelihood}=req.body;
       let newData=await Data.create({
        end_year,intensity,
        sector,
        topic,
        insight,
        url,
        region,
        start_year,
        impact,
        added,
        published,
        country,
        relevance,
        pestle,
        source,
        title,
        likelihood
        })
        console.log("Data added in db ",newData);

    return res.status(200).json({
        message:"All Data",
    })
}


module.exports.getByid=async(req,res)=>{
 const id=req.params.id
 let cData=await Data.findById(id);
//  let found=false;
 if(!cData){
    return res.status(401).json({
        message:"Not exist",
    })   
 }else{
    return res.status(200).json({
        message:"All Data",
        data:cData,
    })   
 }
 
}
module.exports.getByidDelete=async(req,res)=>{
 const id=req.params.id
 let cData=await Data.findByIdAndDelete(id);
 return res.status(200).json({
    message:"Data Deleted",
})    
}