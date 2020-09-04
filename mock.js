const Mock = require("mockjs");

const data = Mock.mock({
  "shoplist|5": [
    {
      _id: "@string(10)",
      "id|+1": 1,
      name: "@string",
      price: "@float",
      "phone|11": "8",
      "age|1-80": 2,
      "salary|2000-5000.1-3": 0,
      "status|1": true,
      "open|2-4": true,
      birthday: "@date",
      entryDate: "@date('yyyy/MM/DD')",
      createDate: "@datetime",
      updateDate: "@datetime('yyyy/MM/dd HH:mm:ss')",
      avatar: "@image(200*200)",
      email: "@email",
      area: "@region",
      address: "@county(true)"
    }
  ]
});

console.log(JSON.stringify(data, null, 2));
