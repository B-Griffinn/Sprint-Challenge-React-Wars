import React, {useState, useEffect} from 'react';
import axios from "axios";
import NextButton from "./Next-Button";

function NextComp(){
    // **stretch hook**
const [nextPage, setNextPage] = useState('');

useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=2') 
    .then(res => {
      console.log('Next: ' + res.data.next);
      const ourNext = res.data;
      setNextPage(ourNext);
    })
    .catch(err => {
      //console.log(err)
    })
    }, [] )
    
    if(!nextPage) return <h3>Button Loading...</h3> // **Stretch**

    return (
<NextButton nextPage={nextPage.next}/>
    )
}


export default NextComp;