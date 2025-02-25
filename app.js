'use strict';


var storeName = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesperhour: [],
  randomCustomer: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiePerHour: function () {
    return Math.round(this.randomCustomer() * this.avg);
  },
  totalDailySales: function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesperhour.length; i++) {
      allsweets = allsweets + this.cookiesperhour[i];
    }
    return allsweets;
  }

};


var tokyo = {
  name: 'tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesperhour: [],
  randomCustomer: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },
  cookiePerHour: function () {
    return Math.round(this.randomCustomer() * this.avg);
  },
  totalDailySales: function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesperhour.length; i++) {
      allsweets = allsweets + this.cookiesperhour[i];
    }
    return allsweets;

  }
};


var dubai = {
  name: 'dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesperhour: [],
  randomCustomer: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },

  cookiePerHour: function () {
    return Math.round(this.randomCustomer() * this.avg);
  },
  totalDailySales: function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesperhour.length; i++) {
      allsweets = allsweets + this.cookiesperhour[i];
    }
    return allsweets;
  }
};


var paris = {
  name: 'paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesperhour: [],
  randomCustomer: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },

  cookiePerHour: function () {
    return Math.round(this.randomCustomer() * this.avg);
  },
  totalDailySales: function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesperhour.length; i++) {
      allsweets = allsweets + this.cookiesperhour[i];
    }
    return allsweets;
  }
};


var lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesperhour: [],

  randomCustomer: function () {
    return Math.random() * (this.max - this.min) + this.min;
  },

  cookiePerHour: function () {
    return Math.round(this.randomCustomer() * this.avg);
  },
  totalDailySales: function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesperhour.length; i++) {
      allsweets = allsweets + this.cookiesperhour[i];
    }
    return allsweets;
  }
};

for (var i = 0; i < time.length; i++) {
  lima.cookiesperhour.push(lima.cookiePerHour());
  seattle.cookiesperhour.push(seattle.cookiePerHour());
  tokyo.cookiesperhour.push(tokyo.cookiePerHour());
  dubai.cookiesperhour.push(dubai.cookiePerHour());
  paris.cookiesperhour.push(paris.cookiePerHour());
}

var limalist = document.getElementById('lima');
for (var i = 0; i < time.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${time[i]}: ${lima.cookiesperhour[i]}     cookies`;
  limalist.append(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${lima.totalDailySales()}
cookies`;
limalist.append(totalLi);


var seattlelist = document.getElementById('seattle');
for (var i = 0; i < time.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${time[i]}:${seattle.cookiesperhour[i]} cookies`;
  seattlelist.append(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${seattle.totalDailySales()} cookies`;
seattlelist.append(totalLi);



var tokyolist = document.getElementById('tokyo');
for (var i = 0; i < time.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${time[i]}:${tokyo.cookiesperhour[i]}  cookies`;
  tokyolist.append(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${tokyo.totalDailySales()} cookies`;
tokyolist.append(totalLi);


var dubailist = document.getElementById('dubai');
for (var i = 0; i < time.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${time[i]}: ${dubai.cookiesperhour[i]} cookies`;
  dubailist.append(li);
}
var totalLi = document.createElement('li');
totalLi.textcontent = `Total: ${dubai.totalDailySales()}
cookies`;
dubailist.append(totalLi);

var parislist = document.getElementById('paris');
for (var i = 0; i < time.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${time[i]}: ${paris.cookiesperhour[i]} cookies`;
  parislist.append(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${paris.totalDailySales()}
 cookies`;
parislist.append(totalLi);



























