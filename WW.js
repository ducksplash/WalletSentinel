let AttemptCounter = 2;
let refreshIntervalID = 0;
let NETWORK = 0;
let myAddr = localStorage.getItem("myAddr");
let targetAddr = localStorage.getItem("targetAddr");
let keyAddr = localStorage.getItem("keyAddr");
let refreshInterval = localStorage.getItem("refreshInterval");
let AutoRefreshEnabled = false;
let iterations = 0;
let AppTitle = "Wallet Sentinel"
let VersionNumber = "v1 final";






localStorage.setItem("devwallet",'0x3EEb6406021C3AC6e77FD59E80aa09f766627fbE');



document.getElementById("appTitleMain").innerHTML = AppTitle;
	

document.getElementById("appVersionText").innerHTML = VersionNumber;
	

document.getElementById("appTitleText").innerHTML = AppTitle+" "+VersionNumber;
	


// SET UP CHAINS

// Default to Ropsten.




let web3 = new Web3('https://ropsten.infura.io/v3/<YOUR PROJECT ID');
let NETNAME = 'Ethereum Testnet';
let ScannerLogoURL = 'etherscan.png';
let ScannerURL = 'https://ropsten.etherscan.io/address/';
let ScannerURLTX = 'https://ropsten.etherscan.io/tx/';


		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
	
// do init


if (localStorage.getItem("weiBalance") == null)
{
localStorage.setItem("weiBalance",'0');
}


if (localStorage.getItem("myBalance") == null)
{
localStorage.setItem("myBalance",'0');
}


if (localStorage.getItem("isConfigured") == null)
{
localStorage.setItem("isConfigured",'false');
}




if (localStorage.getItem("myAddr") == null)
{
localStorage.setItem("myAddr",'0x0');
}


if (localStorage.getItem("targetAddr") == null)
{
localStorage.setItem("targetAddr",'0x1');
}

if (localStorage.getItem("keyAddr") == null)
{
localStorage.setItem("keyAddr",'Super Secret Private Key');
}

if (localStorage.getItem("myBalance") == null)
{
localStorage.setItem("myBalance",'0');

document.getElementById("myBalance").innerHTML = '0';
}

if (localStorage.getItem("gasPriceInEth") == null)
{
localStorage.setItem("gasPriceInEth",'0');
}

if (localStorage.getItem("gasSendable") == null)
{
localStorage.setItem("gasSendable",'0');
}


if (localStorage.getItem("refreshInterval") == null)
{
localStorage.setItem("refreshInterval",'20000');
}



if (localStorage.getItem("balanceSendable") == null)
{
localStorage.setItem("balanceSendable",'0');
}

if (localStorage.getItem("sendableBalance") == null)
{
localStorage.setItem("sendableBalance",'0');
}

if (localStorage.getItem("gasPriceInEth") == null)
{
localStorage.setItem("gasPriceInEth",'0');
}

if (localStorage.getItem("lastAddr") == null)
{
localStorage.setItem("lastAddr",'0x0000000000000000000000000000000000000000');
}


if (localStorage.getItem("lastVal") == null)
{
localStorage.setItem("lastVal",'10000000000000000000000000000000000000000');
}


if (localStorage.getItem("lastTim") == null)
{
localStorage.setItem("lastTim",'0:00');
}



if (localStorage.getItem("web3Provider") == null)
{
localStorage.setItem("web3Provider",'https://ropsten.infura.io/v3/YourProjectID');
}
else
{
document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");
}


