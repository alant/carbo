pragma solidity ^0.4.23;

contract CowInterface {
    function implementsCow() public pure returns (bool);

    function enabled() public view returns (bool);
    function erc721() public view returns (address);
    function name() public view returns (string);
}
