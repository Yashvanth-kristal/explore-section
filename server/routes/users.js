import  express  from "express";


const router=express.Router();
 const user=[{
     fistname:"john",
     lastname:"depp",
     age:10
 }


]
router.get('/',(req,res)=>{
    res.send(user)
})

router.post('/',async (req,res)=>{
    const user=res.body;
    res.send('username'+user.fistname)
    await db.collection("usersdata").add(user);
})



export default router;