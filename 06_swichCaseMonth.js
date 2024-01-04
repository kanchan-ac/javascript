console.log(
  `-----------------------------------------------Switch Case Statement----------------------------------------------------------`
);
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`Month ${month}: January\n`);
      break;
    case 2:
      console.log(`Month ${month}: February\n`);
      break;

    case 3:
      console.log(`Month ${month}: March\n`);
      break;

    case 4:
      console.log(`Month ${month}: April\n`);
      break;

    case 5:
      console.log(`Month ${month}: May\n`);
      break;

    case 6:
      console.log(`Month ${month}: June\n`);
      break;

    case 7:
      console.log(`Month ${month}: July\n`);
      break;

    case 8:
      console.log(`Month ${month}: August\n`);
      break;

    case 9:
      console.log(`Month ${month}: September\n`);
      break;

    case 10:
      console.log(`Month ${month}: October\n`);
      break;

    case 11:
      console.log(`Month ${month}: November\n`);
      break;

    case 12:
      console.log(`Month ${month}: December\n`);
      break;

    default:
      console.log(`Month ${month}: Invalid Input\n`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

