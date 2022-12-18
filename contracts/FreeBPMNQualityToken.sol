// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FreeBPMNQualityToken {
    mapping(address => uint256) private balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    address public owner;

    uint256 public totalSupply;

    string public constant name = "Test FreeBPMNQuality Token V3";

    string public constant symbol = "tFBPMNQ";

    uint32 public constant decimals = 18;

    uint256 public tokenPrice;

    constructor(uint256 initialSupply, uint256 initialTokenPrice) {
        owner = msg.sender;

        balances[msg.sender] = initialSupply;
        totalSupply = initialSupply;

        tokenPrice = initialTokenPrice;

        emit Transfer(address(0), msg.sender, initialSupply);
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balances[msg.sender] >= _value);
        require(balances[_to] + _value >= balances[_to]);

        balances[msg.sender] -= _value;
        balances[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool) {
        require(msg.sender == owner);
        require(balances[_from] >= _value);
        require(balances[_to] + _value >= balances[_to]);

        balances[_from] -= _value;
        balances[_to] += _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    function buyTokens() public payable returns (uint256) {
        uint256 amount = msg.value / tokenPrice;

        require(balances[address(this)] >= amount);

        balances[msg.sender] += amount;
        balances[address(this)] -= amount;

        emit Transfer(address(this), msg.sender, amount);

        return amount;
    }

    function sellTokens(uint256 amount) public returns (uint256) {
        require(balances[msg.sender] >= amount);

        balances[address(this)] += amount;
        balances[msg.sender] -= amount;

        uint256 revenue = amount * tokenPrice;

        payable(msg.sender).transfer(revenue);

        emit Transfer(msg.sender, address(this), amount);

        return revenue;
    }

    function setTokenPrice(uint256 newTokenPrice) public {
        require(msg.sender == owner);

        tokenPrice = newTokenPrice;
    }
}
