import  express  from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static ("public"));


let newItems = [];

// The home route in which the basic info is displayed and the "Today" section is rendered
app.get("/", (req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options)
    res.render("index" , {kindOfDay: day , newListItems : newItems});
});
//When the user decides to add a new task in the today section
app.post("/",(req,res)=>{
  let newItem = req.body.newItem;
   newItems.push(newItem);
    res.redirect("/");
});



app.listen(port ,()=>{
    console.log(`The server is running at port ${port}`);
});