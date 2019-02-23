//solium-disable linebreak-style
pragma solidity ^0.4.17;

contract Registry{
    
    mapping(string => address) deeds;
    address private owner;
    
    // ensure its the registry
    modifier restricted(){
        require(msg.sender == owner);
        _;
    }
    
    function Registry() public{
        owner = msg.sender;
    }
    
    function registerDeed(address _ownerAddress,string _titleNumb,uint _approxArea,uint _regMapSheetNo,string _owners,string _date,string _registar,string _lawyers) public restricted returns(address){
        address newDeed = new Deed(owner,_ownerAddress,_titleNumb,_approxArea,_regMapSheetNo,_owners,_date,_registar,_lawyers);
        deeds[_titleNumb] = newDeed;
        return newDeed; 
    }
    
    
    function lookUp(string _titleNumb) public view returns(address){
        address deedAddress = deeds[_titleNumb];
        return deedAddress;
    }
    
}

contract Deed{
    
    // ensure its owner
    modifier restricted(){
        require(msg.sender == owner);
        _;
    }
    
    // ensure no cavet is unsettled
    modifier cavetCheck(){
        bool flag = false;
        for(uint i = 0; i<encumbarances.length;i++){
            if(!encumbarances[i].settled){
                flag = true;
                break;
            }
        }
        if(!flag){
            _;
        }else{
            require(false);
        }
        
    }
    
    //ensure its registar
    modifier registarCheck(){
        require(msg.sender == registar);
        _;
    }
    
    struct Encumbarence{
        string date;
        string nature;
        bool settled;
        string registar;
    }
    
    struct Ownership{
        string owners; //separate with commas(id's)
        string date;
        string registar;
        string lawyers;
        address ownerAddress;
    }
    
    struct TransferRequest{
        string to;
        uint price;
        string nature;
        address toAddress;
        bool approved;
        string lawyers;
        
    }
    
    address private registar;
    address private owner;
    string public titleNumb;
    uint public approxArea;
    uint public regMapSheetNo;
    
    // bool public forSale;
    Ownership public owners;
    Ownership[] private prevOwners;
    Encumbarence[] private encumbarances;
    uint public price;
    TransferRequest private transferRequest;
    
    function Deed(address _registarAddress,address _ownerAddress,string _titleNumb,uint _approxArea,uint _regMapSheetNo,string _owners,string _date,string _registar,string _lawyers) public {
        registar = _registarAddress;
        owner = _ownerAddress;
        titleNumb = _titleNumb;
        approxArea = _approxArea;
        regMapSheetNo = _regMapSheetNo;
        
        Ownership memory newOwnership = Ownership({
            owners:_owners,
            date:_date,
            registar:_registar,
            lawyers:_lawyers,
            ownerAddress:_ownerAddress
        });
        
        //set new owners
        owners = newOwnership;
    }
    
    // open to public
    function getEncumbarmnnmance(uint index) public returns(string,string,bool,string){
        Encumbarence res = encumbarances[index];
        return (res.date,res.nature,res.settled,res.registar);
    }
        
    // open to public
    function getPrevOwner(uint index) public returns (string,string,string,string){
        Ownership res = prevOwners[index];
        return(res.owners,res.date,res.registar,res.lawyers);
    }

    // restricted to owner
    function ownershipTransferRequest(string _to,string _nature,address _toAddress,string _lawyers) public restricted {
        // ensure no encumbarance
        // ensure owner
        // ensure listed
        
        TransferRequest memory newRequest = TransferRequest({
            to:_to,
            toAddress:_toAddress,
            price:price,
            nature:_nature,
            approved:false,
            lawyers:_lawyers
        });
        
        transferRequest = newRequest;
        
    }
    
    // restricted to registar
    function transferApproval(string _date,string _registar) public registarCheck cavetCheck {
  
        Ownership memory newOwnership = Ownership({
           owners:transferRequest.to,
           date:_date,
           registar:_registar,
           lawyers:transferRequest.lawyers,
           ownerAddress:transferRequest.toAddress
        });
        
        prevOwners.push(owners);
        //set new owners details
        owners = newOwnership;
    }
    
    // restricted to registar
    function postEncumbarance(string _nature,string _date,string _registar) public registarCheck{
        Encumbarence memory newCavet = Encumbarence({
            date:_date,
            nature:_nature,
            settled:false,
            registar:_registar
        });
        encumbarances.push(newCavet);
    }
}



