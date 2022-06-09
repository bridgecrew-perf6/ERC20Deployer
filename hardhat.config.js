require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("./scripts/deploy");


const INFURA_NODE_URL = process.env.INFURA_NODE_URL;
const privateKey = process.env.GOERLI_PK;

module.exports = {
	solidity: "0.8.14",
	networks: {
		goerli: {
			url: `https://${INFURA_NODE_URL}`,
			accounts: [`${privateKey}`],
		}
	}
};
