pragma solidity ^0.4.23;

import "./CoinCow721.sol";
import "./cows/CowInterface.sol";

contract CoinCowCore is CoinCow721 {
    event Birth(address creator, uint256 tokenId);

    mapping(address => bool) registeredCowInterface;

    constructor() public {
        ceoAddress = msg.sender;
        cooAddress = msg.sender;
    }

    function registerCowInterface(address cowInterfaceAddress) public onlyCOO {
        require(!registeredCowInterface[cowInterfaceAddress]);

        CowInterface cowInterface = CowInterface(cowInterfaceAddress);
        require(cowInterface.implementsCow());
        require(cowInterface.coinCowAddress() == address(this));

        registeredCowInterface[cowInterface] = true;
    }

    function createCow() external returns (uint256 tokenId) {
        CowInterface cowInterface = CowInterface(msg.sender);
        require(cowInterface.implementsCow());
        require(cowInterface.enabled());
        require(cowInterface.coinCowAddress() == address(this));

        tokenId = cows.push(Cow(msg.sender, uint64(now))) - 1;
        emit Birth(msg.sender, tokenId);
    }
}
