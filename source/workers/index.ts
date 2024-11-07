import { resolve } from "path";
import { syncOrders } from "./syncOrders";
import { TIMEOUT } from "dns";

// setInterval(()=>{
//   console.log('Worker is running');
//   syncOrders().catch(console.error);
// }, 1000 * 30)

const sleep = (ms: number):Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms));


const main = async() => {
  while(true){
    syncOrders().catch(console.error);
    await sleep(1000 * 30)
  }
}

main().catch(console.error)

