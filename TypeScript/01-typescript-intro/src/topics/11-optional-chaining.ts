export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jonathan",
};

const passenger2: Passenger = {
  name: "Cristi",
  children: ["Tamys", "Sasy"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(
    `Passenges: ${passenger.name} Children length: ${howManyChildren}`
  );
};

printChildren(passenger2);
printChildren(passenger1);
