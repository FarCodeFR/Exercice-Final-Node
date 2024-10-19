import { say } from "cowsay";
import dotenv, { config } from "dotenv";
config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	say({ text: `Bonjour je m'appel ${name}, je suis au campus de ${campus}` }),
);
