
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';



export const injected = new InjectedConnector({ supportedChainIds: [25,1,338]});
export default function About() {

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 28000);
  });

  const {
    active,
    activate,
    chainId,
    account,
    deactivate, 
    library: provider,
  } = useWeb3React();

  const [hasMetamask, setHasMetamask] = useState(false);
  const [userAccounts, setUserAccounts] = useState([]);
  const [userValuesLoading, setUserValuesLoading] = useState(false);

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if(localStorage?.getItem('isWalletConnected') === 'true'){
        try {
          await activate(injected)
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          localStorage.setItem('isWalletConnected', true)
        
        } catch (ex) {
          console.log(ex)
        }
      }
      const messageOfDay = document.getElementById("welcomeMessage");
      const messageTwo = 'F*%#! You Gengsler';
      var random_boolean = Math.random() < 0.4;
      if(random_boolean === true){
          messageOfDay.innerText = messageTwo;
      }
   
    }
    connectWalletOnPageLoad();
   
 if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
  
    }
  }, []);


 
 return (
<>
<div style={{width:'100%',height:'100%'}}>
    <div style={{backgroundColor:'#ffffff80',height:'100%',paddingTop:'10%'}}>
        <div style={{backgroundColor:'#ffffff99',padding:'32px',width:'auto',margin:'auto',display:'block',marginTop:'100px'}}><h1 style={{textAlign:'center'}} id="welcomeMessage">THE BANKS ARE FAILING!</h1>
    <p style={{textAlign:'center',width:'auto'}}> WE'RE A MULTI-CHAIN COMMUNITY OF SOPHISTICATED ENTRPRENUARS GOING OUT OF BUSINESS!</p>
    
<p style={{textAlign:'center',lineHeight:'1.5rem'}}>900 MULTI-PASS LIVE ON OPEN SEA</p>
<p style={{textAlign:'center'}}> <i class="fa-trophy" style={{width:'20px',height:'20px',color:'black'}}></i>+ ART</p>
<p style={{textAlign:'center'}}> <i class="fas fa-trophy"></i>+ UTILITY</p>
<p style={{textAlign:'center'}}><i class="fas fa-trophy"></i>+ PROFIT SHARE AS AN OWNER</p>
<p style={{textAlign:'center'}}><i class="fas fa-trophy"></i>+ FREE AIRDROPS WITH MULTIPASS!</p>

<a href="https://opensea.io/collection/going-out-of-business-store" target="/"><button style={{width:'300px',height:'100px',margin:'auto',display:'block',borderRadius:'10px',marginTop:'16px',backgroundColor:'#f39026',fontFamily:'Glegoo-Regular',borderWidth:'5px',fontSize:'1.4rem'}}><img src="https://i.seadn.io/gcs/files/5f90499a1229f0e92a9f9b0359b324a2.png?auto=format&w=512" width={50} height={50} /> ON OPENSEA</button></a>
<p style={{textAlign:'center'}}>FIRST 100 - 0.005 ETH</p>
<p style={{textAlign:'center'}}>NORMAL PRICE 0.01 ETH</p>
</div>
</div></div></>
  );
}
