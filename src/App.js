import './App.css';
import {useState,useEffect} from "react";
import Navbar from './components/Navbar/Navbar'
import Page from './components/Page'

function App() {
    const etherium = window.ethereum
    const [isConnected, setConnectedStatus] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [balance, setbalance] = useState(-10)
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setURL] = useState("");

useEffect(() => {

}, [isConnected]);

    if(etherium){
        etherium.on('connect',(accounts)=>{
            console.log(accounts[0])
        })
    }

const connectWallet = async () => {
  if (window.ethereum) { //check if Metamask is installed
        try {
            const address = await window.ethereum.enable(); //connect Metamask
            const obj = {
                    connectedStatus: true,
                    status: "",
                    address: address
                }
                return obj;
             
        } catch (error) {
            return {
                connectedStatus: false,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }
        
  } else {
        return {
            connectedStatus: false,
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
      } 
};

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str+1;
 }

const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setConnectedStatus(walletResponse.connectedStatus);
    setStatus(walletResponse.status);
    if (isConnected) {
      setWallet(walletAddress);
      const balance = await window.ethereum.request({"method":"eth_getBalance","params":[walletAddress, "latest"]})
      setbalance(hex_to_ascii(balance.split('0x')[1]))
    }
    console.log(balance)
    console.log(walletAddress)
};

useEffect(async () => {
  if (window.ethereum) { //if Metamask installed
    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" }) //get Metamask wallet
      if (accounts.length) { //if a Metamask account is connected
        setConnectedStatus(true);
        setWallet(accounts[0]);
      } else {
        setConnectedStatus(false);
        setStatus("🦊 Connect to Metamask using the top right button.");
      }
    } catch {
      setConnectedStatus(false);
      setStatus(
        "🦊 Connect to Metamask using the top right button. " +
          walletAddress
      );
    }
  }  
});

  return (
    <div className="overflow-x-hidden">
    <Navbar
    isConnected={isConnected}
    connectWalletPressed={connectWalletPressed}
    />
    <Page
    isConnected={isConnected}
    balance={balance}
    walletAddress={walletAddress}
    />
    </div>
  );
}

export default App;
