const UserInfo = artifacts.require('./UserInfo.sol');
const CoinCowCore = artifacts.require('./CoinCowCore.sol');
const Farm = artifacts.require('./Farm.sol');
const TestCow = artifacts.require('./cows/TestCow.sol');

module.exports = async function(deployer) {
    await deployer.deploy(UserInfo);

    await deployer.deploy(CoinCowCore);
    const coinCowCore = await CoinCowCore.deployed();

    await deployer.deploy(Farm, coinCowCore.address);
    const farm = await Farm.deployed();

    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test BTC Cow', 'TH/s', 'POW', 'BTC');
    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test BCH Cow', 'TH/s', 'POW', 'BCH');
    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test ETH Cow', 'TH/s', 'POW', 'ETH');
    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test BTC Cow', 'TH/s', 'POW', 'BTC');
    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test BTC Cow', 'TH/s', 'POW', 'BTC');
    await deployer.deploy(TestCow, coinCowCore.address, farm.address, 'Test LAMA Cow', 'CCC', 'PLATFORM', 'ETH');
};