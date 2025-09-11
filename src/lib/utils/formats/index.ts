// check valid params
export function formatPathName(path:string):string[] {
       if(path.length !== 1 && path.includes("/")) {
              const pathname =  path.split("/").map(p => p === "" ? "home" : p);
              return pathname;
       }

       return [path];
}