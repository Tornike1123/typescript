let myname: string = "tornike";
let x: number = 11;
let arr: string[] = ["T", "O", "K", "O"];
let a: any = "toko";

let user: {
  name: string;
  age: number;
  role: string | number;
  test(): boolean;
} = {
  name: "admin",
  age: 23,
  role: "momxmarebeli",
  test: function () {
    return true;
  },
};

interface Log {
  errorlog: string;
  successlog: string;
  data: number;
  savelog(): void;
}

let logoobj: Log = {
  errorlog: "home/bin/www/pulbic_html/index.php",
  successlog: "home.php",
  data: 2022,
  savelog: function () {
    return "toookkooo";
  },
};

logoobj.savelog();

function sm<T>(name: T): void {
  console.log("toookkooo");
}

sm<string>("tkkkk");
sm<number>(1995);
sm<boolean>(true);

console.log(user);

let input = document.querySelector("#inputt") as HTMLInputElement;
input.addEventListener("input", function () {
  console.log(input.value);
});

interface carTask {
  canFly: boolean;
  getName(): void;
  start: string;
}

class Car implements carTask {
  canFly: false;
  start: "asda12";
  carname: string;

  constructor(carname: string) {
    this.carname = carname;
  }
  public getName() {
    return this.carname;
  }
}
class mark extends Car {
  carname: string;
  constructor(carname: string) {
    super(carname);
  }
  Getmark() {
    return super.getName();
  }
}

let carr = new Car("Mercedes");


