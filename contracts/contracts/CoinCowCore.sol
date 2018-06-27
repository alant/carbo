pragma solidity ^0.4.23;

import "./CoinCow721.sol";
import "./cows/CowInterface.sol";

contract CoinCowCore is CoinCow721 {
    mapping(address => bool) registeredCowInterface;

    function registerCowInterface(address cowInterfaceAddress) public onlyCOO {
        require(!registeredCowInterface[cowInterface]);

        CowInterface cowInterface = CowInterface(cowInterfaceAddress);
        require(cowInterface.implementsCow());
        require(cowInterface.erc721() == address(this));

        registeredCowInterface[cowInterface] = true;
    }

    function createCow() external returns (uint256 tokenId) {
        CowInterface cowInterface = CowInterface(msg.sender);
        require(cowInterface.implementsCow());
        require(cowInterface.enabled());
        require(cowInterface.erc721() == address(this));

        tokenId = cows.push(Cow(msg.sender, uint64(now))) - 1;
    }
}
