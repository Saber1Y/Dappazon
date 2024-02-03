// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    address public owner = msg.sender;

    struct Item {
        uint256 id;
        string name;
        string image;
        string category;
        uint256 cost;
        uint256 rating;
        uint256 stock;
    }

    event listPro(string name, uint256 cost, uint256 quantity);

    mapping(uint256 => Item) public items;

    function ListProduct(
        uint256 _id,
        string memory _name,
        string memory _image,
        string memory _cate,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public {
        Item memory item = Item(
            _id,
            _name,
            _image,
            _cate,
            _cost,
            _rating,
            _stock
        );

        items[_id] = item;

        emit listPro(_name, _cost, _stock);
    }
}
