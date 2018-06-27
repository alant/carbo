pragma solidity ^0.4.23;

import "../AccessControl.sol";
import "./CowInterface.sol";

contract CowBase is CowInterface, AccessControl {
    constructor(address coreAddress) public AccessControl(coreAddress) {

    }

    struct Cow {
        bool exists;
        uint256 contractSize;
        uint256 lastStolen;
        uint64 lastMilkTime;
        uint64 startTime;
        uint64 endTime;
        uint256 totalMilked;
        uint256 totalStolen;
    }

    mapping(address => uint256) public balanceOf;
    mapping(uint256 => Cow) cowIdToCow;

    event Milked(address owner, uint256 tokenId, uint256 amount);
    event Stolen(address owner, uint256 tokenId, uint256 amount);

    function profitUnit() public view returns (string);
    function contractType() public view returns (string);
    function contractUnit() public view returns (string);

    function milkThreshold() public view returns (uint256);
    function spillThreshold() public view returns (uint256);
    function stealThreshold() public view returns (uint256);

    function milkAvailable(uint256 _tokenId) public view returns (uint256);

    function milk(uint256 _tokenId) public {
        Cow storage cow = cowIdToCow[_tokenId];
        require(cow.exists);

        address owner = nonFungibleContract.ownerOf(_tokenId);
        require(msg.sender == owner);
        uint256 available = milkAvailable(_tokenId);
        require(available >= milkThreshold());

        balanceOf[msg.sender] += available;
        cow.lastMilkTime = uint64(now);
        cow.lastStolen = 0;
    }

    function steal(uint256 _tokenId) public {
        Cow storage cow = cowIdToCow[_tokenId];
        require(cow.exists);

//        address owner = nonFungibleContract.ownerOf(_tokenId);
        uint256 available = milkAvailable(_tokenId);
        require(available >= stealThreshold());

        uint256 stolen = available - spillThreshold();
        balanceOf[msg.sender] += stolen;
        cow.lastStolen = stolen;
    }

    function isThisType(uint256 _tokenId) public view returns (bool) {
        return cowIdToCow[_tokenId].exists;
    }

    function getCowInfo(uint256 _tokenId) public view returns (
        uint256 contractSize,
        uint256 lastStolen,
        uint256 lastMilkTime,
        uint256 startTime,
        uint256 endTime,
        uint256 totalMilked,
        uint256 totalStolen
    ) {
        Cow storage cow = cowIdToCow[_tokenId];
        if (!cow.exists) return ;

        contractSize = cow.contractSize;
        lastStolen = cow.lastStolen;
        lastMilkTime = cow.lastMilkTime;
        startTime = cow.startTime;
        endTime = cow.endTime;
        totalMilked = cow.totalMilked;
        totalStolen = cow.totalStolen;
    }
}
