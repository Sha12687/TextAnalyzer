
import {React, useEffect} from "react";

function Home(){
    useEffect(()=>{
        document.title="Home || Learning React"
     },[]);
    return(
        <div>
<h1>This is Home Component</h1>

</div>
    );
}
export default Home;