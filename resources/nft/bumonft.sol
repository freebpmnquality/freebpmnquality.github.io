// SPDX-License-Identifier: MIT-License
pragma abicoder v2;
pragma solidity >=0.7.0 <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/access/Ownable.sol";

/**
 * @title bumonft — NFT collection of business models for metaverse organizations
 */
contract bumonft is ERC721 {
    struct modelRecord {
        string title;
        string url;
        string hash;
        string annotation;
        string industry;
        uint256 totalStatements;
        uint256 syntIncorrect;
        uint256 syntIncomplete;
        uint256 semIncorrect;
        uint256 semIncomplete;
        uint256 dateTime;
    }

    modelRecord[] public models;

    uint256 private modelsCount;

    /// @notice Create a collection of business models
    /// @dev Use addModel() function in the constructor to create a collection
    ///  already with certain models.
    constructor() ERC721("bumonft", "BUMONFT") {
        modelsCount = 0;

        addModel(
            "Order goods",
            "https://freebpmnquality.github.io/images/models/bpmn/Order%20goods.png",
            "2b74920eb4dd446639e3a3451c2a15b221186e0875151ae94c08b3db6ba33403",
            'Example of a Business Process Model and Notation for a process "Order goods".',
            "BPMN",
            9,
            0,
            0,
            0,
            0
        );
        addModel(
            "Receive goods",
            "https://freebpmnquality.github.io/images/models/bpmn/Receive%20goods.png",
            "b3d8a657fce8c469a2e08d3c4434c8fe172c59fb7ce34f40d63b2c921b86bceb",
            'Example of a Business Process Model and Notation for a process "Receive goods".',
            "BPMN",
            10,
            0,
            0,
            0,
            0
        );
        addModel(
            "Sell goods",
            "https://freebpmnquality.github.io/images/models/bpmn/Sell%20goods.png",
            "008083f15e136774d5cb6c1f2c886bd51355db55f55da986c832192d79134fad",
            'Example of a Business Process Model and Notation for a process "Sell goods".',
            "BPMN",
            9,
            0,
            0,
            0,
            0
        );
    }

    /// @notice Add a new model to the collection
    /// @dev Total numbers of incorrect and incomplete statements (for syntactic and semantic respectively)
    ///  should be less than or equal to the total number of statements.
    /// @param _title The title of a business model
    /// @param _url The URL of a business model image
    /// @param _hash The SHA-256 hash value of a business model
    /// @param _annotation The brief description of a business model
    /// @param _industry The industry or domain of a business model
    /// @param _totalStatements The number of total statements of a business model
    /// @param _syntIncorrect The number of syntactically incorrect statements of a business model
    /// @param _syntIncomplete The number of syntactically incomplete statements of a business model
    /// @param _semIncorrect The number of semantically incorrect statements of a business model
    /// @param _semIncomplete The number of semantically incomplete statements of a business model
    function addModel(
        string memory _title,
        string memory _url,
        string memory _hash,
        string memory _annotation,
        string memory _industry,
        uint256 _totalStatements,
        uint256 _syntIncorrect,
        uint256 _syntIncomplete,
        uint256 _semIncorrect,
        uint256 _semIncomplete
    ) public {
        require(_totalStatements > 0);

        require((_syntIncorrect + _syntIncomplete) <= _totalStatements);

        require((_semIncorrect + _semIncomplete) <= _totalStatements);

        modelRecord memory _model = modelRecord(
            _title,
            _url,
            _hash,
            _annotation,
            _industry,
            _totalStatements,
            _syntIncorrect,
            _syntIncomplete,
            _semIncorrect,
            _semIncomplete,
            block.timestamp
        );

        models.push(_model);

        uint256 id = modelsCount;

        _safeMint(msg.sender, id);

        _setTokenURI(
            id,
            "https://freebpmnquality.github.io/resources/nft/tokenData.json"
        );

        modelsCount++;
    }
}
