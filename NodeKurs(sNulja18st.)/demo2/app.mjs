// import log, {characters, greet as hello}  from './characters.mjs';
// log();

async function main() {
    try{
    const {characters, greet} = await import('./characters.mjs');
  for (const character of characters) {
    greet(character);
  }
    } catch (error) {
        console.log(error);
    }
}

main();
