pragma solidity ^0.4.23;

import "./AccessControl.sol";

contract Farm is AccessControl {
    struct FarmInfo {
        address owner;
        bytes32 name;
    }

    uint256 creationFee;
    mapping(address => uint256) userToFarmId;
    mapping(bytes32 => uint256) farmNameToId;
    FarmInfo[] farms;

    constructor(address core) public AccessControl(core) {
        farms.length = 1;
        creationFee = 0.2 ether;
    }

    function setCreationFee(uint256 fee) public onlyCOO {
        creationFee = fee;
    }

    function create(bytes32 name) public payable whenNotPaused returns (uint256 farmId) {
        require(farmNameToId[name] == 0);
        require(userToFarmId[msg.sender] == 0);
        require(msg.value >= creationFee);

        farmId = farms.push(FarmInfo(msg.sender, name)) - 1;
        userToFarmId[msg.sender] = farmId;
        farmNameToId[name] = farmId;
    }

    function withdrawBalance() public onlyCFO {
        address(nonFungibleContract).transfer(address(this).balance);
    }
}