function greeting()
{

if (localStorage.getItem("isConfigured") == 'false')
{
document.getElementById("consoleOutput").innerHTML += "<br/><span style=\"font-size: 18px;\"><b>"+AppTitle+" "+VersionNumber+"</b></span><br/><br/>To get started, enter wallet information in the pane on the left.<br/><br/>You will need:<br/><br/>&#8226; A web3 provider URL.<br/>&#8226; A <span style=\"color: #ff0000;\">Destination Address</span> for "+AppTitle+" to send funds to.<br/>&#8226; A <span style=\"color: #00ccff;\">Watched Address</span> to monitor.<br/>&#8226; The Private Key of the Watched Address.<br/>&#8226; A Refresh Interval (in seconds).<br/>...and don\'t forget to <a class=\"selectaddress\" style=\"text-decoration: none; text-align: right; line-height: 40px; text-shadow: none; color: #00CCFF;\" data-target=\"modal\" data-toggle=\"modal\">README.md</a><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
}
else
{
var niceInterval =  Number(localStorage.getItem("refreshInterval")) / 1000;


document.getElementById("consoleOutput").innerHTML += "<br/><span style=\"font-size: 18px;\"><b>"+AppTitle+" "+VersionNumber+"</b></span><br/><br/><b>Current Configuration.</b><br/><b>Watched Address: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/><b>Destination Address: </b> <a style=\"color: #ff0000\" href=\""+ScannerURL+localStorage.getItem("targetAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("targetAddr")+"</a><br/><b>Private Key: </b>"+localStorage.getItem("keyAddr")+"<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
}

}


greeting();
refreshData();

	
//
//clear console after 480 seconds
window.setInterval('clearConsole()', 480000);





function etherScanLinks(toNETWORK)
{

	
		if (toNETWORK == 0)
		{
		

		 ScannerLogoURL = 'etherscan.png';
		 ScannerURL = 'https://ropsten.etherscan.io/address/';
		 ScannerURLTX = 'https://ropsten.etherscan.io/tx/';
		
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");

		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
		
		}
	
		
		
		if (toNETWORK == 1)
		{
		

		 ScannerLogoURL = 'etherscan.png';
		 ScannerURL = 'https://etherscan.io/address/';
		 ScannerURLTX = 'https://etherscan.io/tx/';	
		
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");		

		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
		
		
		}
			
		if (toNETWORK == 2)
		{
		
		 ScannerLogoURL = 'bscscan.png';
		 ScannerURL = 'https://bscscan.com/address/';
		 ScannerURLTX = 'https://bscscan.com/tx/';
		
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");		

		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
		
				
		}
			
		if (toNETWORK == 3)
		{
		
		 ScannerLogoURL = 'ftm.200px.png';
		 ScannerURL = 'https://ftmscan.com/address/';
		 ScannerURLTX = 'https://ftmscan.com/tx/';	
		
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");		

		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
		
		}
			
		if (toNETWORK == 4)
		{
		
		 ScannerLogoURL = 'polygon.200px.png';
		 ScannerURL = 'https://polygonscan.com/address/';
		 ScannerURLTX = 'https://polygonscan.com/tx/';
		
		
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");		

		document.getElementById("etherscanLinkWatched").href = ScannerURL+localStorage.getItem('myAddr');
		document.getElementById("etherscanLogoWatched").src = './'+ScannerLogoURL;

		document.getElementById("etherscanLinkDestiny").href = ScannerURL+localStorage.getItem('targetAddr');
		document.getElementById("etherscanLogoDestiny").src = './'+ScannerLogoURL;
	
		}
		

}




function PrefillWatched()
{


	document.getElementById("paymentAddress").value = localStorage.getItem("myAddr");


	
	document.getElementById("consoleOutput").innerHTML = "<br/><b>Watched Address</b> (<a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a>) selected.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;



}




function PrefillDestination()
{


	document.getElementById("paymentAddress").value = localStorage.getItem("targetAddr");


	
	document.getElementById("consoleOutput").innerHTML = "<br/><b>Destination Address</b> (<a style=\"color: #ff0000\" href=\""+ScannerURL+localStorage.getItem("targetAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("targetAddr")+"</a>) selected.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	



}





function PrefillDonate()
{


	document.getElementById("paymentAddress").value = localStorage.getItem("devwallet");


	document.getElementById("consoleOutput").innerHTML = "<br/><b>Dev Wallet</b> (<a style=\"color: #FFaa00\" href=\""+ScannerURL+localStorage.getItem("devwallet")+"\" target=\"_BLANK\">"+localStorage.getItem("devwallet")+"</a>) selected.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	
}





function PrefillBalance(multiplier)
{

	sendableint = parseInt(localStorage.getItem("balanceSendable")).toFixed(8);
	
	// We're handling a zero balance here as most languages dislike "division by zero" and often throw errors.
	// JS does't appear to care, but it's best to avoid division by zero as a matter of course.
	// It's just good business.
	
	if (sendableint > 0)
	{

		if (multiplier == 1)
		{
		// 25%

		sendThis = sendableint / parseInt(4);
		document.getElementById("paymentValue").value = web3.utils.fromWei(sendThis.toString().split('.')[0],'ether');
		}


		if (multiplier == 2)
		{

		// 50%
		sendThis = sendableint / parseInt(2);
		document.getElementById("paymentValue").value = web3.utils.fromWei(sendThis.toString().split('.')[0],'ether');
		}


		if (multiplier == 3)
		{
		
		// 75%

		sendThis = (sendableint / parseInt(4)) * parseInt(3);
		document.getElementById("paymentValue").value = web3.utils.fromWei(sendThis.toString().split('.')[0],'ether');
		}	



		if (multiplier == 4)
		{
		// 100%

		sendThis = sendableint / parseInt(1);
		document.getElementById("paymentValue").value = web3.utils.fromWei(sendThis.toString().split('.')[0],'ether');
		}	
	
	}
	else
	{
		sendThis = sendableint;
		document.getElementById("paymentValue").value = 'There\'s no balance to send!';	
	}
	
}





function fixminutes(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}





function SelectNetwork()
{
  
    var selectBox = document.getElementById("NetSelector");
    var netNo = Number(selectBox.options[selectBox.selectedIndex].value);
  
  
	if (netNo === 0)
	{

		localStorage.setItem("web3Provider",document.getElementById("providerbox").value);
		web3 = new Web3(localStorage.getItem("web3Provider"));
		refreshData();
		NETNAME = 'Ethereum Testnet';
		
		
		document.getElementById("networkIcon").src = "./eth.200px.png";
	
	
		let ScannerLogoURL = 'etherscan.png';
		let ScannerURL = 'https://ropsten.etherscan.io/address/';	
		NETWORK = 0;
		etherScanLinks(0);
	
		
		document.getElementById("consoleOutput").innerHTML = "<br/><b>Connected to</b> "+NETNAME+".<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
		
	}

  
  
	if (netNo === 1)
	{
		localStorage.setItem("web3Provider",document.getElementById("providerbox").value);
		web3 = new Web3(localStorage.getItem("web3Provider"));
		refreshData();
		NETNAME = 'Ethereum Mainnet';
		
		
		document.getElementById("networkIcon").src = "./eth.200px.png";
	
	
		let ScannerLogoURL = 'etherscan.png';
		let ScannerURL = 'https://ropsten.etherscan.io/address/';	
		NETWORK = 1;
		etherScanLinks(1);
	
		
		document.getElementById("consoleOutput").innerHTML = "<br/><b>Connected to</b> "+NETNAME+".<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	}

	if (netNo === 2)
	{
		localStorage.setItem("web3Provider",document.getElementById("providerbox").value);
		web3 = new Web3(localStorage.getItem("web3Provider"));
		refreshData();
		NETNAME = 'BSC Mainnet';
		document.getElementById("networkIcon").src = "./binance.200px.png";
	
		let ScannerLogoURL = 'bscscan.png';
		let ScannerURL = 'https://bscscan.com/address/';

		NETWORK = 2;
		etherScanLinks(2);
	
	
		document.getElementById("consoleOutput").innerHTML = "<br/>Connected to "+NETNAME+".<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	}

	if (netNo === 3)
	{
		localStorage.setItem("web3Provider",document.getElementById("providerbox").value);
		web3 = new Web3(localStorage.getItem("web3Provider"));
		refreshData();
		NETNAME = 'Fantom Mainnet';
		document.getElementById("networkIcon").src = "./ftm.200px.png";	
		
		NETWORK = 3;
		etherScanLinks(3);
			
		document.getElementById("consoleOutput").innerHTML = "<br/><b>Connected to</b> "+NETNAME+".<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	}

	if (netNo === 4)
	{
		localStorage.setItem("web3Provider",document.getElementById("providerbox").value);
		web3 = new Web3(localStorage.getItem("web3Provider"));
		refreshData();
		NETNAME = 'Polygon Mainnet';
		document.getElementById("networkIcon").src = "./polygon.200px.png";	
		
		NETWORK = 4;
		etherScanLinks(4);
			
		document.getElementById("consoleOutput").innerHTML = "<br/><b>Connected to</b> "+NETNAME+".<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
		
	}
	
}




//////////// WHAT IS THIS? MODAL


document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);

// MODAL header
document.getElementById("modalHeader").innerHTML = "What is "+AppTitle+"?";


document.getElementById("modalTextTitle0").innerHTML = "What is this?";
document.getElementById("modalTextDetails0").innerHTML = AppTitle+" is an auto-sender for Ethereum, BSC, FTM and Polygon wallets.";


document.getElementById("modalTextTitle1").innerHTML = "Ok, but what specifically does it do?";
document.getElementById("modalTextDetails1").innerHTML = "The auto-sender checks the balance of the wallet at a given interval; If a balance worth sending is detected, it will be sent to the wallet address of your choice.";


document.getElementById("modalTextTitle2").innerHTML = "Why do I need that?";
document.getElementById("modalTextDetails2").innerHTML = "There are several use cases for this functionality, such as payment aggregation.";


document.getElementById("modalTextTitle3").innerHTML = "Isn't this used to scam people?";
document.getElementById("modalTextDetails3").innerHTML = "Fun fact #1 - The only people who could be scammed by this are people who have already scammed your private key from you.<br/><br/>Fun fact #2 - Most scammers wear shoes. Do you like shoes?";


document.getElementById("modalTextTitle4").innerHTML = "Ok, what do?";
document.getElementById("modalTextDetails4").innerHTML = "Fill in the form on the left of the page and click the big green start button!";


document.getElementById("modalTextTitle5").innerHTML = "What is &quot;Web3 Provider?&quot;?";
document.getElementById("modalTextDetails5").innerHTML = "To transmit on Ethereum and alikes, you need to connect to a node.  A web3 provider is simply a node, like Geth, running on a web server.  The original plan was to supply providers for you, but this is not feasible.<br/><br/>Your options are:<br/><br/>&#8226; Create your own node.<br/>&#8226; Use public or rented web3 providers.<br/><br/>Below is a list of public nodes you can use; please be aware that any containing \"YOUR_PROJECT_ID\" require you to register on their website.<br/><br/>&#8226; Ethereum Ropsten Testnet<br/>https://ropsten.infura.io/v3/YOUR_PROJECT_ID<br/><br/>&#8226; Ethereum Mainnet<br/>https://mainnet.infura.io/v3/YOUR_PROJECT_ID<br/><br/>&#8226; BSC Mainnet<br/>https://bsc-dataseed1.binance.org:443<br/><br/>&#8226; Fantom Mainnet<br/>https://rpcapi.fantom.network<br/><br/>&#8226; Polygon-Matic Mainnet<br/>https://polygon-mainnet.infura.io/v3/YOUR_PROJECT_ID<br/><br/>Paste the address into the box provided and replace YOUR_PROJECT_ID with your project ID.  You are also free to find providers on the internet.<br/><br/>Please be aware that certain providers, such as Infura, have request limits.  At time of writing, the maximum number of requests on Infura was 100,000 in a 24 hour period for a free account.  To put that into perspective, "+AppTitle+" made 47,569 requests in a 24 hour period looping the test wallet on a 20 second interval.  You can increase the interval to reduce your requests if needed.<br/><br/>N.B: It is possible to paste in a compatible web3 provider that is not listed, such as \"Huobi Eco\"; while these may work, they are untested and may produce unexpected or undesirable results.  You have been warned.";


document.getElementById("modalTextTitle6").innerHTML = "What is &quot;<span style=\"color: #ff0000;\">Destination Address</span>&quot;?";
document.getElementById("modalTextDetails6").innerHTML = "This is the address where any funds coming into the &quot;Watched Address&quot; are automatically sent. This should be a wallet you control and you should NOT enter the Private Key for this.";


document.getElementById("modalTextTitle7").innerHTML = "What is &quot;Refresh Interval&quot;?";
document.getElementById("modalTextDetails7").innerHTML = "This is the time (in seconds) between each attempt to send funds automatically. Using default settings, a payment will be attempted once every 20 seconds.";


document.getElementById("modalTextTitle8").innerHTML = "What is &quot;<span style=\"color: #00ccFF;\">Watched Address</span>&quot;?";
document.getElementById("modalTextDetails8").innerHTML = "This is the address that will be checked for a balance every interval. This is the one you also enter a Private Key for.";


document.getElementById("modalTextTitle9").innerHTML = "What is &quot;Private Key&quot; and why does "+AppTitle+" need it?";
document.getElementById("modalTextDetails9").innerHTML = "This is the Private Key of the &quot;<span style=\"color: #00ccff;\">Watched Wallet</span>&quot;; a Private Key is required when sending transmissions from the address, without this, "+AppTitle+" cannot work.";


document.getElementById("modalTextTitle10").innerHTML = "What is &quot;Cooldown&quot;?";
document.getElementById("modalTextDetails10").innerHTML = "This is an interval during which we wait for the previous transmission to be sent before we try to send again. This has been calibrated for the lower congestion networks, such as BSC, Fantom &amp; Polygon, and duplicate send attempts will still occur on Ethereum (and the other networks if they also become heavily congested).  While it is not practical to eliminate all network spam, we can at least try to reduce it.";


document.getElementById("modalTextTitle11").innerHTML = "Are there any risks?";
document.getElementById("modalTextDetails11").innerHTML = "None of your information is stored server-side, so your Private Key will never leave your web browser.  The only risks involved with using this website are if you try to use it to set up a Venus Fly Trap and fail to correctly configure and start the programme, or if you enter a Destination Address outside of your control.";


document.getElementById("modalTextTitle12").innerHTML = "What if I mess up?";
document.getElementById("modalTextDetails12").innerHTML = "You can practice using Ethereum Testnet and also send manual transmissions from the pane on the right.<br/>All of the addresses are colour coded and can be click-copied to your clipboard, with etherscan (or equivalent) links to the side. Changing configuration is also a doddle. It's all laid on here. You get everything but the girl; she\'s still missing.";


document.getElementById("modalTextTitle13").innerHTML = "I pressed a button and all the controls died!";
document.getElementById("modalTextDetails13").innerHTML = "When "+AppTitle+" starts, all controls are disabled until it is stopped. This is to prevent the user saving a faulty configuration, or sending manual transmissions, as this may cause unexpected results. Controls will also be disabled for Manual Transmissions for the same reason.  If the transmission hangs, press F5.";


document.getElementById("modalTextTitle14").innerHTML = "What are the fees?";
document.getElementById("modalTextDetails14").innerHTML = "No fees are charged for use of this programme, however gas fees still apply. The latest gas price is refreshed in the dashboard, while the number of gas is set to 23000 permenantly.";


document.getElementById("modalTextTitle15").innerHTML = "Why no Matamask? This seems shady dawg.";
document.getElementById("modalTextDetails15").innerHTML = "When you interract with a DApp using Metamask, you have to hit a lot of confirmation buttons. How does "+AppTitle+" work in that scenario?  Answers on a postcard to the usual address.";


document.getElementById("modalTextTitle16").innerHTML = "Known Issues.";
document.getElementById("modalTextDetails16").innerHTML = "<b>&#8226; \"Sometimes \'Send 100%\' doesn\'t work.\"</b><br/>This often occurs with tiny balances. Increase the balance and try again.<br/><br/><b>&#8226; \"I didn\'t get a \'Transmission Sent\' message in the console.\"</b><br/>This can occur if the network is slow and the transmission takes a long time to confirm, and sometimes when the Console auto-clears.<br/><br/><b>&#8226; \"Sometimes when I send 100%, there\'s still a little left over.\"</b><br/>This is because the maximum gas price is calculated in order to ensure the transmission definitely sends, however, not all of the gas is used in every transmission unless the network is particularly busy, but this cannot be known before the transmission is sent. You will notice that "+AppTitle+" will send larger amounts followed by smaller amounts; this is the normal operation of "+AppTitle+".<br/><br/><b>&#8226; \"My transmissions don\'t send, they just hang.\"</b><br/>The most likely cause of this is either an invalid Private Key or network congestion. Try to transmit using the same credentials on other networks (i.e. BSC) to find out which.<br/><br/>A hanging transmission can also occur as a result of trying to send dust.<br/><br/>";


document.getElementById("modalTextTitle17").innerHTML = "Can we have the code?";
document.getElementById("modalTextDetails17").innerHTML = "A github link will follow in due course.";


document.getElementById("modalTextTitle18").innerHTML = "Why have you done this?";
document.getElementById("modalTextDetails18").innerHTML = "A disreputable man once posted a wallet private key on Twitter. I investigated this wallet and spotted a pattern.<br/><br/>Every transmission was actually a pair; one incoming followed immediately by one outgoing, always for very similar amounts.<br/><br/>He had set up some sort of script to detect a positive balance and send it out of the wallet immediately, then filled the wallet with valuable tokens.  In doing so, he ensured his \"leaked wallet\" would entice the gullible in their droves to send \"just enough eth to get these tokens out\", not knowing that they were falling for a con.<br/><br/>I wanted to know how it was done, so I googled it - thin gruel.  My next step was to contact the gentleman, but how? With his Twitter profile gone and no email address, I did the first thing that sprang to mind.<br/><br/>Obviously to my mind, that is to mint a token on several blockchains and use the smart contract deployer to dump them into his wallet with a message written as a comment in the smart contract - I left my cell, my pager and my home phone at the bottom.<br/><br/>Much to my dismay, he did not contact me.<br/><br/>I went back to google and started small; \"get balance eth javascript\" and went from there.  It took about a week.<br/><br/>Maybe there will be more web3 things down the line. I enjoyed this little project-let.";



document.getElementById("modalTextTitle19").innerHTML = "Can you be contacted?";
document.getElementById("modalTextDetails19").innerHTML = "You can email me at<br/><br/>abstractclassmethod@protonmail.com<br/><br/>Emails offering me something will naturally garner more attention than emails asking me for something.<br/><br/>This is not a support address; there is no support. If you paste the wrong web3 provider in and accidentally send 5 ETH to a random address thinking you\'re sending 5 FTM, that\'s a you problem.  Do tests, get familiar with this thing before you use it, and always use siloed wallets - not your main wallet!";

function clearConsole()
{

	document.getElementById("consoleOutput").innerHTML = "<br/><b>Console cleared.</b><br/>--------------------------------<br/>";

}


function doRefreshData()
{
  
  
  document.getElementById("refreshDataButton").disabled = true;

  
  
  setTimeout(function(){

	document.getElementById("consoleOutput").innerHTML = "<br/><b>Refreshing data.</b><br/>--------------------------------<br/>"+document.getElementById("consoleOutput").innerHTML;


  
refreshData();

}, 1000);
  
  setTimeout(function(){
      document.getElementById("refreshDataButton").disabled = false;
	document.getElementById("consoleOutput").innerHTML = "<br/><b>Data refreshed.</b><br/>--------------------------------<br/>"+document.getElementById("consoleOutput").innerHTML;
}, 10000);
  
}


// get balance

function refreshData()
{



	document.getElementById("chayne").innerHTML = NETNAME;
	document.getElementById("lastAddress").innerHTML = "<a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("lastAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("lastAddr")+"</a>";
	
	
	
	document.getElementById("lastValue").innerHTML = web3.utils.fromWei(localStorage.getItem("lastVal"),'ether');
	
	
	
	document.getElementById("lastTime").innerHTML = localStorage.getItem("lastTim");

	if (localStorage.getItem("targetAddr") != "")
	{
		document.getElementById("destinationAddress").placeholder = localStorage.getItem("targetAddr");
		document.getElementById("destinationAddressText").innerHTML = localStorage.getItem("targetAddr");
		document.getElementById("paymentAddress").placeholder = localStorage.getItem("targetAddr");
	}
	else
	{
		document.getElementById("destinationAddress").placeholder = '0x2';
		document.getElementById("destinationAddressText").innerHTML = '0x2';
	}

	if (localStorage.getItem("myAddr") != "")
	{
		document.getElementById("outgoingAddress").placeholder = localStorage.getItem("myAddr");
		document.getElementById("addy").innerHTML = localStorage.getItem("myAddr");
	}

	if (localStorage.getItem("keyAddr") != "")
	{
		document.getElementById("outgoingPrivateKey").placeholder = localStorage.getItem("keyAddr");
	}

	if (localStorage.getItem("refreshInterval") != "")
	{
		var niceInterval =  Number(localStorage.getItem("refreshInterval")) / 1000;
		document.getElementById("refreshIntervalText").placeholder = niceInterval;
		document.getElementById("refreshRate").innerHTML = niceInterval;
	}




	if (localStorage.getItem("web3Provider") != "")
	{
		document.getElementById("providerbox").placeholder = localStorage.getItem("web3Provider");
	}
	else
	{
		document.getElementById("providerbox").placeholder = 'https://ropsten.infura.io/v3/YourProjectID';
	}






	if (localStorage.getItem("gasPriceInEth") != "")
	{
		document.getElementById("balanceThreshold").innerHTML = web3.utils.fromWei(localStorage.getItem("gasPriceInEth"),'ether');
	}
	else
	{
	document.getElementById("balanceThreshold").innerHTML = "0";
	}


// GET MY BALANCE

if (web3.utils.isAddress(localStorage.getItem("myAddr")))
{
const myBalance = web3.eth.getBalance(myAddr).then(
	function (weiBalance) {
		let ethBalance = web3.utils.fromWei(weiBalance, 'ether');
		localStorage.setItem("weiBalance",weiBalance);
		document.getElementById("myBalance").innerHTML = ethBalance;
		localStorage.setItem("myBalance",ethBalance);
		
		setTimeout(refreshSendableBalance(), 2000);});
}
else
{
	document.getElementById("myBalance").innerHTML = '0';
	
	
		setTimeout(refreshSendableBalance(), 2000);
}


etherScanLinks();
}



function refreshSendableBalance()
{


	// GET GAS PRICE
	web3.eth.getGasPrice().then((result) => {
		document.getElementById("decgas").innerHTML = Number(web3.utils.fromWei(result, 'gwei')).toFixed(2)+" Gwei";
		localStorage.setItem("gasPriceInEth",result);
		
// set up gas

ThisGas = localStorage.getItem("gasPriceInEth");
NumberGas = Number(ThisGas);
ThisBalance = localStorage.getItem("weiBalance");
NumberBalance = Math.ceil(Number(ThisBalance) / 1.03);
FluffedGas = (NumberGas * 1.2);
sendableAfterTax = Math.ceil(NumberBalance - FluffedGas);




if (sendableAfterTax > 0)
{
sendableToString = sendableAfterTax.toString();
localStorage.setItem("gasSendable",Math.ceil(FluffedGas));
localStorage.setItem("balanceSendable",sendableAfterTax);
document.getElementById("sendableBalance").innerHTML = web3.utils.fromWei(sendableToString,'ether');
}
else
{
document.getElementById("sendableBalance").innerHTML = '0';
localStorage.setItem("balanceSendable",'0');
}


})}


// SEND MANUAL TRANSACTION

async function manualTransmission()
{

	if (web3.utils.isAddress(document.getElementById("paymentAddress").value) && !isNaN(parseInt(document.getElementById("paymentValue").value)))
	{

	document.getElementById("startAuto").disabled = true;
	document.getElementById("NetSelector").disabled = true;
	document.getElementById("destinationAddress").disabled = true;
	document.getElementById("refreshIntervalText").disabled = true;
	document.getElementById("outgoingAddress").disabled = true;
	document.getElementById("outgoingPrivateKey").disabled = true;
	document.getElementById("paymentAddress").disabled = true;
	document.getElementById("paymentValue").disabled = true;
	document.getElementById("manualSendButton").disabled = true;
	document.getElementById("refreshDataButton").disabled = true;
	document.getElementById("saveConfig").disabled = true;
	


totalToSend = document.getElementById("paymentValue").value.toString();

if (totalToSend.includes("."))
{
	MakeEthCompat();
}
else
{
totalToSend += ".";
MakeEthCompat();	
}

function MakeEthCompat()
{

lenf = totalToSend.length;


while (lenf < 12)
{
	totalToSend += "0";
	lenf = totalToSend.length;
}


}

document.getElementById("consoleOutput").innerHTML = "<br/><b>Sending Manual Transmission.</b><br/><b>From: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/><b>To: </b> <a style=\"color: #ff0000\" href=\""+ScannerURL+document.getElementById("paymentAddress").value+"\" target=\"_BLANK\">"+document.getElementById("paymentAddress").value+"</a><br/><b>Value: </b>"+totalToSend+"<br/><b>Gas: 23000</b><br/>"+totalToSend+"<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	

var SignedTransaction = await web3.eth.accounts.signTransaction({
to: document.getElementById("paymentAddress").value,
value: web3.utils.toWei(totalToSend, 'ether'),
gas: 23000 },localStorage.getItem("keyAddr"));

web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then((receipt) => {
console.log(receipt);

localStorage.setItem("lastAddr",document.getElementById("paymentAddress").value);
localStorage.setItem("lastVal",web3.utils.toWei(document.getElementById("paymentValue").value));
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + fixminutes(current);
let dateTime = cDate + ' ' + cTime;
localStorage.setItem("lastTim",dateTime);
		  
document.getElementById("consoleOutput").innerHTML = "<br/><b>Transmission Sent.</b><br/><b>From: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/><b>To: </b> <a style=\"color: #ff0000\" href=\""+ScannerURL+document.getElementById("paymentAddress").value+"\" target=\"_BLANK\">"+document.getElementById("paymentAddress").value+"</a><br/><b>Value: </b>"+document.getElementById("paymentValue").value+"<br/><b>Hash: </b><a class=\"selectaddress\" style=\"color: #00CCFF; text-decoration: none; font-size: 16px;\" target=\"_BLANK\" href=\""+ScannerURLTX+receipt['transactionHash']+"\">"+receipt['transactionHash']+"</a><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	
  

	document.getElementById("startAuto").disabled = false;
	document.getElementById("NetSelector").disabled = false;
	document.getElementById("destinationAddress").disabled = false;
	document.getElementById("refreshIntervalText").disabled = false;
	document.getElementById("outgoingAddress").disabled = false;
	document.getElementById("outgoingPrivateKey").disabled = false;
	document.getElementById("paymentAddress").disabled = false;
	document.getElementById("paymentValue").disabled = false;
	document.getElementById("manualSendButton").disabled = false;
	document.getElementById("refreshDataButton").disabled = false;
	document.getElementById("saveConfig").disabled = false;

refreshData();
		});

	}
	else
	{
	//
	document.getElementById("consoleOutput").innerHTML = "<br/><b>Unable to send transmission</b><br/><br/>Please specify a correct address and ensure there are funds available to send.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	//
	}
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function DoAutoSend()
{
	refreshData();

	if (AttemptCounter > 1)
	{
		AttemptCounter--;
		autoSendOut();
	}
	else
	{
		AttemptCounter--;
		//
		document.getElementById("consoleOutput").innerHTML = "<br/><br/><b>Cooldown</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
		//
	}

	if (AttemptCounter < 1)
	{
		AttemptCounter = 2;
	}
}


async function autoSendOut()
{

	if (localStorage.getItem("balanceSendable") != "" && localStorage.getItem("myAddr") != "")
	{
			//


		document.getElementById("consoleOutput").innerHTML = "<br/><b>Sending automatic transmission.</b><br/><b>From: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/><b>To: </b> <a style=\"color: #ff0000\" href=\""+ScannerURL+localStorage.getItem("targetAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("targetAddr")+"</a><br/><b>Value: </b>"+localStorage.getItem("balanceSendable")+"<br/><b>Gas:</b> 23000<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
			//
		var SignedTransaction = await web3.eth.accounts.signTransaction({
		to:  localStorage.getItem("targetAddr"),
		value: localStorage.getItem("balanceSendable"),
		gas: 23000 },localStorage.getItem("keyAddr"));

		web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then((receipt) => {
				console.log(receipt);
				//
localStorage.setItem("lastAddr",localStorage.getItem("targetAddr"));
localStorage.setItem("lastVal",localStorage.getItem("balanceSendable"));
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + fixminutes(current);
let dateTime = cDate + ' ' + cTime;
localStorage.setItem("lastTim",dateTime);
		  
document.getElementById("consoleOutput").innerHTML = "<br/><b>Transmission Sent.</b><br/><b>From: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/><b>To: </b> <a style=\"color: #ff0000\" href=\""+ScannerURL+localStorage.getItem("targetAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("targetAddr")+"</a><br/><b>Value: </b>"+localStorage.getItem("balanceSendable")+"<br/><b>Hash: </b><a class=\"selectaddress\" style=\"color: #00CCFF; text-decoration: none; font-size: 16px;\" target=\"_BLANK\" href=\""+ScannerURLTX+receipt['transactionHash']+"\">"+receipt['transactionHash']+"</a><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;


				//
		refreshData();});
		}
		else
		{
			document.getElementById("consoleOutput").innerHTML = "<br/><b>Some data is missing.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
		}
	}


//////////////////////



// START AUTO

function startAutoNow()
{



	if (web3.utils.isAddress(localStorage.getItem("myAddr")) && web3.utils.isAddress(localStorage.getItem("targetAddr")) && localStorage.getItem("keyAddr") != null)
	{

	// disabled all input fields!
	document.getElementById("NetSelector").disabled = true;
	document.getElementById("destinationAddress").disabled = true;
	document.getElementById("refreshIntervalText").disabled = true;
	document.getElementById("outgoingAddress").disabled = true;
	document.getElementById("outgoingPrivateKey").disabled = true;
	document.getElementById("paymentAddress").disabled = true;
	document.getElementById("paymentValue").disabled = true;
	document.getElementById("manualSendButton").disabled = true;
	document.getElementById("refreshDataButton").disabled = true;
	document.getElementById("saveConfig").disabled = true;
	
	
	AutoRefreshEnabled = true;
	
			var niceInterval =  Number(localStorage.getItem("refreshInterval")) / 1000;

	document.getElementById("consoleOutput").innerHTML = "<br/><b>"+AppTitle+" Started.</b><br/><b>Interval: </b>"+niceInterval+" Seconds.<br/><b>Watching: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	refreshIntervalID = window.setInterval('doAutoFloof()', parseInt(localStorage.getItem("refreshInterval")));
	document.getElementById("stopAuto").disabled = false;
	document.getElementById("startAuto").disabled = true;
	}
	else
	{

document.getElementById("consoleOutput").innerHTML = "<br/><b>You do not appear to have completed configuration.</b><br/><br/>A valid Destination Address, Interval (in seconds), valid Watched Address and Private Key are required.<br/><br/>Enter them in the pane on the left.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	
	}
	
	
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// STOP AUTO

function stopAutoNow()
{

	// disabled all input fields!
	document.getElementById("NetSelector").disabled = false;
	document.getElementById("destinationAddress").disabled = false;
	document.getElementById("refreshIntervalText").disabled = false;
	document.getElementById("outgoingAddress").disabled = false;
	document.getElementById("outgoingPrivateKey").disabled = false;
	document.getElementById("saveConfig").disabled = false;
	document.getElementById("paymentAddress").disabled = false;
	document.getElementById("paymentValue").disabled = false;
	document.getElementById("manualSendButton").disabled = false;
	document.getElementById("refreshDataButton").disabled = false;

	AttemptCounter = 2;
	AutoRefreshEnabled = false;
	clearInterval(refreshIntervalID);
	document.getElementById("stopAuto").disabled = true;
	document.getElementById("startAuto").disabled = false;
	document.getElementById("consoleOutput").innerHTML = "<br/><b>"+AppTitle+"<b/> Stopped.<br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function doAutoFloof()
{

	refreshData();
	
	iterations++;

	document.getElementById("consoleOutput").innerHTML = "<br/><b>Iteration "+iterations+"<br/>Watching: </b><a style=\"color: #00ccff\" href=\""+ScannerURL+localStorage.getItem("myAddr")+"\" target=\"_BLANK\">"+localStorage.getItem("myAddr")+"</a><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	if (parseInt(localStorage.getItem("weiBalance")) > parseInt(500000000000000))
	{
		DoAutoSend();
	}
	else
	{
	
	
	
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes();
let dateTime = cDate + ' ' + cTime;
	document.getElementById("consoleOutput").innerHTML = "<br/><b>Balance is below send threshold.</b><br/>--------------------------------<br/>"+dateTime+"<br/>" + document.getElementById("consoleOutput").innerHTML;
	
	}
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// CONFIG

function configureSettings()
{

configScore = 0;


// Capture contents of config form and store
//
if (web3.utils.isAddress(document.getElementById("destinationAddress").value))
{
	localStorage.setItem("targetAddr", document.getElementById("destinationAddress").value);
	configScore++;
}
else
{
	if (web3.utils.isAddress(document.getElementById("destinationAddress").placeholder))
	{
		localStorage.setItem("targetAddr", document.getElementById("destinationAddress").placeholder);
		configScore++;
	}
	else
	{
	
	document.getElementById("consoleOutput").innerHTML = "<br/><b>The Destination Address supplied is not valid.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	}

}

if (document.getElementById("refreshIntervalText").value != "")
{
	if (document.getElementById("refreshIntervalText").value > 19)
	{
		niceRefreshIntervalText = document.getElementById("refreshIntervalText").value * 1000;
		localStorage.setItem("refreshInterval", niceRefreshIntervalText);
		configScore++;
	}
	else
	{
		
	document.getElementById("consoleOutput").innerHTML = "<br/><b>The Refresh Interval specified is too low; setting the default (20 Seconds) instead.</b><br/>--------------------------------<br/>"+document.getElementById("consoleOutput").innerHTML;

		localStorage.setItem("refreshInterval", 20000);
	}
}
else if (document.getElementById("refreshIntervalText").placeholder != "")
{
	if (document.getElementById("refreshIntervalText").placeholder > 19)
	{
		niceRefreshIntervalText = document.getElementById("refreshIntervalText").placeholder * 1000;
		localStorage.setItem("refreshInterval", niceRefreshIntervalText);
		configScore++;
	}
	else
	{
		
	document.getElementById("consoleOutput").innerHTML = "<br/><b>The Refresh Interval specified is too low; setting the default (20 Seconds) instead.</b><br/>--------------------------------<br/>"+document.getElementById("consoleOutput").innerHTML;

		localStorage.setItem("refreshInterval", 20000);
	}
}



if (web3.utils.isAddress(document.getElementById("outgoingAddress").value))
{
	myAddr = document.getElementById("outgoingAddress").value;
	localStorage.setItem("myAddr", document.getElementById("outgoingAddress").value);
	configScore++;
}
else
{

	if (web3.utils.isAddress(document.getElementById("outgoingAddress").placeholder))
	{
		myAddr = document.getElementById("outgoingAddress").placeholder;
		localStorage.setItem("myAddr", document.getElementById("outgoingAddress").placeholder);
		configScore++;

	}
	else
	{
		document.getElementById("consoleOutput").innerHTML = "<br/><b>The Watched Address supplied is not valid.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;
	
	}

	

}


if (document.getElementById("outgoingPrivateKey").value != "")
{
	localStorage.setItem("keyAddr", document.getElementById("outgoingPrivateKey").value);

	configScore++;

}
else
{
	if (document.getElementById("outgoingPrivateKey").placeholder != "")
	{
		localStorage.setItem("keyAddr", document.getElementById("outgoingPrivateKey").placeholder);

		configScore++;
	}
	else
	{
	document.getElementById("consoleOutput").innerHTML = "<br/><b>A valid Private Key has not been specified.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	}
}



if (document.getElementById("providerbox").value != "")
{
	localStorage.setItem("web3Provider", document.getElementById("providerbox").value);
	SelectNetwork();
	configScore++;

}
else
{
	if (document.getElementById("providerbox").placeholder != "")
	{
		localStorage.setItem("web3Provider", document.getElementById("providerbox").placeholder);
		SelectNetwork();
		configScore++;
	}
	else
	{
	document.getElementById("consoleOutput").innerHTML = "<br/><b>A valid web3 URL has not been specified.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

	}
}



if (configScore > 4)
{
document.getElementById("consoleOutput").innerHTML = "<br/><b>Configuration saved.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

document.getElementById("saveConfig").disabled = true;
localStorage.setItem("isConfigured",'true');
greeting();
}

	setInterval(refreshData(),1000);
}


function enableConfigButton()
{
	document.getElementById("saveConfig").disabled = false;
}





function copyWatchedAddress() 
{
var text = document.getElementById("addy").innerHTML;
navigator.clipboard.writeText(text).then(function() {

document.getElementById("consoleOutput").innerHTML = "<br/><b>Copied to clipboard.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}



function copyDestAddress() 
{
var text = document.getElementById("destinationAddressText").innerHTML;
navigator.clipboard.writeText(text).then(function() {

document.getElementById("consoleOutput").innerHTML = "<br/><b>Copied to clipboard.</b><br/>--------------------------------<br/>" + document.getElementById("consoleOutput").innerHTML;

}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
}

