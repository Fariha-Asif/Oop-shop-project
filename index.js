#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let intro = await inquirer.prompt({
    name: "intro",
    type: "input",
    message: chalk.redBright("Write your name here?")
});
console.log(chalk.blueBright.bold("//////// WELCOME"), chalk.magentaBright.bold.italic(`${intro.intro.toUpperCase()}`), chalk.blueBright.bold("////////"));
const hasAC = () => true;
const is4GEnabled = () => true;
class Mobile {
    name;
    model;
    priceIn$;
    is4G;
    constructor(name, model, priceIn$, is4G) {
        this.name = name;
        this.model = model;
        this.priceIn$ = priceIn$;
        this.is4G = is4G;
    }
}
class Car {
    name;
    model;
    priceIn$;
    isAC;
    constructor(name, model, priceIn$, isAC) {
        this.name = name;
        this.model = model;
        this.priceIn$ = priceIn$;
        this.isAC = isAC;
    }
}
const options = async () => {
    let condition = true;
    while (condition) {
        const select = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.greenBright("Which shop you want to visit?"),
            choices: ["Mobile Shop", "Car Shop", "Exit"]
        });
        if (select.select === "Mobile Shop") {
            const variety = await inquirer.prompt({
                name: "var",
                type: "list",
                message: chalk.yellowBright("Kindly select the max level of your choice."),
                choices: ["within $70", "More than $70"]
            });
            if (variety.var === "within $70") {
                console.log(chalk.cyanBright("You came at the right place. We have different type of models such as:"));
                const obj1 = [
                    new Mobile("itel", "P17 Pro", 50, is4GEnabled),
                    new Mobile("VNUS", "Rock 1", 40, is4GEnabled),
                    new Mobile("Xiaomi Redmi", "A2 Plus", 69, is4GEnabled),
                    new Mobile("Sparx Neo", "5 Plus", 64, is4GEnabled),
                    new Mobile("Sparx Neo", "5 Pro", 59, is4GEnabled),
                    new Mobile("Sparx Neo", "6 Plus", 65, is4GEnabled),
                    new Mobile("Dcode Cygnal", "2 Pro", 68, is4GEnabled),
                    new Mobile("Sparx Neo", "7 Plus", 67, is4GEnabled),
                    new Mobile("Dcode Cygnal", "3 Lite", 61, is4GEnabled),
                    new Mobile("Samsung Galaxy", "A04", 64, is4GEnabled)
                ];
                console.log(obj1);
            }
            else {
                console.log(chalk.cyanBright("You came at the right place. We have different type of models such as:"));
                const obj2 = [
                    new Mobile("Realme", "C67", 131, is4GEnabled),
                    new Mobile("Oppo", "A17", 127, is4GEnabled),
                    new Mobile("Techno Pova", "Neo2", 143, is4GEnabled),
                    new Mobile("Samsung Galaxy", "A14", 115, is4GEnabled),
                    new Mobile("Oppo", "A57", 121, is4GEnabled),
                    new Mobile("Vivo", "Y15C", 113, is4GEnabled),
                    new Mobile("Infinix Hot", "12play", 115, is4GEnabled),
                    new Mobile("Vivo", "Y21a", 121, is4GEnabled),
                    new Mobile("Realme", "C35", 115, is4GEnabled),
                    new Mobile("Infinix Hot", "12i", 123, is4GEnabled)
                ];
                console.log(obj2);
            }
        }
        else if (select.select === "Car Shop") {
            const carVariety = await inquirer.prompt({
                name: "var",
                type: "list",
                message: chalk.greenBright("Kindly select the max level of your choice."),
                choices: ["Under $18000", "More than $18000"]
            });
            if (carVariety.var === "Under $18000") {
                console.log(chalk.cyanBright("You came at the right place. We have different type of models such as:"));
                const carObj1 = [
                    new Car("Daihatsu Move", "X SA 2 2021", 13477, hasAC),
                    new Car("Honda", "N Wgn G 2014", 9883, hasAC),
                    new Car("Honda Civic", "MXB (Hybrid) 2006", 10692, hasAC),
                    new Car("Toyota Premio", "X 1.8 2007", 13656, hasAC),
                    new Car("Mercedes", "Benz C Class 1998", 7008, hasAC),
                    new Car("Toyota", "Prado 1995", 16531, hasAC),
                    new Car("Toyota Corolla", "Altis Automatic 1.6 2015", 13836, hasAC),
                    new Car("Toyota Corolla", "Fielder X G Edition 2007", 13117, hasAC),
                    new Car("Changan Karvaan Plus", "1.2 2024", 10778, hasAC),
                    new Car("Toyota Corolla", "Altis Automatic 1.6 2019", 17070, hasAC)
                ];
                console.log(carObj1);
            }
            else {
                const carObj2 = [
                    new Car("Toyota Corolla", "Altis Grande CVT-i 1.8 2020", 21383, hasAC),
                    new Car("Honda Civic", "Oriel 1.8 i-VTEC CVT 2021", 23180, hasAC),
                    new Car("Honda Civic", "RS 2023", 32794, hasAC),
                    new Car("Honda Civic", "Oriel 2023", 29829, hasAC),
                    new Car("Honda Civic", "Oriel 1.8 i-VTEC CVT 2019", 19227, hasAC),
                    new Car("Honda", "BR-V i-VTEC S 2021", 18328, hasAC),
                    new Car("Toyota Corolla", "Altis Grande CVT-i 1.8 2020", 21383, hasAC),
                    new Car("Honda Civic", "Oriel 1.8 i-VTEC CVT 2021", 23180, hasAC),
                    new Car("Honda Civic", "1.5 RS Turbo 2020", 23360, hasAC),
                    new Car("Honda Civic", "Oriel 2023", 29829, hasAC)
                ];
                console.log(carObj2);
            }
        }
        else {
            const exit = await inquirer.prompt({
                name: "exit",
                type: "confirm",
                message: chalk.redBright("Are you sure you want to exit?"),
                default: true
            });
            if (exit.exit === true) {
                condition = false;
                console.log(chalk.magentaBright.bold.italic("THANKYOU FOR VISITING OUR SHOP..."));
            }
            else {
                condition = true;
            }
        }
    }
};
options();
