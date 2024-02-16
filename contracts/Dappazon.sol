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

    struct Order {
        uint256 time;
        Item item;
    }

    mapping(uint256 => Item) public items;
    mapping(address => uint256) public orderCount;
    mapping(address => mapping(uint256 => Order)) public orders;

    event listPro(string name, uint256 cost, uint256 quantity);

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function ListProduct(
        uint256 _id,
        string memory _name,
        string memory _image,
        string memory _cate,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public onlyOwner {

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

    function BuyProduct(uint256 _id) public payable {
        Item memory item = items[_id];

        Order memory order = Order(block.timestamp, item);

        orderCount[msg.sender]++;
        orders[msg.sender][orderCount[msg.sender]] = order;

        items[_id].stock = item.stock - 1;
    }
}
