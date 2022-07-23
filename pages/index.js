import {useState, uaeEffect} from "react";
import HeadComponent from '../components/Head';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Constants
const TWITTER_HANDLE = "wordsandarrows";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { walletAddress } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (walletAddress) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [walletAddress]);

  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header"> Tiny Poems Store </p>
          <p className="sub-text">Buy poetry art. We accept all kinds of coins.</p>
        </header>

        <main>
          {walletAddress ? (
            <p>Connected!</p>
          ) : (
            <div className="connect-prompt">
              <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />
              <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
              </div>
            </div>
          )}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
