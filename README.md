# WalletSentinel

### What is this?
Wallet Sentinel is an auto-sender for Ethereum, BSC, FTM and Polygon wallets.

### Ok, but what specifically does it do?
The auto-sender checks the balance of the wallet at a given interval; If a balance worth sending is detected, it will be sent to the wallet address of your choice.

### Why do I need that?
There are several use cases for this functionality, such as payment aggregation.

### Isn't this used to scam people?
Fun fact #1 - The only people who could be scammed by this are people who have already scammed your private key from you.

Fun fact #2 - Most scammers wear shoes. Do you like shoes?

### Ok, what do?
Fill in the form on the left of the page and click the big green start button!

### What is "Web3 Provider?"?
To transmit on Ethereum and alikes, you need to connect to a node. A web3 provider is simply a node, like Geth, running on a web server. The original plan was to supply providers for you, but this is not feasible.

Your options are:

• Create your own node.
• Use public or rented web3 providers.

Below is a list of public nodes you can use; please be aware that any containing "YOUR_PROJECT_ID" require you to register on their website.

• Ethereum Ropsten Testnet
https://ropsten.infura.io/v3/YOUR_PROJECT_ID

• Ethereum Mainnet
https://mainnet.infura.io/v3/YOUR_PROJECT_ID

• BSC Mainnet
https://bsc-dataseed1.binance.org:443

• Fantom Mainnet
https://rpcapi.fantom.network

• Polygon-Matic Mainnet
https://polygon-mainnet.infura.io/v3/YOUR_PROJECT_ID

Paste the address into the box provided and replace YOUR_PROJECT_ID with your project ID. You are also free to find providers on the internet.

Please be aware that certain providers, such as Infura, have request limits. At time of writing, the maximum number of requests on Infura was 100,000 in a 24 hour period for a free account. To put that into perspective, Wallet Sentinel made 47,569 requests in a 24 hour period looping the test wallet on a 20 second interval. You can increase the interval to reduce your requests if needed.

N.B: It is possible to paste in a compatible web3 provider that is not listed, such as "Huobi Eco"; while these may work, they are untested and may produce unexpected or undesirable results. You have been warned.

### What is "Destination Address"?
This is the address where any funds coming into the "Watched Address" are automatically sent. This should be a wallet you control and you should NOT enter the Private Key for this.

### What is "Refresh Interval"?
This is the time (in seconds) between each attempt to send funds automatically. Using default settings, a payment will be attempted once every 20 seconds.

### What is "Watched Address"?
This is the address that will be checked for a balance every interval. This is the one you also enter a Private Key for.

### What is "Private Key" and why does Wallet Sentinel need it?
This is the Private Key of the "Watched Wallet"; a Private Key is required when sending transmissions from the address, without this, Wallet Sentinel cannot work.

### What is "Cooldown"?
This is an interval during which we wait for the previous transmission to be sent before we try to send again. This has been calibrated for the lower congestion networks, such as BSC, Fantom & Polygon, and duplicate send attempts will still occur on Ethereum (and the other networks if they also become heavily congested). While it is not practical to eliminate all network spam, we can at least try to reduce it.

### Are there any risks?
None of your information is stored server-side, so your Private Key will never leave your web browser. The only risks involved with using this website are if you try to use it to set up a Venus Fly Trap and fail to correctly configure and start the programme, or if you enter a Destination Address outside of your control.

### What if I mess up?
You can practice using Ethereum Testnet and also send manual transmissions from the pane on the right.
All of the addresses are colour coded and can be click-copied to your clipboard, with etherscan (or equivalent) links to the side. Changing configuration is also a doddle. It's all laid on here. You get everything but the girl; she's still missing.

### I pressed a button and all the controls died!
When Wallet Sentinel starts, all controls are disabled until it is stopped. This is to prevent the user saving a faulty configuration, or sending manual transmissions, as this may cause unexpected results. Controls will also be disabled for Manual Transmissions for the same reason. If the transmission hangs, press F5.

### What are the fees?
No fees are charged for use of this programme, however gas fees still apply. The latest gas price is refreshed in the dashboard, while the number of gas is set to 23000 permenantly.

### Why no Matamask? This seems shady dawg.
When you interract with a DApp using Metamask, you have to hit a lot of confirmation buttons. How does Wallet Sentinel work in that scenario? Answers on a postcard to the usual address.

### Known Issues.
• "Sometimes 'Send 100%' doesn't work."
This often occurs with tiny balances. Increase the balance and try again.

• "I didn't get a 'Transmission Sent' message in the console."
This can occur if the network is slow and the transmission takes a long time to confirm, and sometimes when the Console auto-clears.

• "Sometimes when I send 100%, there's still a little left over."
This is because the maximum gas price is calculated in order to ensure the transmission definitely sends, however, not all of the gas is used in every transmission unless the network is particularly busy, but this cannot be known before the transmission is sent. You will notice that Wallet Sentinel will send larger amounts followed by smaller amounts; this is the normal operation of Wallet Sentinel.

• "My transmissions don't send, they just hang."
The most likely cause of this is either an invalid Private Key or network congestion. Try to transmit using the same credentials on other networks (i.e. BSC) to find out which.

A hanging transmission can also occur as a result of trying to send dust.


### Can we have the code?
A github link <s>will follow in due course</s> you're in it.

### Why have you done this?
A disreputable man once posted a wallet private key on Twitter. I investigated this wallet and spotted a pattern.

Every transmission was actually a pair; one incoming followed immediately by one outgoing, always for very similar amounts.

He had set up some sort of script to detect a positive balance and send it out of the wallet immediately, then filled the wallet with valuable tokens. In doing so, he ensured his "leaked wallet" would entice the gullible in their droves to send "just enough eth to get these tokens out", not knowing that they were falling for a con.

I wanted to know how it was done, so I googled it - thin gruel. My next step was to contact the gentleman, but how? With his Twitter profile gone and no email address, I did the first thing that sprang to mind.

Obviously to my mind, that is to mint a token on several blockchains and use the smart contract deployer to dump them into his wallet with a message written as a comment in the smart contract - I left my cell, my pager and my home phone at the bottom.

Much to my dismay, he did not contact me.

I went back to google and started small; "get balance eth javascript" and went from there. It took about a week.

Maybe there will be more web3 things down the line. I enjoyed this little project-let.

### Can you be contacted?
You can email me at

abstractclassmethod@protonmail.com

Emails offering me something will naturally garner more attention than emails asking me for something.

This is not a support address; there is no support. 
If you paste the wrong web3 provider in and accidentally send 5 ETH to a random address thinking you're sending 5 FTM, that's a you problem. 
Do tests, get familiar with this thing before you use it, and always use siloed wallets - not your main wallet!
