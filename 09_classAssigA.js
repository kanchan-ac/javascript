console.log(
  `--------------------------------------------------------------------------step1---------------------------------------------------------------------\n`
);
class Vehicle {
  vehicleName;
  vehicleNo;
  vehicleOwnerName;
  licenceNo;
  color;
  constructor(vehicleName, vehicleNo, vehicleOwnerName, licenceNo, color) {
    this.vehicleName = vehicleName;
    this.vehicleNo = vehicleNo;
    this.vehicleOwnerName = vehicleOwnerName;
    this.licenceNo = licenceNo;
    this.color = color;
  }
  displayVehicle() {
    console.log(`Detail information about vehicle:`);
    console.log(
      `Vehicle Name: ${this.vehicleName}\nVehicle No: ${this.vehicleNo}\nVehicle Owner Name:${this.vehicleOwnerName}\nLicence No:${this.licenceNo}\nBike Color:${this.color}\n`
    );
  }
  displayArray() {
    console.log(`Detail information about vehicle:`);
    console.log(
      `Vehicle Name: ${this.vehicleName} Vehicle No: ${this.vehicleNo} Vehicle Owner Name:${this.vehicleOwnerName} Licence No:${this.licenceNo} Bike Color:${this.color}\n`
    );
  }
}
const vehicleinfo = new Vehicle(
  "Bike",
  "MH-28-0003369",
  "Kanchan",
  "MH-28-2003-0003369",
  "Black"
);
vehicleinfo.displayVehicle();
const car = new Vehicle(
  "Car",
  "MH-29-0003369",
  "Komal",
  "MH-29--2002-0003369",
  "Grey"
);
const bus = new Vehicle(
  "Bus",
  "MH-29-0003367",
  "Suyog",
  "MH-29-2003-0003367",
  "Red"
);
const truck = new Vehicle(
  "Truck",
  "MH-30-0003467",
  "Vitthal",
  "MH-30-2004-0003467",
  "Orange"
);
const van = new Vehicle(
  "Van",
  "MH-30-0003468",
  "Ujval",
  "MH-30-2001-0003468",
  "Blue"
);
const tractor = new Vehicle(
  "Tractor",
  "MH-31-0003468",
  "Pawan",
  "MH-31-2005-0003468",
  "Green"
);
const arrayOfVehicles = [car, bus, truck, van, tractor];
console.log(`Traversing array of Object...`);
for (const key of arrayOfVehicles) {
  key.displayArray();
}
console.log(
  `--------------------------------------------------------------------------step2-----------------------------------------------------------------------------\n`
);
class College {
  constructor(collegeName, location, pricipalName, establishedIn) {
    this.collegeName = collegeName;
    this.location = location;
    this.pricipalName = pricipalName;
    this.establishedIn = establishedIn;
  }
  display() {
    console.log(`Detail information about College:`);
    console.log(
      `College Name: ${this.collegeName}\nLocation: ${this.location}\nPricipal Name:${this.pricipalName}\nEstablished Year:${this.establishedIn}\n`
    );
  }

  displayCollegeDetails() {
    console.log(`Detail information about College:`);
    console.log(
      `College Name: ${this.collegeName} Location: ${this.location} Pricipal Name:${this.pricipalName} Established Year:${this.establishedIn}\n`
    );
  }
}
const dypcoe = new College(
  "D.Y Patil College Of Engineering,Pune",
  "Akudi",
  "Mrs. P. Malathi",
  1984
);
dypcoe.display();
const pccoe = new College("PCCOE,Pune", "Akudi", "Dr. Mrs. J,V.Katti", 1999);
pccoe.displayCollegeDetails();
const coep = new College(
  "College Of Engineering,Pune",
  "Pune",
  "Prof.B.B.Ajuja",
  1854
);
coep.displayCollegeDetails();
const vit = new College("VIT", "Pune", "Prof. Nitin B. Patki", 1983);
vit.displayCollegeDetails();
const mit = new College("MIT", "Pune", "Dr. Krishna Kathuria", 1983);
mit.displayCollegeDetails();
console.log(
  `--------------------------------------------------------------------------step3-----------------------------------------------------------------------------\n`
);
console.log(`Traversing all Object of College class using for in loop...`);
function traverseObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      console.log(`${key} : ${element}`);
    }
  }
  console.log(`\n`);
}
traverseObject(dypcoe);
traverseObject(pccoe);
traverseObject(coep);
traverseObject(vit);
traverseObject(mit);
