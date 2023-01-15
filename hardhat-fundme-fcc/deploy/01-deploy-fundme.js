// function deployFunc() {
//     console.log("Hi")
// }

const { network } = require("hardhat")

// module.exports.default = deployFunc

// module.exports = async (hre) => {
//     //console.log("Hi")
//     const {getNamedAccounts,deployments}=hre
// }

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    //if chainid is x use address Y

    //we are going gor local host or hardhat network we can use to mock

    const fundme = await deploy("FundMe", {
        from: deployer,
        args: [], // put price feed address
        log: true,
    })
}
