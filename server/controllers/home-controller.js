const home=((req,res)=>{
    try {
        res.status(200).sendFile('C:/Users/Karunya Kumar/OneDrive/Desktop/pro/Task Manager/public/home.html')
    } catch (error) {
        res.send('Error 404')
    }
})
const edit=((req,res)=>{
    try {
        res.status(200).sendFile('C:/Users/Karunya Kumar/OneDrive/Desktop/pro/Task Manager/public/edit.html')
    } catch (error) {
        res.send('Error 404')
    }
})
module.exports={home,edit}