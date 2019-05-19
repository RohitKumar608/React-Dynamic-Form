var DATA ={
      "message":"Data Found",
      "result":{
         "data":{
            "message":"Data found",
            "result":[
               {
                  "fieldName":"Amount",
                  "labelName":"Amount",
                  "inputType":"number",
                  "id":"5cbdb55729a86678bf44622a"
               },
               {
                  "fieldName":"PersonalExpense",
                  "labelName":"Personal Expense",
                  "inputType":"boolean",
                  "id":"5cbdb55729a86678bf446235"
               },
               {
                  "fieldName":"Comments",
                  "labelName":"Comments",
                  "inputType":"text",
                  "id":"5cbdb55729a86678bf446237"
               },
               {
                  "fieldName":"Currency",
                  "labelName":"Currency",
                  "inputType":"select",
                  "id":"5cbdc2b52660ee124b16ce86",
                  "connectedListData":{
                     "id":"5cbdc2472660ee124b16ce83",
                     "connectedListName":"entry currencies",
                     "listManagementData":[
                        {
                           "level":2,
                           "isAdmin":false,
                           "isVisible":true,
                           "isStatic":true,
                           "isFolder":false,
                           "activeStatus":true,
                           "itemCode":"INR",
                           "itemName":"India, Rupee",
                           "parentId":"5cbdb55729a86678bf4462d5",
                           "companyId":"5cbdb557063f2465f4f619c0",
                           "listManagementId":"5cab619a99946f7206d4fc18",
                           "id":"5cbdb55929a86678bf4462f4"
                        },
                        {
                           "level":2,
                           "isAdmin":false,
                           "isVisible":true,
                           "isStatic":true,
                           "isFolder":false,
                           "activeStatus":true,
                           "itemCode":"USD",
                           "itemName":"US, Dollar",
                           "parentId":"5cbdb55729a86678bf4462d5",
                           "companyId":"5cbdb557063f2465f4f619c0",
                           "listManagementId":"5cab61a899946f7206d4fc19",
                           "id":"5cbdb55929a86678bf4462f6"
                        },
                        {
                           "level":2,
                           "isAdmin":false,
                           "isVisible":true,
                           "isStatic":true,
                           "isFolder":false,
                           "activeStatus":true,
                           "itemCode":"AUD",
                           "itemName":"Australia, Dollar",
                           "parentId":"5cbdb55729a86678bf4462d5",
                           "companyId":"5cbdb557063f2465f4f619c0",
                           "listManagementId":"5cab61b399946f7206d4fc1a",
                           "id":"5cbdb55929a86678bf4462f8"
                        }
                     ]
                  }
               },
               {
                  "fieldName":"PaymentType",
                  "labelName":"Payment Type",
                  "inputType":"select",
                  "id":"5cbdc2b52660ee124b16ce87",
                  "connectedListData":{
                     "id":"5cbdc2552660ee124b16ce84",
                     "connectedListName":"pt",
                     "listManagementData":[
                        {
                           "itemName":"CASH",
                           "parentId":"5cbdb55829a86678bf4462e6",
                           "id":"5cbdb55a29a86678bf4462fa"
                        },
                        {
                           "itemName":"CBCP Corporate Card",
                           "parentId":"5cbdb55829a86678bf4462e6",
                           "id":"5cbdb55a29a86678bf4462fc"
                        },
                        {
                           "itemName":"Company Paid",
                           "parentId":"5cbdb55829a86678bf4462e6",
                           "id":"5cbdb55a29a86678bf4462fe"
                        },
                        {
                           "itemName":"IBCP Corporate Card",
                           "parentId":"5cbdb55829a86678bf4462e6",
                           "id":"5cbdb55a29a86678bf446300"
                        },
                        {
                           "itemName":"Company Fund",
                           "parentId":"5cbdb55829a86678bf4462e6",
                           "id":"5cbdb55a29a86678bf446302"
                        }
                     ]
                  }
               },
               {
                  "fieldName":"Country",
                  "labelName":"Country",
                  "inputType":"select",
                  "id":"5cbdc2b52660ee124b16ce88",
                  "connectedListData":{
                     "id":"5cbdc2832660ee124b16ce85",
                     "listManagementData":[
                        {
                           "itemName":"India",
                           "parentId":"5cbdb55729a86678bf44628a",
                           "id":"5cbdb55929a86678bf4462f0"
                        },
                        {
                           "itemName":"USA",
                           "parentId":"5cbdb55729a86678bf44628a",
                           "id":"5cbdb55929a86678bf4462f2"
                        }
                     ]
                  }
               },
               {
                  "fieldName":"TransactionDate",
                  "labelName":"Transaction Date",
                  "inputType":"date",
                  "id":"5cbdb55729a86678bf44622e"
               }
            ]
         }
      }
}
export default DATA
