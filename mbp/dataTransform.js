const endorsementsArr = [
     {
      name: 'javascript',
      user: 'brad'
  },{
      name: 'javascript',
      user: 'dave'
  },{
      name: 'css',
      user: 'brad'
  }, {
      name: 'javascript',
      user: 'carla'
  }, {
      name: 'sql',
      user: 'sharleen'
  }];
// You have to organize them so that they are in the following format.
// [{name: 'javascript', users: [...], count: number}, ...] in descending order based on count.
function reOrganize(array) {
    const results = [];
    // const indexes = [];
    array.forEach((val) => {
        let obj = {
            name: val.name,
            users: [],
            count: 0
        };
        obj.users.push(val.user);
        obj.count = obj.users.length;
        results.push(obj)
    });
    console.log(results)
}

reOrganize(endorsementsArr);