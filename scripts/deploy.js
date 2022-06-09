const { task } = require("hardhat/config");

async function main(contractName) {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account: ", deployer.address);

	console.log("Account balance: ", (await deployer.getBalance()).toString());

	const initialSupply = BigInt(100_000_000_000_000_000_000); // 100 x 10**18
	console.log("Initial supply: ", initialSupply.toString());

	const Token = await ethers.getContractFactory(contractName);
	const token = await Token.deploy(initialSupply);

	console.log("Token address: ", token.address);
}

task("deploy", "Deploys the contract specified in the params")
	.addPositionalParam("contractName")
	.setAction(async ({ contractName }) => {
		console.log('Trying to deploy: ', contractName)
		try {
			await main(contractName)
			process.exit(0);
		} catch (error) {
			console.error(error);
			process.exit(1);
		};
	});