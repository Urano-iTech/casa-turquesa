import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Casa Turquesa.
              </a>
            </span>
          </h1>

          <p className="description">
            Configuring your desired network {" "}
           
          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="grid">
          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Portal ➜</h2>
              <p>
              Guides, references and resources that will keep you up to date with updates.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Marketplace ➜</h2>
              <p>
              Buy and Sell NFT, we provide you with security and protection in web3 networks
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Pools ➜</h2>
              <p>
              Discover and create the future together
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
