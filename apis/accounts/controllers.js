const Account = require("../../models/Account");

//done
exports.getAccounts =  async (req, res) => {
  try{
    console.log("getAccounts", req.body)
    const accounts = await Account.find(req.body).lean(req.body) //you put await then put async
    res.json(accounts)
    }catch(e) {
     console.log(e.message);
    }
  }



 //done 
// const createsANewaccount = async (newAccountData) => {
//     console.log("Creating new account", newAccountData)
//      const newAccount = await Account.create(newAccountData)
//     return newAccount
// }

 exports.createANewaccount= async (req,res) => {
  try{
    console.log("Creating new account", req.body)
    const newAccount = await Account.create(req.body)
    res.json(newAccount)
  }catch(e){
    console.log(e.message);
  }
}


const deleteAccount1 = (currentAccount, newAccounts) => {
  try{
     console.log("My new accounts are: ", newAccounts)
  const deletedAccount = Account.findById(currentAccount)
  Account.deleteOne(deletedAccount);
  Account.find(newAccounts);

  }catch(e){ 
    console.log(e.message);
  }
 
}


exports.deleteAccount= (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((x) => x.id == accountId);
  if (foundAccount) {
    deleteAccount1(accountId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account not found" });
  }
}




   
//done
//   const updatesAnExistingAccount = (currentAccount, newData) => {
//    try{
//      const myAccount = Account.find(currentAccount)
//     myAccount.updateOne(newData)
//     Account(myAccount).save()
//     return myUpdatedAccount
//    }catch (e) {
//     console.log(e.message);
//    }
   
// }

exports.updatesAnAccount = async (req, res) => {
  const { accountId } = req.params;
  const foundAccount = await Account.findById(accountId); //x is the current record
  if (foundAccount) {
   await foundAccount.updateOne(req.body);
    res.status(204).json(); //status is range of number 
  } else {
    res.status(404).json({ message: "Account not found" });
  }
}

 




//done
exports.updateAccountController = async (req, res) => {
  const { accountId } = req.params
  const foundAccount = await Account.findById(accountId)
 try{ 
      foundAccount = await foundAccount.updateOne(req.body)
      res.json(foundAccount);
  } catch (e) {
    console.log(e.message);
  }
};


//done
exports.deleteAccountController = async (req, res) => {
  const { accountId } = req.params
  const foundAccount = await Account.findById(accountId)
  try{
   await foundAccount.deleteOne()
       res.status(201).json("account was deleted");
      } catch (e) {
        res.json(e)
        console.log(e.message);
      }
    };





exports.getAccount = async (req, res) => {
  const username = req.params.username;
  const funds = req.query.currency;
  console.log("username", username)
  console.log("currency", funds)
  let result = [];
  try{
    result = await Account.find({username: username})
    if(result.length === 0){
      result = await Account.find({currency: funds}) 
    }
    console.log(result)
    res.json(result)
  }catch (e) {
    console.log(e.message);
  }
 
}