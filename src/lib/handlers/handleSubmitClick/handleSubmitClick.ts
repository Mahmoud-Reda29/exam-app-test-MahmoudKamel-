import { throttle } from "@lib/utils/throttle.utils";

export const handleClick = throttle(() => {
       // setCount((prev) => prev + 1);
}, 2000);

