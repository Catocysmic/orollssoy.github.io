import React, {useState, useEffect} from "react";
import './Iss.css';

const ISS = () => {

    const [ISS, setISS] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://proxy.cors.sh/https://api.n2yo.com/rest/v1/satellite//visualpasses/25544/59.332860/17.936570/0/10/150/&apiKey=JG4VZ2-FSB4WL-QKBSXT-4XVL', {
                headers: {
                  'x-cors-api-key': 'b9e14ff6-eeee-4a8e-ad97-1645a07c3799',
                }
            });
            const data = await response.json()
            console.log(data);
            setISS(data.passes[0].startUTC);
            console.log(ISS);
        }
        fetchData();
    }, []);
    return (
        <div className="olofISSPass">
            <p>Next ISS pass for Olof!!!!</p>
            <img src="pictures/Iss.png" style={{height: "64px", width: "64px"}}/>
            <p> {ISS ? new Date(ISS*1000).toLocaleString(): 0} </p>
        </div>
    );
}

export default ISS;