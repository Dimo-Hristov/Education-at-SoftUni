function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('#inputs textarea');
      let restaurants = JSON.parse(input.value);
      let bestRestaurant = '';
      let bestAverageSalary = 0;
      let restaurantList = {};
      // key is the restaurant name, value have one kvp array 0index is workername 1 index is his salary, the other value is average salary of the restaurant acces by .averageSalary

      for (const restaurant of restaurants) {
         const [restaurantName, rest] = restaurant.split(' - ');
         const workers = rest.split(', ');
         const workersArr = [];
         let sumOfSalaries = 0;

         for (const worker of workers) {
            let [workerName, workerSalary] = worker.split(' ');
            workerSalary = Number(workerSalary);
            sumOfSalaries += workerSalary
            workersArr.push([workerName, workerSalary])
         }

         workersArr.sort((a, b) => b[1] - a[1]);

         if (restaurantList[restaurantName]) {
            const currentAverageSalary = sumOfSalaries / workers.length;
            const previousAverageSalary = restaurantList[restaurantName].averageSalary;
            const newAverageSalary = (currentAverageSalary + previousAverageSalary) / 2;
            let concatenatedArray = restaurantList[restaurantName].workers.concat(workersArr).sort((a, b) => b[1] - a[1])
            restaurantList[restaurantName].workers = concatenatedArray;

            restaurantList[restaurantName].averageSalary = newAverageSalary;

            if (newAverageSalary > bestAverageSalary) {
               bestRestaurant = restaurantName;
               bestAverageSalary = newAverageSalary;
            }


         } else {
            let currentAverageSalary = sumOfSalaries / workers.length;

            if (currentAverageSalary > bestAverageSalary) {
               bestRestaurant = restaurantName;
               bestAverageSalary = currentAverageSalary;
            }

            restaurantList[restaurantName] = {
               workers: workersArr,
               averageSalary: currentAverageSalary
            }
         }
      }

      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${(restaurantList[bestRestaurant].workers[0][1]).toFixed(2)}`

      let outputText = ''
      restaurantList[bestRestaurant].workers.forEach(element => {
         let name = element[0];
         let salary = element[1];
         outputText += `Name: ${name} With Salary: ${salary} `
      })
      document.querySelector('#workers p').textContent = outputText;
   }
}

