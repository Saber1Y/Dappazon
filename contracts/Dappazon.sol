// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {  
    string public name = "Dappazon";
    address public Owner = msg.sender;
}


struct Item {
    uint256 id;
    string image;
    string name;
    string catalogue;
    uint256 cart;
    uint256 rating;
    uint256 stock;
}

function ListProduct(
    uint256 _id,
    string memory _name
    string memory _image, 
    string memory _catalogue, 
    uint256 _cart, 
    uint256 _rating,
    uint256 _stock
    ) public {
        Item  memory item = Item(_id, _name, _cart, _rating, _stock, _image, _catalogue)
}